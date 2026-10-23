# AbabilX Security Policy

**Effective Date:** October 23, 2026
**Last Updated:** October 23, 2026
**Version:** 2.0.0

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

### 5.1 End-to-End Encryption of Chats

- **Messages** in direct chats, groups, and Note to Self are encrypted on the sender's device with a per-conversation AES-256 key. That key is sealed separately to each member's P-256 identity key, which is created on the member's own device. The server stores and relays only ciphertext and holds no key that can open it.
- **Files** — photos, videos, voice notes, documents — are encrypted on the sender's device (phone, web, and desktop) before upload, using a fresh 256-bit key per file, chunked AES-256-GCM with authenticated chunk order and length, and size padding. The file key, real name, and type travel sealed under the conversation key; storage sees only ciphertext with a hidden name and type.
- **Key rotation:** a group's key is rotated whenever a member is removed or leaves, so a former member cannot read what follows. A new member is never given keys from before they joined.
- **Safety numbers** let two people confirm, out of band, that no one sits between them; the apps warn when a contact's key changes.
- **Notifications** for encrypted messages carry ciphertext only and are opened on the device (Android).

### 5.2 Delivery-Only Storage

A chat message, and its files, stay on our servers only until every recipient device has received them, then are permanently deleted — after 30 days at most. A breach of our servers therefore exposes no chat history, because none is kept.

### 5.3 Never Through Our Servers

- **Ghost Chat** travels directly between two phones over an encrypted peer-to-peer channel. Its setup signals are sealed under the conversation key, so the relay cannot interfere, and nothing is stored anywhere.
- **Local Share** moves files between your own devices on the same Wi-Fi network and never reaches our servers.
- **One-to-one calls** connect directly between devices with encrypted media; when a direct path is blocked, our relay carries the encrypted stream without being able to decrypt it.

### 5.4 Everything Else

- **In transit:** all client–server traffic uses HTTPS/TLS (TLS 1.2+); WebSocket connections run over TLS. No unencrypted production endpoint exists.
- **At rest:** databases and object storage use encrypted volumes (AES-256 class).
- **Passwords**, where a user sets one, are stored only as argon2id hashes.

## 6. Authentication and Session Security

1. **Sign-in methods.** A device key (Start New Chat — an Ed25519 key that never leaves the phone, proven by signing a one-time challenge), Google, or email and password. Email codes are rate-limited per address and per day; repeated wrong passwords lock the address temporarily.
2. **QR sign-in for web and desktop.** A signed-in phone scans a short-lived, single-use code, sees which device is asking, and approves it. The same scan hands over the message key, sealed to a key that came off the camera, never from the server.
3. **Short-lived access tokens.** API requests carry a JWT valid for one hour.
4. **Rotating refresh tokens**, delivered on the web in `HttpOnly; Secure; SameSite` cookies unreadable by JavaScript.
5. **Sessions you control.** Every signed-in device is listed and can be signed out; a revoked session stops working within 30 seconds. Linked devices unused for 14 days are signed out automatically.
6. **One-time codes** keep credentials out of URLs, browser history, and logs.

## 7. Authorization and Access Control

- Every API request is authenticated and then authorized against the requesting account: users can access only their own resources and the team resources their role permits.
- Team features enforce role-based permissions (owner, manager, member) evaluated server-side on each request — never trusted from the client.
- Administrative endpoints are gated behind a separate super-administrator check in middleware; administrative capability is limited to designated personnel.
- Privacy-affecting platform gates (for example, policy acceptance) are enforced in server middleware, not only in the interface.

## 8. Secrets and Token Management

- Application secrets (signing keys, provider credentials) come from environment configuration, never source code, with restricted access. An empty signing key refuses every token rather than accepting forgeries.
- Message keys, device keys, and the recovery material that protects them are created and kept on users' devices. The server never receives them in a form it can open.
- Inbound webhook endpoints authenticate callers with per-hook random tokens that can be regenerated or revoked.

## 9. Application Security

- **Input handling:** database access uses parameterized queries throughout, preventing SQL injection; request bodies are schema-validated before use.
- **Cross-origin controls:** the API enforces a strict CORS allow-list — production trusts only the configured frontend origin; permissive localhost origins are impossible in release mode.
- **Output encoding:** the web client uses a framework rendering model (React) that escapes content by default.
- **Cross-site request protection:** state-changing browser flows rely on `SameSite` cookie scoping plus bearer-token authorization, so cross-site form posts cannot authenticate.
- **Dependency hygiene:** dependencies are version-pinned and updated on a regular cadence; builds fail on compilation and vet errors.

## 10. Rate Limiting and Abuse Resistance

Layered throttles protect the platform:

- a **global per-IP limit** on all API traffic;
- a **tight shared limiter on credential endpoints** (sign-in, token refresh, code exchange, device pairing) so brute-force attempts cannot be spread across routes;
- **per-user limits** on high-frequency endpoints;
- a **byte budget per account** on message sending, shared across server instances.

Rejected requests receive HTTP 429 with retry guidance. Deliberate evasion of these limits violates the [Acceptable Use Policy](./acceptable-use-policy.md).

## 11. Logging and Monitoring

- API, authentication, and administrative events are logged with account identifiers, timestamps, and outcomes; security-relevant events (failed logins, token refresh anomalies, rate-limit rejections) are reviewable for investigation.
- Logs exclude credential material: tokens are not written to logs, and the URL-free credential design in Section 6 keeps them out of standard access logs.
- Log access is restricted to authorized personnel; retention follows the [Privacy Policy](./privacy-policy.md), Section 12.
- Crash and performance telemetry is monitored to detect service degradation.

## 12. Backups, Disaster Recovery, and Business Continuity

- Production databases are backed up on a regular schedule to encrypted storage, with backups retained on a rolling window. Chat content is not in them beyond the moment of delivery (Section 5.2).
- Restores are tested as part of operational practice; recovery procedures are documented so the platform can be rebuilt from configuration plus backups.
- Scheduled sends are idempotent: a message is keyed by its client ID, so a retry after an outage never sends it twice.
- Dependence on any single third party is documented in the [Subprocessor List](./subprocessors.md); provider outages degrade specific features rather than the whole platform where feasible.

## 13. Vulnerability Management and Testing

- Code changes are reviewed before release; security-sensitive areas (encryption, authentication, authorization, payment, webhooks) receive heightened scrutiny.
- We perform internal security reviews of the platform's attack surface and remediate findings by severity: critical issues are addressed immediately, high within days, others on a prioritized schedule.
- Dependency vulnerabilities are tracked against advisories and patched.
- We engage in penetration-testing exercises as the platform matures, and we treat external researcher reports (Section 15) as a first-class input to this process.

## 14. Incident Response

Our incident-response process covers:

1. **Detection and triage** — anomaly identification from monitoring, logs, user reports, or researcher disclosure; severity classification.
2. **Containment** — revoking affected credentials (all refresh tokens for an account or globally, provider tokens, webhook secrets), disabling affected features , and isolating affected systems.
3. **Eradication and recovery** — root-cause remediation, patched deployment, restoration from backups where needed.
4. **Notification** — informing affected users and customers without undue delay, consistent with the breach-notification commitments in the [Privacy Policy](./privacy-policy.md), Section 16, and applicable law.
5. **Post-incident review** — documented lessons and corrective actions.

## 15. Responsible Disclosure

We welcome good-faith security research. If you believe you have found a vulnerability, report it to `info@ababilx.com` following our [Vulnerability Disclosure Policy](./vulnerability-disclosure-policy.md), which defines scope, safe-harbor commitments, and reporting expectations. Do not access other users' data, disrupt the Service, or publicly disclose an issue before we have had a reasonable opportunity to remediate.

## 16. Shared Responsibility

Security is shared. You are responsible for:

- protecting your phone, which holds your account key and message keys, and the Google or email account you sign in with, if any;
- keeping desktop pairing codes and webhook URLs confidential, and regenerating them if exposed;
- comparing safety numbers with the people you talk to about sensitive things;
- controlling membership and roles in Teams you own;
- keeping your devices and browsers patched.

## 17. Changes to This Policy

We update this Policy as our practices evolve, recording changes in Section 19. We will not weaken a stated commitment without prominent notice.

## 18. Contact

Security reports: `info@ababilx.com` · General: `info@ababilx.com`
**Postal:** AbabilX, Sector 4, Uttara, Dhaka, Bangladesh.

## 19. Revision History

| Version | Date | Summary |
|---|---|---|
| 2.0.0 | October 23, 2026 | Added end-to-end encryption of messages and files on every app, delivery-only storage, Ghost Chat, Local Share and call encryption (Section 5). Sign-in now by device key, Google, email and password, or QR. Removed GitHub, Slack, AI and automation controls. |
| 1.0.0 | July 9, 2026 | Initial publication. Documents the 2026 authentication hardening: one-time exchange codes, rotating HttpOnly refresh cookies, connect tickets, handshake-authenticated WebSockets, and layered rate limiting. |
