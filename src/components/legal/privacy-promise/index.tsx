const PROMISES = [
  {
    title: "End-to-end encrypted",
    body: "No government, no military, no hacker — not even us — can read your chats. Seize our servers and all anyone gets is locked text.",
  },
  {
    title: "Ghost Chat",
    body: "Phone to phone, never stored. One tap on the flame wipes it from both phones.",
  },
  {
    title: "Your key, your code",
    body: "Your recovery code is made on your device and shown only to you. We never see it.",
  },
  {
    title: "No ads, no trackers",
    body: "No selling your data. Ever. Delete a chat or your account anytime.",
  },
];

/** The trust summary above the legal documents; the full terms follow it. */
export default function PrivacyPromise() {
  return (
    <section
      aria-labelledby="privacy-promise-title"
      className="mb-8 rounded-xl border border-[#312e81] bg-[#0c0c14] p-6"
    >
      <h2
        id="privacy-promise-title"
        className="text-2xl font-bold text-[#f8fafc]"
      >
        Your chats stay private
      </h2>
      <p className="mt-1 text-[#94a3b8]">
        <strong className="text-[#f1f5f9]">World-class</strong> secured
        messaging, built so you can trust it.
      </p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {PROMISES.map((p) => (
          <li
            key={p.title}
            className="rounded-lg border border-[#1e293b] bg-[#050508] p-4"
          >
            <p className="font-semibold text-[#e2e8f0]">{p.title}</p>
            <p className="mt-1 text-sm text-[#94a3b8]">{p.body}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-[#94a3b8]">
        What we can and cannot see is spelled out in Sections 1.1 and 1.2 of
        the Privacy Policy below.
      </p>
    </section>
  );
}
