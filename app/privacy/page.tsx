export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black px-6 py-14">
  <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold">
          Privacy Policy
        </h1>

        <p>
          This Privacy Policy explains how Is It Too Late Calculator collects,
          uses, and protects information when you use this website.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Information We Collect
        </h2>

        <p>
          This website does not require account registration and does not
          collect personal information such as names, emails, or phone numbers.
        </p>

        <p>
          The calculator processes user inputs (age, daily hours, goal selection)
          locally within your browser. These inputs are not stored on our servers.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Cookies and Analytics
        </h2>

        <p>
          This website may use basic analytics tools or advertising services
          (such as Google AdSense in the future) that use cookies to improve
          user experience and measure performance.
        </p>

        <p>
          Third-party vendors may use cookies to serve ads based on prior visits
          to this website or other websites.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          How We Use Information
        </h2>

        <p>
          Any data processed is used solely for generating real-time time
          projections within the calculator tool. No personal data is sold
          or shared.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Third-Party Services
        </h2>

        <p>
          This website may contain links to external resources. We are not
          responsible for the privacy practices of external websites.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Updates to This Policy
        </h2>

        <p>
          This Privacy Policy may be updated periodically. Any changes will
          be reflected on this page.
        </p>

        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

      </div>
    </main>
  );
}