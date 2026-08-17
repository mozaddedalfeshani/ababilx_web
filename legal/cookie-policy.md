# AbabilX Cookie Policy

**Effective Date:** July 9, 2026
**Last Updated:** July 9, 2026
**Version:** 1.0.0

---

## Table of Contents

1. [Overview](#1-overview)
2. [Definitions](#2-definitions)
3. [How We Use Cookies and Browser Storage](#3-how-we-use-cookies-and-browser-storage)
4. [Cookies We Set](#4-cookies-we-set)
5. [Local Storage and Session Storage](#5-local-storage-and-session-storage)
6. [Third-Party Cookies](#6-third-party-cookies)
7. [Your Choices](#7-your-choices)
8. [Do Not Track](#8-do-not-track)
9. [Changes to This Policy](#9-changes-to-this-policy)
10. [Contact](#10-contact)
11. [Revision History](#11-revision-history)

---

## 1. Overview

This Cookie Policy explains how AbabilX ("we," "us," "our") uses cookies and similar browser-storage technologies on our websites and web application (the "Service"). It supplements our [Privacy Policy](./privacy-policy.md); terms defined there have the same meaning here.

Our approach is deliberately minimal: we use **strictly necessary** cookies and storage to keep you signed in securely and remember your preferences. We do not use advertising cookies, analytics trackers, telemetry SDKs, or behavioral-profiling tools, and we do not permit third parties to set tracking cookies through the Service. AbabilX is built for pure privacy — your activity on our platform is not sold, profiled, or shared with ad networks.

## 2. Definitions

- **"Cookie"** — a small text file placed on your device by a website, sent back with subsequent requests to that site.
- **"HttpOnly cookie"** — a cookie inaccessible to JavaScript, readable only by the server, used to protect session credentials from cross-site scripting.
- **"Local storage" / "session storage"** — browser storage APIs that persist data on your device; local storage persists across sessions, session storage clears when the tab closes.
- **"First-party"** — set by the domain you are visiting. **"Third-party"** — set by another domain.

## 3. How We Use Cookies and Browser Storage

| Purpose | Description |
|---|---|
| **Authentication** | Keeping you signed in and refreshing your session securely without re-entering credentials. |
| **Security** | Protecting session refresh credentials from client-side scripts; scoping cookies with `Secure` and `SameSite` attributes to resist cross-site attacks. |
| **Preferences** | Remembering your theme (dark/light), accent color, language (English/Bangla), and dismissed in-app notices. |
| **Functionality** | Remembering transient flow state, such as where to return after connecting a Slack workspace. |

We do **not** use cookies or storage for: third-party advertising, cross-site behavioral tracking, marketing analytics, telemetry SDKs, or building marketing profiles.

## 4. Cookies We Set

All cookies below are first-party and strictly necessary or functional.

| Name | Type | Purpose | Attributes | Lifetime |
|---|---|---|---|---|
| `lbot_refresh_token` | Strictly necessary | Holds your rotating session refresh credential so your sign-in can be renewed silently. | `HttpOnly; Secure; SameSite=Lax`, path-restricted to the authentication endpoints | Up to 30 days; rotated on each refresh; cleared on sign-out |
| `lbot_token` | Strictly necessary | Short-lived access-token mirror used for session continuity in the web client. | `SameSite=Lax` | 1 hour; cleared on sign-out |

> **Note:** The refresh credential is intentionally unreadable by JavaScript (`HttpOnly`) and is invalidated server-side when you sign out.

## 5. Local Storage and Session Storage

The web application stores the following on your device:

| Key (representative) | Purpose | Lifetime |
|---|---|---|
| `lbot_token` | Short-lived access token for authenticating API requests from the web client. | 1 hour token validity; removed on sign-out |
| Theme / accent / language preferences | Renders the interface per your choices without a server round-trip. | Until you change them or clear browser data |
| `slack_return_to` | Returns you to the page you started from after connecting Slack. | Removed immediately after the flow completes |
| Dismissed-dialog markers (e.g., plan-expiry notice) | Prevents re-showing a notice you dismissed. | Until conditions change or you clear browser data |

Desktop and mobile applications use equivalent platform-native secure storage for the same purposes.

## 6. Third-Party Cookies

We do not embed third-party advertising or analytics tags that set cookies on our domain. If you follow a link from the Service to a third-party site (for example, GitHub or Slack during an OAuth flow), that site may set its own cookies under its own policy. OAuth providers necessarily use their own cookies on **their** domains during sign-in; we do not control them.

If we introduce any third-party cookie in the future, we will update this Policy, obtain consent where required, and list the cookie in Section 4.

## 7. Your Choices

- **Browser controls.** All major browsers let you block or delete cookies and site data. Blocking our strictly necessary cookies will prevent sign-in from persisting; the Service cannot function without them.
- **Sign-out.** Signing out clears your access token locally and revokes and clears the refresh cookie server-side.
- **Preference reset.** Clearing site data for our domain removes stored preferences; they can be set again in Settings.

Because we use no non-essential third-party cookies, we do not operate a cookie-consent banner for advertising purposes. Where law requires consent for any storage beyond strictly necessary, we request it in context.

## 8. Do Not Track

Some browsers send "Do Not Track" or Global Privacy Control signals. Because we do not track users across third-party sites or sell Personal Data, our treatment of your data is the same regardless of these signals. See our [CCPA/CPRA Compliance Statement](./ccpa-compliance.md) for California-specific handling.

## 9. Changes to This Policy

We will update this Policy when our use of cookies or storage changes, revising the version and dates above and recording the change in Section 11. Material changes are announced through the Service.

## 10. Contact

Questions about this Policy: `info@ababilx.com`.
**Postal:** AbabilX, Sector 4, Uttara, Dhaka, Bangladesh.

## 11. Revision History

| Version | Date | Summary |
|---|---|---|
| 1.0.0 | July 9, 2026 | Initial publication. Documents the HttpOnly refresh-cookie session model. |
