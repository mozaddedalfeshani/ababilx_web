/* eslint-disable react/no-unescaped-entities -- legal prose */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account & Data Deletion",
  description:
    "Request deletion of your AbabilX account and associated data. Step-by-step guide and processing timeline.",
  alternates: {
    canonical: "/account-deletion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] to-[#0c0c14] text-[#f1f5f9] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Account & Data Deletion</h1>
          <p className="text-[#94a3b8]">Request to delete your AbabilX account and associated data</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#0c0c14] border border-[#6366f1] rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold mb-4 text-[#6366f1]">Request Account Deletion</h2>
          <p className="text-[#cbd5e1] mb-4">
            To delete your account and associated data, send a request to:
          </p>
          <a
            href="mailto:info@ababilx.cloud?subject=Account%20Deletion%20Request"
            className="inline-block bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Request Account Deletion
          </a>
        </div>

        {/* Steps */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Steps to Delete Your Account</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#6366f1] text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#f1f5f9] mb-2">Send Deletion Request</h3>
                <p className="text-[#cbd5e1]">
                  Email{" "}
                  <a
                    href="mailto:info@ababilx.cloud"
                    className="text-[#6366f1] hover:underline"
                  >
                    info@ababilx.cloud
                  </a>{" "}
                  with the subject "Account Deletion Request". Include your account email address or GitHub
                  username so we can identify your account.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#6366f1] text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#f1f5f9] mb-2">Verify Your Identity</h3>
                <p className="text-[#cbd5e1]">
                  We will send a confirmation email to verify your identity. Follow the instructions in the
                  email to confirm the deletion request. This step protects your account from unauthorized
                  deletion.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#6366f1] text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#f1f5f9] mb-2">Account Processing</h3>
                <p className="text-[#cbd5e1]">
                  After verification, we will begin processing your deletion request. Your account will be
                  marked for deletion and associated data will be removed according to our retention policy
                  (see below).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#6366f1] text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#f1f5f9] mb-2">Confirmation</h3>
                <p className="text-[#cbd5e1]">
                  We will send a confirmation email once your account and data have been completely deleted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Processing Timeline</h2>
          <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6 space-y-4 text-[#cbd5e1]">
            <div className="flex justify-between items-start">
              <span className="font-semibold">Verification:</span>
              <span>1-2 business days</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold">Account Deletion:</span>
              <span>30 days maximum</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold">Complete Data Removal:</span>
              <span>30-90 days (see retention policy)</span>
            </div>
          </div>
          <p className="text-[#94a3b8] text-sm mt-4">
            We aim to complete all deletions within 30 days. However, some data may require additional time to
            fully remove from all systems and backups.
          </p>
        </section>

        {/* Data Deletion Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Data Gets Deleted</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#22c55e]">Immediately Deleted (0-7 days)</h3>
            <ul className="space-y-3 text-[#cbd5e1]">
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>User account profile:</strong> Email, username, profile picture, authentication tokens
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>OAuth credentials:</strong> GitHub, Slack, and Google authentication tokens (revoked)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>Auto-commit jobs:</strong> All scheduled jobs and job history
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>Standup rules:</strong> All rules, schedules, and configurations
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>Rule messages:</strong> Message history and sent standup messages
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>PR summaries:</strong> All stored PR summary records
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>Device tokens:</strong> All registered FCM push notification tokens
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <strong>User preferences:</strong> Language, theme, privacy settings
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#f97316]">Retained Temporarily (7-90 days)</h3>
            <ul className="space-y-3 text-[#cbd5e1]">
              <li className="flex gap-3">
                <span className="text-[#f97316] font-bold">⏱</span>
                <span>
                  <strong>Database backups:</strong> Encrypted backups may contain deleted data for up to 90
                  days for recovery purposes
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f97316] font-bold">⏱</span>
                <span>
                  <strong>Transaction logs:</strong> Security and audit logs may retain user identifiers for
                  up to 30 days
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f97316] font-bold">⏱</span>
                <span>
                  <strong>Cache systems:</strong> In-memory caches may contain data fragments for up to 7 days
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#06b6d4]">Not Deleted (Anonymized)</h3>
            <ul className="space-y-3 text-[#cbd5e1]">
              <li className="flex gap-3">
                <span className="text-[#06b6d4] font-bold">∞</span>
                <span>
                  <strong>Anonymized analytics:</strong> Aggregated, non-identifiable usage statistics may be
                  retained indefinitely for product improvement
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#06b6d4] font-bold">∞</span>
                <span>
                  <strong>Error logs (anonymized):</strong> Crash reports and error traces without personally
                  identifiable information
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <div className="space-y-4 text-[#cbd5e1]">
            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="mb-2">
                <strong>GitHub & Slack Integration:</strong> Deleting your AbabilX account will NOT automatically
                delete commits or messages already posted to GitHub or Slack. Those platforms' data retention
                policies apply separately. You may need to manually delete commits or messages in those platforms.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="mb-2">
                <strong>Reconnection:</strong> After deletion, you can create a new account with the same email
                or GitHub username. The new account will be treated as a separate account with no access to
                previously deleted data.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="mb-2">
                <strong>Pending Jobs:</strong> Any in-progress auto-commit jobs will be stopped and cleaned up.
                Scheduled jobs will not execute after deletion is initiated.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="mb-2">
                <strong>Third-Party API Access:</strong> Your OAuth tokens with GitHub, Slack, and Google will
                be revoked. These services will also be notified of token revocation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Questions About Deletion?</h2>
          <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
            <p className="text-[#cbd5e1] mb-4">
              If you have questions about the account deletion process or want to verify what data we have on
              file, please contact us:
            </p>
            <ul className="space-y-2 text-[#cbd5e1]">
              <li>
                <strong>Privacy Inquiries:</strong>{" "}
                <a href="mailto:info@ababilx.cloud" className="text-[#6366f1] hover:underline">
                  info@ababilx.cloud
                </a>
              </li>
              <li>
                <strong>Support:</strong>{" "}
                <a href="mailto:info@ababilx.cloud" className="text-[#6366f1] hover:underline">
                  info@ababilx.cloud
                </a>
              </li>
              <li>
                <strong>Response Time:</strong> We aim to respond within 30 days as per GDPR and applicable
                regulations.
              </li>
            </ul>
          </div>
        </section>

        {/* Legal References */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Legal Compliance</h2>
          <p className="text-[#cbd5e1] leading-7">
            This account deletion process complies with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#cbd5e1] mt-4">
            <li>
              <strong>GDPR (EU):</strong> Right to erasure (Article 17)
            </li>
            <li>
              <strong>CCPA (California):</strong> Right to deletion (Section 1798.100)
            </li>
            <li>
              <strong>Google Play Families Policy:</strong> User data deletion requirements
            </li>
            <li>
              <strong>LGPD (Brazil):</strong> Right to erasure (Article 18)
            </li>
          </ul>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#1e293b] text-[#94a3b8] text-sm">
          <p>
            Last updated: May 28, 2026. For our full privacy policy, please visit{" "}
            <a href="/privacy-policy" className="text-[#6366f1] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
