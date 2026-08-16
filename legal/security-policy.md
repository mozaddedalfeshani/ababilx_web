# AbabilX Security Policy

**Effective Date:** July 9, 2026
**Last Updated:** July 9, 2026
**Version:** 1.0.0

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Security Governance](#3-security-governance)
4. [Infrastructure Security](#4-infrastructure-security)
5. [Encryption](#5-encryption)
6. [Authentication and Session Security](#6-authentication-and-session-security)
7. [Authorization and Access Control](#7-authorization-and-access-control)
8. [Secrets and Token Management](#8-secrets-and-token-management)
9. [Application Security](#9-application-security)
10. [Rate Limiting and Abuse Resistance](#10-rate-limiting-and-abuse-resistance)
11. [Logging and Monitoring](#11-logging-and-monitoring)
12. [Backups, Disaster Recovery, and Business Continuity](#12-backups-disaster-recovery-and-business-continuity)
13. [Vulnerability Management and Testing](#13-vulnerability-management-and-testing)
14. [Incident Response](#14-incident-response)
15. [Responsible Disclosure](#15-responsible-disclosure)
16. [Shared Responsibility](#16-shared-responsibility)
17. [Changes to This Policy](#17-changes-to-this-policy)
18. [Contact](#18-contact)
19. [Revision History](#19-revision-history)

---

## 1. Purpose and Scope

This Security Policy describes the technical and organizational measures AbabilX uses to protect the Service and the data entrusted to it. It covers our web, desktop, mobile, and API surfaces and the infrastructure behind them. It is a statement of practice, not a contract; contractual security commitments for business customers are made in the [Data Processing Addendum](./data-processing-addendum.md).

**Our commitment:** We treat user security and privacy as foundational requirements, not optional features. Every layer of the Service — authentication, transport, storage, access control, and monitoring — is designed to keep your data confidential, intact, and available only to you and those you authorize.

## 2. Definitions

- **"Access token"** — a short-lived JSON Web Token (JWT) authorizing API requests.
- **"Refresh token"** — a longer-lived, rotating credential used to obtain new access tokens.
- **"Least privilege"** — granting each system and person only the access required for their function.
- **"Subprocessor"** — see the [Subprocessor List](./subprocessors.md).

## 3. Security Governance

- Security requirements are owned by the engineering leadership and reviewed as the platform evolves.
- Our practices are **aligned with** recognized frameworks — including the spirit of SOC 2's trust principles (security, availability, confidentiality) and OWASP application-security guidance. We do not currently hold a third-party certification and do not claim one.
- Personnel access to production systems is limited to a small set of authorized individuals under least privilege (Section 7).
- Subprocessors are assessed for their security posture before engagement and bound by data-protection terms.

## 4. Infrastructure Security

- The Service runs on hardened server infrastructure with network-level access restrictions; administrative access requires authenticated, encrypted channels.
- Production data stores (PostgreSQL for durable data, Redis for caching and ephemeral state) are not exposed to the public internet.
- File and media storage uses dedicated object storage with scoped, time-limited upload credentials (presigned URLs), so clients never hold storage-account keys.
- Environments are separated: development and testing do not use production credentials.

## 5. Encryption

We protect data across its full path through AbabilX — from your device to our servers and while stored on our systems:

- **In transit (end-to-end connections):** all client–server and server–server traffic uses HTTPS/TLS (TLS 1.2+). WebSocket connections upgrade over TLS. We do not operate unencrypted production endpoints. Your session tokens and API requests never travel over plain HTTP.
- **At rest:** production databases and backups reside on encrypted storage volumes; object storage applies provider-managed at-rest encryption (AES-256 class).
- **Credential hashing and signing:** session integrity relies on signed JWTs (HMAC-SHA-256); one-time codes and tickets are generated with a cryptographically secure random source and are single-use with short expiry.

## 6. Authentication and Session Security

The Service's authentication design keeps credentials out of URLs, logs, and client-side script reach:

1. **OAuth sign-in.** Users authenticate via GitHub or Google OAuth; AbabilX never sees or stores user passwords.
2. **One-time exchange codes.** OAuth callbacks deliver a single-use, short-lived code that the client exchanges server-side for tokens, so tokens never transit the browser URL, history, or referrer headers.
3. **Short-lived access tokens.** API requests carry a JWT with a one-hour lifetime, limiting the exposure window of any leaked token.
4. **Rotating HttpOnly refresh cookies.** Web session refresh uses a rotating refresh token stored in an `HttpOnly; Secure; SameSite` cookie, path-restricted to the authentication endpoints and unreadable by JavaScript — neutralizing token theft via cross-site scripting.
5. **Connect tickets.** Account-linking flows (Slack, GitHub) use single-use tickets minted from an authenticated session instead of passing bearer tokens in redirect URLs.
6. **WebSocket authentication.** Real-time notification sockets authenticate through the connection handshake rather than URL query parameters.
7. **Revocation.** Signing out retires the refresh token server-side and clears its cookie; refresh tokens are rotated on every use, so a replayed old token fails.
8. **Device pairing.** Desktop sign-in uses short pairing codes with server-side brute-force rate limiting (Section 10); codes can be regenerated by the user at any time.

## 7. Authorization and Access Control

- Every API request is authenticated and then authorized against the requesting account: users can access only their own resources and the team resources their role permits.
- Team features enforce role-based permissions (owner, manager, member) evaluated server-side on each request — never trusted from the client.
- Administrative endpoints are gated behind a separate super-administrator check in middleware; administrative capability is limited to designated personnel.
- Privacy-affecting platform gates (for example, policy acceptance) are enforced in server middleware, not only in the interface.

## 8. Secrets and Token Management

- Third-party OAuth tokens (GitHub, Slack, Google) are stored server-side, are never returned to other users, and are excluded from API responses and serialization by default (deny-by-default field marshaling).
- Application secrets (signing keys, provider credentials) are supplied through environment configuration, not source code, and access to them is restricted.
- Webhook endpoints authenticate callers: GitHub App webhooks are signature-verified; internal server-to-server sinks require a shared internal secret; inbound board webhooks embed per-hook random tokens that can be regenerated or revoked.

## 9. Application Security

- **Input handling:** database access uses parameterized queries throughout, preventing SQL injection; request bodies are schema-validated before use.
- **Cross-origin controls:** the API enforces a strict CORS allow-list — production trusts only the configured frontend origin; permissive localhost origins are impossible in release mode.
- **Output encoding:** the web client uses a framework rendering model (React) that escapes content by default.
- **Cross-site request protection:** state-changing browser flows rely on `SameSite` cookie scoping plus bearer-token authorization, so cross-site form posts cannot authenticate.
- **Dependency hygiene:** dependencies are version-pinned and updated on a regular cadence; builds fail on compilation and vet errors.
- **AI-specific controls:** see the [AI Policy](./ai-policy.md), Sections 10–11 (authorization-scoped context, prompt-injection mitigations, kill switch).

## 10. Rate Limiting and Abuse Resistance

Layered throttles protect the platform:

- a **global per-IP limit** on all API traffic;
- a **tight shared limiter on credential endpoints** (sign-in, token refresh, code exchange, device pairing) so brute-force attempts cannot be spread across routes;
- **per-user limits** on high-frequency endpoints;
- **plan-based usage allowances** on resource-intensive features (AI, automation jobs).

Rejected requests receive HTTP 429 with retry guidance. Deliberate evasion of these limits violates the [Acceptable Use Policy](./acceptable-use-policy.md).

## 11. Logging and Monitoring

- API, authentication, and administrative events are logged with account identifiers, timestamps, and outcomes; security-relevant events (failed logins, token refresh anomalies, rate-limit rejections) are reviewable for investigation.
- Logs exclude credential material: tokens are not written to logs, and the URL-free credential design in Section 6 keeps them out of standard access logs.
- Log access is restricted to authorized personnel; retention follows the [Privacy Policy](./privacy-policy.md), Section 12.
- Crash and performance telemetry is monitored to detect service degradation.

## 12. Backups, Disaster Recovery, and Business Continuity

- Production databases are backed up on a regular schedule to encrypted storage, with backups retained on a rolling window.
- Restores are tested as part of operational practice; recovery procedures are documented so the platform can be rebuilt from configuration plus backups.
- Scheduled workloads (standups, digests, auto-commit jobs) are idempotently designed so missed windows during an outage do not duplicate actions once service resumes.
- Dependence on any single third party is documented in the [Subprocessor List](./subprocessors.md); provider outages degrade specific features rather than the whole platform where feasible.

## 13. Vulnerability Management and Testing

- Code changes are reviewed before release; security-sensitive areas (authentication, authorization, payment, webhooks) receive heightened scrutiny.
- We perform internal security reviews of the platform's attack surface and remediate findings by severity: critical issues are addressed immediately, high within days, others on a prioritized schedule.
- Dependency vulnerabilities are tracked against advisories and patched.
- We engage in penetration-testing exercises as the platform matures, and we treat external researcher reports (Section 15) as a first-class input to this process.

## 14. Incident Response

Our incident-response process covers:

1. **Detection and triage** — anomaly identification from monitoring, logs, user reports, or researcher disclosure; severity classification.
2. **Containment** — revoking affected credentials (all refresh tokens for an account or globally, provider tokens, webhook secrets), disabling affected features (including the AI kill switch), and isolating affected systems.
3. **Eradication and recovery** — root-cause remediation, patched deployment, restoration from backups where needed.
4. **Notification** — informing affected users and customers without undue delay, consistent with the breach-notification commitments in the [Privacy Policy](./privacy-policy.md), Section 16, and applicable law.
5. **Post-incident review** — documented lessons and corrective actions.

## 15. Responsible Disclosure

We welcome good-faith security research. If you believe you have found a vulnerability, report it to `info@ababilx.cloud` following our [Vulnerability Disclosure Policy](./vulnerability-disclosure-policy.md), which defines scope, safe-harbor commitments, and reporting expectations. Do not access other users' data, disrupt the Service, or publicly disclose an issue before we have had a reasonable opportunity to remediate.

## 16. Shared Responsibility

Security is shared. You are responsible for:

- protecting the GitHub/Google/Slack accounts you use to sign in (enable multi-factor authentication on them — the strength of your identity-provider account is the strength of your AbabilX sign-in);
- keeping desktop pairing codes and webhook URLs confidential, and regenerating them if exposed;
- scoping the OAuth permissions you grant to what you actually use;
- controlling membership and roles in Teams you own;
- keeping your devices and browsers patched.

## 17. Changes to This Policy

We update this Policy as our practices evolve, recording changes in Section 19. We will not weaken a stated commitment without prominent notice.

## 18. Contact

Security reports: `info@ababilx.cloud` · General: `info@ababilx.cloud`
**Postal:** AbabilX, Sector 4, Uttara, Dhaka, Bangladesh.

## 19. Revision History

| Version | Date | Summary |
|---|---|---|
| 1.0.0 | July 9, 2026 | Initial publication. Documents the 2026 authentication hardening: one-time exchange codes, rotating HttpOnly refresh cookies, connect tickets, handshake-authenticated WebSockets, and layered rate limiting. |
