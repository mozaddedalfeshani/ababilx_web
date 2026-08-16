/* eslint-disable react/no-unescaped-entities -- legal prose */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description:
    "Delete specific data from your AbabilX account while keeping your account active. Self-service and bulk deletion options.",
  alternates: {
    canonical: "/data-deletion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] to-[#0c0c14] text-[#f1f5f9] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Data Deletion Request</h1>
          <p className="text-[#94a3b8]">Request to delete specific data while keeping your account active</p>
        </div>

        {/* Quick Action */}
        <div className="bg-[#0c0c14] border border-[#6366f1] rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold mb-4 text-[#6366f1]">Request Data Deletion</h2>
          <p className="text-[#cbd5e1] mb-4">
            To delete specific data from your account, you have two options:
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-[#f1f5f9] mb-2">Option 1: Self-Service (Recommended)</h3>
              <p className="text-[#cbd5e1] text-sm mb-3">
                Delete data directly from your profile:
              </p>
              <ul className="text-[#cbd5e1] text-sm space-y-1 ml-4">
                <li>• Go to your profile settings</li>
                <li>• Disconnect OAuth integrations (GitHub, Slack, Google)</li>
                <li>• Delete individual auto-commit jobs</li>
                <li>• Delete individual standup rules and message history</li>
              </ul>
            </div>

            <div className="border-t border-[#1e293b] pt-4">
              <h3 className="font-semibold text-[#f1f5f9] mb-2">Option 2: Request Bulk Deletion</h3>
              <p className="text-[#cbd5e1] text-sm mb-3">
                For bulk data deletion or to delete all personal data except your account:
              </p>
              <a
                href="mailto:info@ababilx.cloud?subject=Data%20Deletion%20Request"
                className="inline-block bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Request Data Deletion
              </a>
            </div>
          </div>
        </div>

        {/* Self-Service Deletion */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Self-Service Data Deletion</h2>

          <div className="space-y-6">
            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-semibold text-[#f1f5f9] mb-3">Disconnect OAuth Integrations</h3>
              <p className="text-[#cbd5e1] text-sm mb-4">
                Immediately revokes your authentication tokens. No new jobs or rules can access these
                platforms.
              </p>
              <div className="space-y-2 text-sm text-[#cbd5e1]">
                <p>
                  <strong>GitHub:</strong> Revokes GitHub access token. No new commits can be created.
                  Existing commits remain on GitHub.
                </p>
                <p>
                  <strong>Slack:</strong> Revokes Slack access token. No new messages can be sent. Existing
                  messages remain in Slack.
                </p>
                <p>
                  <strong>Google:</strong> Revokes Google authentication. You'll need to re-authenticate to
                  use mobile app.
                </p>
              </div>
              <p className="text-[#94a3b8] text-xs mt-4">
                Deletion is immediate. Tokens are revoked within seconds.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-semibold text-[#f1f5f9] mb-3">Delete Auto-Commit Jobs</h3>
              <p className="text-[#cbd5e1] text-sm mb-4">
                Delete individual jobs or all jobs at once. Running jobs are stopped immediately.
              </p>
              <div className="space-y-2 text-sm text-[#cbd5e1]">
                <p>
                  <strong>What's deleted:</strong> Job configuration, schedule, history, and next_commit_date
                </p>
                <p>
                  <strong>What's kept:</strong> Commits already created on GitHub remain. Job deletion records
                  for 30 days.
                </p>
              </div>
              <p className="text-[#94a3b8] text-xs mt-4">
                Deletion is immediate. Scheduled commits for this job will not execute.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-semibold text-[#f1f5f9] mb-3">Delete Standup Rules</h3>
              <p className="text-[#cbd5e1] text-sm mb-4">
                Delete individual rules or all rules. Scheduled messages are cancelled.
              </p>
              <div className="space-y-2 text-sm text-[#cbd5e1]">
                <p>
                  <strong>What's deleted:</strong> Rule configuration, send times, repository targets, message
                  history
                </p>
                <p>
                  <strong>What's kept:</strong> Messages already sent to Slack remain. Rule deletion records for
                  30 days.
                </p>
              </div>
              <p className="text-[#94a3b8] text-xs mt-4">
                Deletion is immediate. Scheduled messages for this rule will not be sent.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-semibold text-[#f1f5f9] mb-3">Clear Message History</h3>
              <p className="text-[#cbd5e1] text-sm mb-4">
                Delete message history for a specific rule while keeping the rule active.
              </p>
              <div className="space-y-2 text-sm text-[#cbd5e1]">
                <p>
                  <strong>What's deleted:</strong> Message records, timestamps, and message content history
                </p>
                <p>
                  <strong>What's kept:</strong> Messages already sent to Slack. Rule configuration and schedule.
                </p>
              </div>
              <p className="text-[#94a3b8] text-xs mt-4">
                Deletion is immediate. Historical messages cannot be recovered.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-semibold text-[#f1f5f9] mb-3">Update Privacy Settings</h3>
              <p className="text-[#cbd5e1] text-sm mb-4">
                Opt out of analytics, crash reporting, or disable push notifications.
              </p>
              <div className="space-y-2 text-sm text-[#cbd5e1]">
                <p>
                  <strong>What's deleted:</strong> Analytics consent, crash reporting consent, notification
                  preferences
                </p>
                <p>
                  <strong>What's kept:</strong> FCM tokens may be retained for 30 days. Aggregated analytics
                  data.
                </p>
              </div>
              <p className="text-[#94a3b8] text-xs mt-4">
                Changes take effect immediately. No new data collection for opted-out services.
              </p>
            </div>
          </div>
        </section>

        {/* Bulk Data Deletion */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Request Bulk Data Deletion</h2>

          <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6 mb-6">
            <p className="text-[#cbd5e1] mb-4">
              If you want to delete all personal data while keeping your account, or need assistance with bulk
              deletion, contact us:
            </p>
            <a
              href="mailto:info@ababilx.cloud?subject=Bulk%20Data%20Deletion%20Request"
              className="inline-block bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send Bulk Deletion Request
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#6366f1] text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#f1f5f9] mb-2">Send Request</h3>
                <p className="text-[#cbd5e1] text-sm">
                  Email{" "}
                  <a href="mailto:info@ababilx.cloud" className="text-[#6366f1] hover:underline">
                    info@ababilx.cloud
                  </a>{" "}
                  with your request. Specify what data you want deleted (e.g., "all jobs", "all rules", "all
                  personal data").
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
                <h3 className="font-semibold text-[#f1f5f9] mb-2">Verify Identity</h3>
                <p className="text-[#cbd5e1] text-sm">
                  We'll send a confirmation to your registered email. Click the link to verify your request.
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
                <h3 className="font-semibold text-[#f1f5f9] mb-2">Processing</h3>
                <p className="text-[#cbd5e1] text-sm">
                  We process your deletion request and remove the specified data. Your account remains active.
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
                <p className="text-[#cbd5e1] text-sm">
                  We send confirmation once deletion is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Processing Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-semibold text-[#f1f5f9] mb-4">Self-Service Deletion</h3>
              <div className="space-y-3 text-[#cbd5e1] text-sm">
                <div className="flex justify-between">
                  <span>Execution:</span>
                  <span className="font-semibold text-[#22c55e]">Immediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Database removal:</span>
                  <span>0-7 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Backup removal:</span>
                  <span>7-30 days</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-semibold text-[#f1f5f9] mb-4">Bulk Deletion Request</h3>
              <div className="space-y-3 text-[#cbd5e1] text-sm">
                <div className="flex justify-between">
                  <span>Verification:</span>
                  <span>1-2 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span>3-7 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Total max time:</span>
                  <span className="font-semibold">30 days</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Specifics */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Data Can Be Deleted</h2>

          <div className="space-y-4">
            <div className="bg-[#0c0c14] border border-[#22c55e] rounded-lg p-4">
              <h3 className="font-semibold text-[#22c55e] mb-3">Can Be Deleted (Without Account Deletion)</h3>
              <ul className="space-y-2 text-[#cbd5e1] text-sm">
                <li>✓ Auto-commit jobs and history</li>
                <li>✓ Standup rules and message history</li>
                <li>✓ PR summaries</li>
                <li>✓ OAuth tokens (by disconnecting integrations)</li>
                <li>✓ FCM push notification tokens</li>
                <li>✓ Message records from Slack</li>
                <li>✓ User preferences and privacy settings</li>
                <li>✓ Analytics consent</li>
              </ul>
            </div>

            <div className="bg-[#0c0c14] border border-[#f97316] rounded-lg p-4">
              <h3 className="font-semibold text-[#f97316] mb-3">Retained Temporarily (Cannot Be Deleted Immediately)</h3>
              <ul className="space-y-2 text-[#cbd5e1] text-sm">
                <li>⏱ Database backups (7-30 days)</li>
                <li>⏱ Transaction logs (7-30 days)</li>
                <li>⏱ Cache fragments (0-7 days)</li>
                <li>⏱ Slack/GitHub messages already sent (in those platforms)</li>
              </ul>
            </div>

            <div className="bg-[#0c0c14] border border-[#06b6d4] rounded-lg p-4">
              <h3 className="font-semibold text-[#06b6d4] mb-3">Not Deleted (Anonymized Data Only)</h3>
              <ul className="space-y-2 text-[#cbd5e1] text-sm">
                <li>∞ Aggregated analytics (anonymized)</li>
                <li>∞ Error logs (without personal info)</li>
                <li>∞ Platform usage statistics (non-identifiable)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <div className="space-y-4 text-[#cbd5e1] text-sm">
            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="font-semibold mb-2">GitHub & Slack Data</p>
              <p>
                Deleting jobs or rules from AbabilX does NOT delete commits or messages already posted to GitHub
                or Slack. You must delete those separately in their respective platforms.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="font-semibold mb-2">Account Recovery</p>
              <p>
                Deleted data cannot be recovered. If you delete a rule or job, you'll need to recreate it if you
                want it back.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="font-semibold mb-2">Pending Operations</p>
              <p>
                If you delete a job or rule while it's executing, the operation will be cancelled and cleaned
                up immediately.
              </p>
            </div>

            <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-4">
              <p className="font-semibold mb-2">Account Stays Active</p>
              <p>
                Data deletion does not affect your account. You can continue using AbabilX. You can
                <a href="/account-deletion" className="text-[#6366f1] hover:underline ml-1">
                  delete your entire account separately
                </a>
                if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <div className="bg-[#0c0c14] border border-[#1e293b] rounded-lg p-6">
            <p className="text-[#cbd5e1] mb-4">
              For questions about data deletion or to request bulk deletion:
            </p>
            <ul className="space-y-2 text-[#cbd5e1]">
              <li>
                <strong>Privacy:</strong>{" "}
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
                <strong>Response time:</strong> 30 days (GDPR/CCPA compliant)
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#1e293b] text-[#94a3b8] text-sm">
          <p>
            Last updated: May 28, 2026. For our full privacy policy, visit{" "}
            <a href="/privacy-policy" className="text-[#6366f1] hover:underline">
              Privacy Policy
            </a>
            . For account deletion, visit{" "}
            <a href="/account-deletion" className="text-[#6366f1] hover:underline">
              Account Deletion
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
