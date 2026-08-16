# AbabilX Developer & API Policy

**Effective Date:** July 9, 2026
**Last Updated:** July 9, 2026
**Version:** 1.0.0

---

## Table of Contents

1. [Scope](#1-scope)
2. [Definitions](#2-definitions)
3. [API Access and Authentication](#3-api-access-and-authentication)
4. [Credential Handling](#4-credential-handling)
5. [Rate Limits and Quotas](#5-rate-limits-and-quotas)
6. [Data Use and Storage by Integrations](#6-data-use-and-storage-by-integrations)
7. [Webhooks](#7-webhooks)
8. [Developer Responsibilities](#8-developer-responsibilities)
9. [Prohibited API Uses](#9-prohibited-api-uses)
10. [Versioning and Deprecation](#10-versioning-and-deprecation)
11. [Future Clients: CLI and Browser Extension](#11-future-clients-cli-and-browser-extension)
12. [Enforcement](#12-enforcement)
13. [Changes to This Policy](#13-changes-to-this-policy)
14. [Contact](#14-contact)
15. [Revision History](#15-revision-history)

---

## 1. Scope

This Policy governs programmatic access to the AbabilX Service — the REST API, WebSocket endpoints, webhooks, and any future developer surfaces (CLI, browser extension, SDKs). It supplements the [Terms of Service](./terms-of-service.md) and [Acceptable Use Policy](./acceptable-use-policy.md); where they conflict, the Terms of Service control.

## 2. Definitions

- **"API"** — AbabilX's application programming interfaces, including REST endpoints and real-time (WebSocket) streams.
- **"Credentials"** — access tokens, refresh tokens, pairing codes, exchange codes, connect tickets, and webhook tokens issued by the Service.
- **"Integration"** — software you build or operate that calls the API or receives webhooks.

## 3. API Access and Authentication

1. API access is authorized per Account. Requests are authenticated with a short-lived bearer access token obtained through the Service's supported authentication flows (OAuth sign-in with token exchange, token refresh, or desktop pairing).
2. Real-time streams authenticate through the connection handshake; do not place Credentials in URLs.
3. An Integration acts **as the user who authorized it** and receives only the access that user has. Do not attempt to broaden access beyond the authenticated account's permissions.
4. Access requires acceptance of our current policies; requests from accounts gated by policy acceptance or plan enforcement will receive corresponding error responses (for example, HTTP 403), which your Integration must handle rather than retry blindly.

## 4. Credential Handling

You must:

1. store Credentials securely (platform keychains, encrypted storage, or server-side secrets management — never in client-side source, public repositories, or logs);
2. treat refresh tokens, pairing codes, and webhook URLs as secrets;
3. transmit Credentials only over TLS and only to AbabilX endpoints;
4. use the token-refresh flow rather than persisting long-lived access tokens;
5. revoke Credentials you no longer need (sign out, regenerate pairing codes, delete webhooks);
6. report suspected Credential compromise to `info@ababilx.cloud` immediately.

You must not share Credentials between users, embed a user's Credentials in a multi-tenant service, or solicit users' Credentials outside AbabilX's authentication flows.

## 5. Rate Limits and Quotas

1. The API enforces layered rate limits: global per-client limits, strict limits on authentication endpoints, and per-account limits on high-frequency routes (see [Security Policy](./security-policy.md), Section 10).
2. Exceeding a limit returns **HTTP 429** with retry guidance. Integrations must honor `Retry-After` and implement exponential backoff with jitter.
3. Deliberate evasion — rotating accounts, IP addresses, or request signatures to exceed limits — violates the [Acceptable Use Policy](./acceptable-use-policy.md) (items 25–26) and this Policy.
4. Plan-based quotas (AI usage, automation limits) apply equally to API-originated usage.
5. If your legitimate use case requires higher limits, contact `info@ababilx.cloud` before engineering around them.

## 6. Data Use and Storage by Integrations

If your Integration receives data from the API:

1. use it only to provide functionality to the user who authorized the access;
2. store no more than the Integration requires, for no longer than it requires;
3. protect stored data with measures appropriate to its sensitivity;
4. delete a user's data promptly when they disconnect your Integration or ask you to;
5. do not sell it, use it for advertising, or disclose it except as the user directs or law requires;
6. comply with applicable data-protection law as an independent controller of what you store.

## 7. Webhooks

1. Inbound board webhooks embed a per-hook secret token in the URL. Keep webhook URLs confidential; anyone holding the URL can post to the hook. Regenerate the token if exposed.
2. Send well-formed payloads within documented size limits; junk, oversized, or malicious payloads may be dropped and the hook revoked.
3. Outbound events you receive from AbabilX (where offered) must be verified using the provided signature or secret before processing.
4. Webhook traffic counts against rate limits.

## 8. Developer Responsibilities

You are responsible for:

1. accurately representing your Integration to its users — its identity, functionality, and data practices;
2. providing your own privacy policy to your users where you process their data;
3. keeping your Integration's dependencies patched and its infrastructure secure;
4. handling API errors gracefully — including 401 (refresh then re-authenticate), 403 (do not retry without resolving the cause), and 429 (back off);
5. not degrading the experience of the users who authorized your Integration;
6. maintaining a way for us to contact you about your Integration's behavior.

## 9. Prohibited API Uses

In addition to the [Acceptable Use Policy](./acceptable-use-policy.md), you may not use the API to:

1. reconstruct, mirror, or resell the Service or a substantial part of it;
2. build a dataset of AbabilX users or their content;
3. train machine-learning models on data obtained from the API without the explicit consent of the data's owner and our written permission;
4. poll endpoints at frequencies with no functional justification;
5. bypass the Service's user interface controls for gated features (policy acceptance, plan limits, role permissions);
6. operate an Integration after we have revoked its access;
7. misattribute your Integration's actions to AbabilX.

## 10. Versioning and Deprecation

1. We may evolve the API. Backwards-incompatible changes to documented behavior will be announced with a reasonable migration period — ordinarily at least 90 days, shortened only where security requires.
2. Undocumented endpoints and response fields may change without notice; do not depend on them.
3. Deprecation notices are published in the Service's changelog. Continuing to call a removed endpoint yields standard error responses.

## 11. Future Clients: CLI and Browser Extension

When AbabilX ships a command-line interface or browser extension:

1. they will authenticate through the same short-lived-token flows described in Section 3 — this Policy applies to them from release;
2. third-party tools must not impersonate official AbabilX clients (user-agents, branding, or update channels);
3. browser-extension builds by third parties that inject into or wrap the Service require our written permission.

## 12. Enforcement

We may throttle, suspend, or revoke API access — per token, per Integration, or per Account — for violations of this Policy, security risk, or harm to the Service, following the enforcement approach in the [Acceptable Use Policy](./acceptable-use-policy.md), Section 7. Where practical we will contact you first.

## 13. Changes to This Policy

Changes are versioned in Section 15; material changes are announced through the Service's changelog with reasonable notice.

## 14. Contact

Developer questions: `info@ababilx.cloud` · Security: `info@ababilx.cloud`
**Postal:** AbabilX, Sector 4, Uttara, Dhaka, Bangladesh.

## 15. Revision History

| Version | Date | Summary |
|---|---|---|
| 1.0.0 | July 9, 2026 | Initial publication. |
