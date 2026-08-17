# AbabilX Subprocessor List

**Effective Date:** July 9, 2026
**Last Updated:** July 9, 2026
**Version:** 1.0.0

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Definitions](#2-definitions)
3. [How We Engage Subprocessors](#3-how-we-engage-subprocessors)
4. [Current Subprocessors](#4-current-subprocessors)
5. [Connected Platforms (Not Subprocessors)](#5-connected-platforms-not-subprocessors)
6. [Change Notification](#6-change-notification)
7. [Contact](#7-contact)
8. [Revision History](#8-revision-history)

---

## 1. Purpose

This document is the single authoritative list of third parties that process Personal Data on AbabilX's behalf ("Subprocessors"). It supports the commitments in our [Privacy Policy](./privacy-policy.md) (Section 10.1) and [Data Processing Addendum](./data-processing-addendum.md) (Section 7). Other policies link here rather than duplicating the list.

## 2. Definitions

**"Subprocessor"** — a third party engaged by AbabilX to process Personal Data in the course of providing the Service. Terms defined in the [Privacy Policy](./privacy-policy.md) apply.

## 3. How We Engage Subprocessors

Before engaging a Subprocessor we assess its security posture and data-protection practices, and we bind it by written contract to: process Personal Data only on our instructions; apply appropriate security measures; not use the data for its own purposes (including model training, for AI providers); and support deletion and breach-notification obligations. International transfers to Subprocessors rely on Standard Contractual Clauses where required ([GDPR Compliance Statement](./gdpr-compliance.md), Section 6).

## 4. Current Subprocessors

| Subprocessor | Function | Data Processed | Location of Processing |
|---|---|---|---|
| **Cloud hosting provider** (compute for API and application servers) | Runs the Service's backend and databases (PostgreSQL, Redis) | All Service data at rest and in processing | Data-center region(s) selected for the Service |
| **Cloudflare, Inc. — R2 object storage & network services** | Stores user-uploaded files (avatars, covers, attachments) and provides network delivery | Uploaded media and attachments; request metadata | Global (distributed) |
| **Google LLC — Firebase Cloud Messaging** | Delivers push notifications to mobile devices | Device registration tokens; notification titles/bodies | Global (Google infrastructure) |
| **DeepSeek** | AI model inference for Output generation | Prompts assembled from Customer Content as described in the [AI Policy](./ai-policy.md), Sections 4–5 | Provider's API infrastructure |
| **Transactional email provider** | Sends account, security, and notification emails | Recipient email address; message content | Provider's infrastructure |
| **Payment processor(s)** | Processes Premium plan payments | Payment credentials (held by the processor, not by us); transaction records | Provider's infrastructure |

> **Note:** Where a row names a function rather than a single vendor, the engaged vendor for your account is available on request to `info@ababilx.com`; the contractual protections in Section 3 apply identically.

## 5. Connected Platforms (Not Subprocessors)

The following process your data because **you** connect them and direct the Service to interact with them. They act under their own terms as independent controllers, not as our Subprocessors:

| Platform | Interaction |
|---|---|
| **GitHub, Inc.** | Repository, commit, PR, and profile data read with your token; commits/branches/PRs created at your direction |
| **Slack Technologies** | Channel lists read and messages posted to workspaces you authorize |
| **Google LLC (Sign-In)** | Identity verification when you sign in with Google |

Disconnecting an integration in AbabilX stops our access but does not delete data those platforms hold — manage that with the platform directly.

## 6. Change Notification

We update this list at least **14 days** before adding or replacing a Subprocessor. Business customers under the [DPA](./data-processing-addendum.md) may subscribe to change notices and object as described in DPA Section 7 by emailing `info@ababilx.com` with the subject "Subprocessor notifications." Every change is recorded in Section 8.

## 7. Contact

Questions and notification subscriptions: `info@ababilx.com`
**Postal:** AbabilX, Sector 4, Uttara, Dhaka, Bangladesh.

## 8. Revision History

| Version | Date | Summary |
|---|---|---|
| 1.0.0 | July 9, 2026 | Initial publication. |
