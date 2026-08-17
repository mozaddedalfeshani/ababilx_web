# AbabilX Legal Documentation Style Guide

**Internal document — not published to end users.**
Maintainers must follow this guide when creating or revising any document in `/legal`.

---

## 1. Document Inventory

| File | Title | Audience |
|---|---|---|
| `privacy-policy.md` | Privacy Policy | All users |
| `terms-of-service.md` | Terms of Service | All users |
| `cookie-policy.md` | Cookie Policy | All users |
| `acceptable-use-policy.md` | Acceptable Use Policy | All users |
| `security-policy.md` | Security Policy | All users, security researchers |
| `ai-policy.md` | AI Policy | All users |
| `billing-refund-policy.md` | Billing & Refund Policy | Paying customers |
| `developer-api-policy.md` | Developer & API Policy | API consumers, integrators |
| `copyright-dmca-policy.md` | Copyright & DMCA Policy | Rights holders, users |
| `community-guidelines.md` | Community Guidelines | Team/collaboration users |
| `data-processing-addendum.md` | Data Processing Addendum (DPA) | Business customers |
| `gdpr-compliance.md` | GDPR Compliance Statement | EEA/UK users, customers |
| `ccpa-compliance.md` | CCPA/CPRA Compliance Statement | California residents |
| `subprocessors.md` | Subprocessor List | Business customers |
| `vulnerability-disclosure-policy.md` | Vulnerability Disclosure Policy | Security researchers |

## 2. Canonical Facts

Use these values consistently. Never invent alternatives.

- **Service name:** AbabilX (never "Ababil X", "AbabilX.com", or "the App")
- **Operator:** AbabilX ("AbabilX," "we," "us," "our")
- **Location:** Sector 4, Uttara, Dhaka, Bangladesh
- **Contact:** `info@ababilx.com`
- **Plans:** Free and Premium (no enterprise tier is currently sold; documents may reference organization/team features)
- **Current document version:** 1.0.0 — Effective July 9, 2026
- **AI provider:** DeepSeek (via API)
- **Key subprocessors:** see `subprocessors.md` (single source of truth; other documents link to it rather than duplicating the list)

## 3. Structure Requirements

Every published document contains, in order:

1. `# <Title>` — H1, exactly once
2. Metadata block: **Effective Date**, **Last Updated**, **Version**
3. Table of Contents (linked, GitHub-anchor compatible)
4. Numbered sections (`## 1. Title`) and subsections (`### 1.1 Title`)
5. **Contact** section (penultimate)
6. **Revision History** table (final section)

Numbering is continuous and never restarts. Cross-references use the form
"see Section 4.2 (OAuth Data)" within a document, or
"see our [Cookie Policy](./cookie-policy.md)" across documents.

## 4. Voice and Tone

- First person plural for AbabilX ("we collect"), second person for the user ("you may").
- Present tense. Active voice. One idea per sentence where possible.
- Define a term once, capitalize it thereafter (e.g., "Service," "Customer Content").
- No marketing language inside legal documents. No superlatives ("world-class," "military-grade").
- No hedging filler ("please note that," "it is important to understand").
- Notes and warnings use blockquotes:
  - `> **Note:** ...` for clarification
  - `> **Warning:** ...` for consequences

## 5. Legal Drafting Rules

- Never copy or closely paraphrase another company's policy.
- Never promise what the platform does not do (e.g., do not claim SOC 2 certification unless held; use "aligned with" for frameworks we follow but are not certified against).
- Disclaimers of warranty and limitations of liability appear in CAPITALS per convention, in the Terms of Service only; other documents reference them.
- Jurisdiction: Bangladesh governing law; arbitration seat Dhaka; carve-outs for consumer mandatory rights.
- Data protection: GDPR and CCPA/CPRA are addressed in dedicated documents; the Privacy Policy summarizes and links.

## 6. Terminology Glossary

| Term | Use | Never use |
|---|---|---|
| Service | The AbabilX platform, apps, and APIs | "the app", "the site" (alone) |
| Customer Content | Content users submit or we access on their behalf | "your stuff", "user data" (ambiguous) |
| Personal Data | GDPR-style term, used consistently | "PII" (except in CCPA doc where "personal information" is statutory) |
| Subprocessor | Third party processing Personal Data for us | "vendor" (in DPA contexts) |
| Output | AI-generated content returned to the user | "results", "completions" |

## 7. Versioning

- Semantic versioning per document: MAJOR.MINOR.PATCH.
- MAJOR: change in rights, obligations, or data practices → requires re-acceptance (bump `services/policy/policy.go` `CurrentVersion` for the Privacy Policy).
- MINOR: new sections, clarified scope, no reduction of user rights.
- PATCH: typos, formatting, contact updates.
- Every change appends a row to the document's Revision History.

## 8. Publication Checklist

- [ ] Metadata block dates updated
- [ ] TOC anchors verified on GitHub rendering
- [ ] Cross-references still resolve
- [ ] Canonical facts (Section 2) unchanged or updated everywhere at once
- [ ] Revision History appended
- [ ] If Privacy Policy MAJOR bump: backend `policy.CurrentVersion` and `frontend/public/policy.md` version updated
