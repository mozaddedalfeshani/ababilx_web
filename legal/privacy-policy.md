# AbabilX Privacy Policy

**Effective Date:** September 19, 2026
**Last Updated:** September 19, 2026
**Version:** 1.1.0

> **World-class secured messaging, built so you can trust it.** Your chats are end-to-end encrypted. No government, no military, no hacker — not even AbabilX — can read them. Seize our servers and all anyone gets is locked text. The details, and the honest limits, are in [Section 1.1](#11-your-chats-are-end-to-end-encrypted).

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Definitions](#2-definitions)
3. [Our Privacy Principles](#3-our-privacy-principles)
4. [Scope of This Policy](#4-scope-of-this-policy)
5. [Eligibility and Children](#5-eligibility-and-children)
6. [Information We Collect](#6-information-we-collect)
7. [How We Use Information](#7-how-we-use-information)
8. [Legal Bases for Processing](#8-legal-bases-for-processing)
9. [AI Features and Your Data](#9-ai-features-and-your-data)
10. [How We Share Information](#10-how-we-share-information)
11. [International Data Transfers](#11-international-data-transfers)
12. [Data Retention](#12-data-retention)
13. [Your Rights and Choices](#13-your-rights-and-choices)
14. [Account Closure and Deletion](#14-account-closure-and-deletion)
15. [Security](#15-security)
16. [Incident Response and Breach Notification](#16-incident-response-and-breach-notification)
17. [Regional Disclosures](#17-regional-disclosures)
18. [Changes to This Policy](#18-changes-to-this-policy)
19. [Contact](#19-contact)
20. [Revision History](#20-revision-history)

---

## 1. Introduction

AbabilX ("AbabilX," "we," "us," or "our") provides an AI-powered platform that helps software developers and teams automate pull-request summaries, standups, commit workflows, repository analytics, digests, and team collaboration (collectively, the "Service"). The Service is available through our website, web application, desktop application, mobile applications, REST API, and any future clients such as a command-line interface or browser extension.

This Privacy Policy explains what information we collect, why we collect it, how we use and share it, how long we keep it, and the rights and choices available to you. It is written to be read; where we must use a technical or legal term, we define it in Section 2.

**Your security and privacy come first.** Your messages are end-to-end encrypted: they are locked on your device and can be opened only on the devices of the people you are talking to. We share Personal Data only for the limited purposes described in this Policy, never sell it, and give you controls to delete your chats and your account at any time.

**No tracking. No third-party telemetry.** We do not embed advertising trackers, analytics pixels, or behavioral-profiling SDKs in our website, apps, or clients. We do not track you across other websites, build marketing profiles, or sell your activity to data brokers. Operational server logs exist only for security, abuse prevention, and keeping the Service running — not for surveillance or ads.

By creating an account or using the Service, you acknowledge this Privacy Policy. Where local law requires consent for specific processing (for example, certain cookies or marketing communications), we ask for it separately.

> **Note:** This Policy describes our practices. Contractual commitments to business customers regarding the processing of Personal Data are set out in our [Data Processing Addendum](./data-processing-addendum.md).

### 1.1 Your Chats Are End-to-End Encrypted

**Our promise.** Direct messages and group messages in AbabilX are end-to-end encrypted. Each message is locked on the sender's device with a key that exists only on the devices of the people in that conversation. Our servers carry and store only the locked form. **We cannot read your messages — and because we do not hold the keys, there is nothing we could hand to a government, a military, a court, or an attacker who breaks into our systems.**

- **Your key stays with you.** Your message key is created on your device and never sent to us in a form we can open. It is backed up only under a 256-bit recovery code that is generated on your device and shown to you alone. We never see that code, and we cannot reset or recover it for you.
- **Ghost Chat is never stored.** A Ghost Chat travels directly from phone to phone. Its text and files never touch our servers or your chat history, and one tap wipes it from both phones.
- **You can check for eavesdroppers.** Every conversation has a safety number. Compare it with the other person; if the numbers match, nobody is sitting between you. Your app also warns you if a contact's key ever changes.
- **Your notifications stay locked.** On Android, notifications for encrypted messages carry only the locked text, and your phone unlocks it for display.
- **No ads, no trackers, no selling your data. Ever.**

### 1.2 What We Can and Cannot See

We would rather tell you the limits plainly than overpromise.

| We **cannot** see | We **can** see |
|---|---|
| The text of your direct and group messages | Your account details (name, username, email, and phone number if you add one) |
| Your message keys and your recovery code | Who is in a conversation and when messages are sent, so we can deliver them |
| Anything sent in Ghost Chat | Photos, videos, and files you send in chats — these are encrypted in transit and in storage, but **not yet** end-to-end encrypted, and anyone holding a file's link can open it |
| | Group calls, which pass through our media server encrypted in transit but not end-to-end |

**Calls.** One-to-one calls connect directly between devices and are encrypted by the call protocol itself; when a direct path is blocked, the call passes through our relay, which cannot decrypt it.

**Exceptions.** Messages posted into a conversation by an outside integration (a webhook feed) arrive from outside AbabilX and are not end-to-end encrypted. A group converted from an older workspace channel stays unencrypted until a member's app sets up its key; messages sent before that remain unencrypted.

## 2. Definitions

- **"Account"** means the AbabilX account you register, whether individual or associated with an organization or team.
- **"Customer Content"** means content you submit to the Service or authorize us to access on your behalf, including repository data retrieved through your connected GitHub account, messages posted to Slack through the Service, wall posts, kanban tasks, chat messages, attendance records, and AI prompts you enter.
- **"Output"** means content generated by AI features of the Service in response to your Customer Content or prompts, such as PR summaries, standup drafts, and digest text.
- **"Personal Data"** means any information relating to an identified or identifiable natural person.
- **"Processing"** means any operation performed on Personal Data, such as collection, storage, use, disclosure, or deletion.
- **"Service"** means all AbabilX websites, applications, APIs, and clients described in Section 1.
- **"Subprocessor"** means a third party we engage to process Personal Data on our behalf, listed in our [Subprocessor List](./subprocessors.md).
- **"You"** means the individual using the Service, and where applicable, the organization on whose behalf that individual acts.

## 3. Our Privacy Principles

1. **Minimum necessary access.** We request only the OAuth scopes and data the Service needs to perform the functions you enable.
2. **Purpose limitation.** We use data for the purposes described in this Policy and not for unrelated purposes without telling you.
3. **No sale of Personal Data.** We do not sell Personal Data and have not sold it in the preceding 12 months.
4. **No AI training on your content without notice.** We do not use Customer Content to train machine-learning models, and we contractually restrict our AI Subprocessors from doing so. See Section 9 and our [AI Policy](./ai-policy.md).
5. **Security by design.** Token handling, session management, and transport security follow the practices described in Section 15 and our [Security Policy](./security-policy.md).
6. **Transparency.** Material changes to this Policy are versioned, announced, and — where the change is significant — require your re-acceptance before continued use.
7. **End-to-end encrypted chats.** Direct and group messages are end-to-end encrypted, and we hold no key that can open them (Section 1.1). All other Personal Data and authentication credentials are encrypted in transit (TLS) and protected at rest.
8. **Controlled data sharing.** We share Personal Data only with the categories of recipients in Section 10, for defined purposes, under contract where applicable, and never for advertising resale.
9. **No tracking or profiling.** We do not use third-party analytics, advertising telemetry, cross-site tracking, or behavioral profiling. Your use of AbabilX is not monitored for marketing purposes.

## 4. Scope of This Policy

### 4.1 What This Policy Covers

This Policy applies to Personal Data processed when you:

- visit our websites or landing pages;
- register for or use the Service through any client (web, desktop, mobile, API, CLI, or browser extension);
- connect third-party accounts (GitHub, Google, Slack) to the Service;
- communicate with us, including support requests;
- receive notifications from the Service.

### 4.2 What This Policy Does Not Cover

This Policy does not apply to:

- **Third-party platforms.** GitHub, Google, Slack, and other connected platforms process your data under their own privacy policies. Disconnecting an integration in AbabilX does not delete data held by those platforms.
- **Your organization's practices.** If you use AbabilX through a team or organization, your team owner or administrators may access content you create within that team (for example, wall posts, kanban activity, attendance records). Their handling of that information is governed by their own policies.
- **Content you make public.** Content you choose to publish or share beyond the Service is outside our control once shared.

## 5. Eligibility and Children

The Service is intended for users aged **18 or older**. We do not knowingly collect Personal Data from anyone under 18. If we learn that we have collected Personal Data from a person under 18, we will delete that data and terminate the associated Account. If you believe a minor has provided us Personal Data, contact `info@ababilx.com`.

## 6. Information We Collect

We collect information in three ways: information you provide, information collected automatically, and information received from third parties.

### 6.1 Information You Provide

#### 6.1.1 Account Data

When you register, we collect your name, username, email address, and profile picture, typically supplied by the OAuth provider you sign in with. You may additionally provide a cover image, language preference (English or Bangla), theme preference, and notification preferences.

#### 6.1.2 OAuth Authorizations

When you connect a third-party account, we receive and store the credentials required to act on your behalf:

- **GitHub:** an access token scoped to the permissions you grant, your GitHub username and user ID.
- **Google:** your Google account identifier and identity token, used for sign-in (including mobile sign-in).
- **Slack:** workspace and bot tokens, workspace ID, team name, and (if you authorize it) a user token for posting as you.

We store OAuth tokens server-side and never expose them to other users. See Section 15 for how tokens are protected.

#### 6.1.3 Configuration Data

We store the settings you create in the Service, including standup rules (channels, schedules, timezones, target repositories), auto-commit job configurations (repository, cadence, limits), weekly digest configurations, team settings, kanban board structures, webhook configurations, and attendance settings.

#### 6.1.4 Content You Create

We store content you author in the Service: wall posts and comments, kanban tasks, notes and attachments, work-log entries, standup message overrides, and prompts you send to AI features. Chat messages are stored only in their end-to-end encrypted form, which we cannot read (Section 1.1); Ghost Chat content is not stored at all.

#### 6.1.5 Billing Information

If you purchase a Premium plan, we collect subscription records: plan type, billing cycle, start and expiry dates, and invoice history. Payment card details are collected and processed by our payment providers; we do not store full card numbers. See our [Billing & Refund Policy](./billing-refund-policy.md).

#### 6.1.6 Communications

If you contact support or respond to our communications, we keep the correspondence and any information you include in it.

### 6.2 Information Collected Automatically

#### 6.2.1 Repository and Development Metadata

When you enable features that read from GitHub, we access and may cache: your repository list, repository metadata, commit metadata (messages, authors, timestamps, diffs where required for summaries), branch information, pull requests (titles, descriptions, files changed, reviews, comments, check statuses), and organization membership relevant to repository access.

#### 6.2.2 Usage and Device Data

We collect standard technical data when you use the Service: IP address, browser type and version, operating system, device type, client version (for desktop and mobile apps), pages and features accessed, timestamps, and referring URLs. This data comes from first-party server logs only — not from third-party tracking or analytics services.

> **Note:** We do not use covert device fingerprinting, third-party analytics SDKs, or advertising trackers. Technical attributes (such as user-agent and IP address) are processed solely for security, abuse prevention, and essential diagnostics as described in Sections 7 and 8 — never for marketing or cross-site profiling.

#### 6.2.3 Cookies, Local Storage, and Session Storage

We use a small set of strictly necessary cookies and browser storage entries to keep you signed in, protect your session, and remember preferences (such as theme and language). Details, names, and lifetimes are documented in our [Cookie Policy](./cookie-policy.md). We do not use third-party advertising cookies, analytics cookies, or tracking pixels.

#### 6.2.4 Logs and Diagnostics

We maintain:

- **API logs** — request method, path, status code, latency, and the authenticated account identifier;
- **Server logs** — infrastructure-level events needed to operate the platform;
- **Security logs** — authentication events, token refresh and revocation events, rate-limit rejections, and administrative actions;
- **Crash logs and performance metrics** — error traces and timing data from our applications, used to diagnose defects.

Logs are retained on the schedule in Section 12 and access to them is restricted under Section 15.

#### 6.2.5 Mobile Push Tokens

If you enable push notifications on iOS or Android, we store the Firebase Cloud Messaging (FCM) registration token for your device so we can deliver notifications. Deregistering the device or disabling notifications removes the token.

### 6.3 Information from Third Parties

- **GitHub API:** repository, commit, pull request, branch, and profile data as authorized by your token.
- **Slack API:** channel lists, workspace metadata, and message delivery status.
- **Google:** identity assertions confirming your sign-in.
- **Payment providers:** confirmation of payment status and subscription events.

We do not purchase Personal Data from data brokers.

## 7. How We Use Information

We use the information described in Section 6 to:

1. **Provide the Service** — authenticate you; execute standup rules, auto-commit jobs, and digest schedules; render dashboards and analytics; deliver team collaboration features; send notifications you have enabled.
2. **Operate integrations on your behalf** — read repository data from GitHub, create commits and branches you request, and post messages to Slack channels you authorize.
3. **Generate AI Output** — send the minimum relevant context (see Section 9) to our AI provider to produce PR summaries, standup drafts, commit summaries, and digest text.
4. **Maintain security and prevent abuse** — detect and block brute-force attempts, credential abuse, rate-limit violations, fraud, and violations of our [Acceptable Use Policy](./acceptable-use-policy.md).
5. **Bill and manage subscriptions** — enforce plan limits, process upgrades and expirations, and maintain required financial records.
6. **Keep the Service reliable** — use aggregated, de-identified operational metrics and first-party error diagnostics to fix bugs and maintain performance. We do not use third-party analytics platforms or behavioral tracking for this purpose.
7. **Communicate with you** — send transactional messages (security alerts, policy updates, plan notices) and, with your consent where required, product announcements. You can opt out of non-essential communications at any time.
8. **Comply with law** — meet legal obligations, respond to lawful requests, and establish or defend legal claims.

We do not use your information for third-party advertising, behavioral tracking, or building marketing profiles. AbabilX is designed for pure privacy: no ad networks, no cross-site trackers, no telemetry SDKs sold to third parties.

## 8. Legal Bases for Processing

Where the EU/UK General Data Protection Regulation ("GDPR") or similar laws apply, we rely on the following legal bases:

| Purpose | Legal Basis |
|---|---|
| Creating and operating your Account; executing features you configure | **Contract** (Art. 6(1)(b)) |
| Sending data to AI providers to generate Output you request | **Contract** (Art. 6(1)(b)) |
| Security logging, rate limiting, fraud and abuse prevention | **Legitimate interest** (Art. 6(1)(f)) — protecting the Service and its users |
| Service analytics and improvement | **Legitimate interest** (Art. 6(1)(f)) — with data minimization safeguards |
| Non-essential cookies; marketing communications | **Consent** (Art. 6(1)(a)) — withdrawable at any time |
| Tax, accounting, and lawful-request compliance | **Legal obligation** (Art. 6(1)(c)) |

Where we rely on legitimate interest, we have assessed that our interest is not overridden by your rights and freedoms; you may object as described in Section 13. Further GDPR detail is in our [GDPR Compliance Statement](./gdpr-compliance.md).

## 9. AI Features and Your Data

AI features are a core part of the Service. We treat the data flowing through them with specific safeguards, described fully in our [AI Policy](./ai-policy.md) and summarized here:

1. **What is sent.** To generate Output, we transmit only the context required for the specific feature — for example, commit messages, diffs, and PR metadata for a PR summary. We do not send your OAuth tokens, password-equivalent secrets, or billing data to AI providers.
2. **Who processes it.** AI Output is generated by our contracted AI provider (currently DeepSeek), acting as a Subprocessor under data-protection terms.
3. **No training.** We do not use your Customer Content or prompts to train models, and our agreements restrict our AI providers from using them to train their models.
4. **Retention.** Prompts and Output handled by the AI provider are retained only as long as needed to return the response and meet the provider's short-term abuse-monitoring window; Output we store for you (for example, a saved digest) is retained under Section 12.
5. **Accuracy.** Output is machine-generated and may be inaccurate. Review Output before relying on it; see the disclaimer in our [AI Policy](./ai-policy.md).

## 10. How We Share Information

AbabilX does **not** sell your Personal Data. We share information only when it is necessary to provide the Service you choose to use, when you direct us to, when the law requires it, or with your explicit consent. Every sharing category below is intentional, limited, and documented — we do not pass your data to third parties for their own unrelated purposes.

We share Personal Data only in the following circumstances:

### 10.1 Subprocessors and Service Providers

We use vetted third parties for hosting, storage, content delivery, push notifications, email delivery, payments, and AI processing. Each is bound by contract to process Personal Data only on our instructions and to protect it. The current list, including purpose and location, is maintained in our [Subprocessor List](./subprocessors.md).

### 10.2 Connected Platforms at Your Direction

When you use a feature that acts on a third-party platform — committing to GitHub, posting to Slack — we transmit the necessary data to that platform. That transmission is visible to the platform and governed by its terms.

### 10.3 Your Team or Organization

If your Account belongs to a team, content you create in team features (wall, board, chat, attendance, digests) is visible to team members according to the team's roles and settings, and team owners/administrators can manage members and content.

### 10.4 Legal Requirements

We may disclose information if we believe in good faith that disclosure is required by law, regulation, legal process, or enforceable governmental request. Where lawful and practicable, we will notify you before disclosing your data so you can seek protective measures. We object to requests we believe are overbroad. **We cannot disclose the content of your end-to-end encrypted messages to anyone, because we do not have the keys to read them** (Section 1.1).

### 10.5 Business Transfers

If AbabilX is involved in a merger, acquisition, financing, reorganization, or sale of assets, Personal Data may be transferred as part of that transaction. We will notify you of any such transfer and of any resulting change in this Policy, and the successor remains bound by commitments at least as protective as this Policy.

### 10.6 Aggregated or De-identified Data

We may share aggregated or de-identified information that cannot reasonably be used to identify you (for example, overall usage statistics).

### 10.7 With Your Consent

We share Personal Data for any other purpose only with your consent.

## 11. International Data Transfers

We operate from Bangladesh and use infrastructure and Subprocessors located in multiple countries. Your information may therefore be transferred to, stored in, and processed in countries other than your own, which may have different data-protection laws.

Where we transfer Personal Data from jurisdictions that restrict international transfers (including the EEA, the United Kingdom, and Switzerland), we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses with our Subprocessors, together with supplementary technical measures (encryption in transit, access controls). Details are in our [GDPR Compliance Statement](./gdpr-compliance.md) and [Data Processing Addendum](./data-processing-addendum.md).

## 12. Data Retention

We retain Personal Data only as long as needed for the purposes described in this Policy, then delete or de-identify it. Representative schedules:

| Data Category | Retention |
|---|---|
| Account Data | Life of the Account; deleted on account deletion (Section 14) |
| OAuth tokens | Until you disconnect the integration, the token expires or is revoked, or the Account is deleted |
| Chat messages (end-to-end encrypted) | Up to 6 months on our servers, in locked form only; your devices keep your history. Deleted from our servers once every member of the conversation has deleted the chat |
| Ghost Chat | Never stored |
| Customer Content (posts, tasks, configurations) | Life of the Account or until you delete the item; team content may persist for the team per its settings |
| AI prompts and Output stored in your Account | Life of the Account or until you delete the item |
| Slack messages sent via the Service (history/replay) | Until you delete the rule/message or the Account |
| Billing and subscription records | Duration required by tax and accounting law |
| API, server, and security logs | Rolling window, typically 30–180 days depending on log type; security-incident logs may be preserved for the duration of an investigation |
| Crash and performance diagnostics | Rolling window, typically 90 days |
| Backups | Encrypted backups age out on a rolling schedule; deleted data leaves backups as they rotate |

Where deletion is not immediately possible (for example, data in backups), we isolate the data from further processing until deletion completes.

## 13. Your Rights and Choices

Depending on your jurisdiction, you may have the right to:

1. **Access** — obtain confirmation of whether we process your Personal Data and receive a copy.
2. **Correction** — have inaccurate or incomplete data corrected. Most profile fields are directly editable in Settings.
3. **Deletion** — have your Personal Data deleted (see Section 14).
4. **Portability** — receive your data in a structured, commonly used, machine-readable format.
5. **Objection** — object to processing based on legitimate interests.
6. **Restriction** — restrict processing in the circumstances defined by applicable law.
7. **Withdraw consent** — where processing is based on consent, withdraw it at any time without affecting prior processing.
8. **Complain** — lodge a complaint with your local supervisory authority. We would appreciate the chance to address your concern first at `info@ababilx.com`.

**Self-service controls** available in the Service include: editing profile data, disconnecting GitHub/Slack integrations, revoking sessions by signing out, disabling email/desktop/push notifications, changing language and privacy mode, and deleting your Account.

To exercise a right that lacks a self-service control, email `info@ababilx.com`. We verify requests using your account email and respond within 30 days (or the shorter period local law requires). We do not discriminate against you for exercising your rights.

California-specific rights are described in our [CCPA/CPRA Compliance Statement](./ccpa-compliance.md); EEA/UK-specific detail is in our [GDPR Compliance Statement](./gdpr-compliance.md).

## 14. Account Closure and Deletion

You may delete your Account at any time from within the Service or by emailing `info@ababilx.com` from your account email. On deletion:

- your profile, configurations, content, tokens, and stored Output are permanently deleted from production systems;
- active sessions and refresh credentials are revoked;
- data shared into team spaces you do not own may persist for the team, attributed to a deactivated account, where the team owner controls it;
- billing records are retained as required by law (Section 12);
- residual copies in encrypted backups are removed as backups rotate.

> **Warning:** If you own a team, deleting your Account deletes the team and its content for all members. Transfer team ownership first if the team should continue.

Deletion is irreversible. Revoking AbabilX's access from within GitHub, Google, or Slack disables the integration but does not by itself delete your AbabilX Account.

## 15. Security

Protecting your data is central to how we build AbabilX. We apply defense-in-depth security — encryption across connections and storage, strict access controls, session hardening, and continuous review — so your information stays protected throughout its lifecycle on our platform.

We protect Personal Data using administrative, technical, and physical safeguards appropriate to its sensitivity, described in detail in our [Security Policy](./security-policy.md). Key measures include:

- **End-to-end encrypted messages.** Direct and group messages are encrypted on your device with keys we never hold (Section 1.1), so a breach of our systems does not expose their content.
- **Encryption in transit and at rest.** Everything else traveling between your browser, desktop or mobile apps, and our APIs is encrypted with HTTPS/TLS. Data at rest in our databases, backups, and object storage uses provider-managed encryption.
- **Token and session protection.** API authentication uses short-lived JSON Web Tokens. Long-lived web session refresh uses rotating tokens delivered in `HttpOnly`, `Secure`, `SameSite` cookies inaccessible to client-side scripts. Sign-in and account-linking flows use one-time exchange codes and tickets so credentials never appear in URLs, logs, or referrer headers.
- **Access control.** Every API request is authorized against the requesting account; administrative functions are restricted to a small set of authorized personnel under least-privilege principles.
- **Rate limiting.** Authentication endpoints and APIs are rate-limited per client and per account to resist brute-force and abuse.
- **Secrets management.** OAuth tokens and credentials are stored server-side with restricted access and are never shared between users.
- **Session revocation.** Signing out invalidates the session's refresh credentials server-side.

No method of transmission or storage is completely secure; we cannot guarantee absolute security, but we continuously review and improve these measures.

## 16. Incident Response and Breach Notification

We maintain an incident-response process covering detection, containment, investigation, remediation, and post-incident review (see our [Security Policy](./security-policy.md)). If a breach of security leads to the accidental or unlawful destruction, loss, alteration, or unauthorized disclosure of Personal Data, we will:

1. notify affected users and, where applicable, business customers **without undue delay** after becoming aware, consistent with legal requirements (including the GDPR's 72-hour supervisory notification standard where it applies);
2. describe the nature of the breach, the data affected, the likely consequences, and the measures taken;
3. cooperate with regulators and provide reasonable assistance to affected customers.

Security researchers who identify vulnerabilities should follow our [Vulnerability Disclosure Policy](./vulnerability-disclosure-policy.md).

## 17. Regional Disclosures

### 17.1 European Economic Area, United Kingdom, and Switzerland

The GDPR/UK GDPR rights and legal bases in Sections 8 and 13 apply. Transfer safeguards are described in Section 11. Full detail: [GDPR Compliance Statement](./gdpr-compliance.md).

### 17.2 California (United States)

California residents have rights to know, delete, correct, and opt out of "sale" or "sharing" of personal information under the CCPA/CPRA. We do not sell or share personal information as those terms are defined. Full detail: [CCPA/CPRA Compliance Statement](./ccpa-compliance.md).

### 17.3 Brazil (LGPD)

If the Lei Geral de Proteção de Dados applies to you, you have rights of confirmation, access, correction, anonymization, portability, deletion, and information about sharing, exercisable via `info@ababilx.com`. Our legal bases parallel those in Section 8.

### 17.4 Singapore (PDPA)

We collect, use, and disclose Personal Data with consent or under recognized exceptions, for reasonable purposes we have notified. You may withdraw consent and request access or correction via `info@ababilx.com`.

### 17.5 India (DPDP Act)

Where the Digital Personal Data Protection Act, 2023 applies, we process personal data for the lawful purposes described here with your consent or for legitimate uses recognized by the Act, and you may exercise rights of access, correction, erasure, and grievance redressal via `info@ababilx.com`.

### 17.6 Bangladesh

AbabilX is operated from Bangladesh. We handle Personal Data consistent with applicable Bangladeshi law, including obligations relating to data security and lawful disclosure, and we apply the protections in this Policy to all users regardless of location.

## 18. Changes to This Policy

We may update this Policy to reflect changes in the Service, our practices, or legal requirements. Every change is versioned (Section 20). For material changes — those affecting your rights or how we handle your data — we will notify you through the Service or by email, update the version and dates above, and, where the change is significant, require your acceptance before continued use. Continued use after the effective date of non-material changes constitutes acceptance.

## 19. Contact

| Purpose | Contact |
|---|---|
| All inquiries (privacy, support, security, legal) | `info@ababilx.com` |

**Postal:** AbabilX, Sector 4, Uttara, Dhaka, Bangladesh.

We aim to acknowledge privacy inquiries within 7 days and resolve them within 30 days.

## 20. Revision History

| Version | Date | Summary |
|---|---|---|
| 1.1.0 | September 19, 2026 | Added Section 1.1 (end-to-end encrypted chats, recovery code, Ghost Chat, safety numbers) and Section 1.2 (what we can and cannot see). Clarified that chat messages are stored only in encrypted form, that encrypted message content cannot be disclosed, and the chat retention schedule. |
| 1.0.0 | July 9, 2026 | Initial publication of the restructured Privacy Policy, replacing the May 28, 2026 policy page. Added AI data handling (Section 9), token/session security detail (Section 15), breach notification (Section 16), and regional disclosures (Section 17). |
