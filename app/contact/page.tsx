export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold">
          Contact
        </h1>

        <p>
          If you have questions, feedback, or suggestions regarding the
          Is It Too Late Calculator, you can reach out via email.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Email
        </h2>

        <p>
          For general inquiries:
        </p>

        <p className="font-medium">
          isittoolatecalculator@gmail.com
        </p>

        <p className="text-sm text-gray-600">
          Please allow up to 3–5 business days for a response.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Reasons to Contact
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Reporting technical issues</li>
          <li>Content clarification</li>
          <li>General feedback</li>
        </ul>

      </div>
    </main>
  );
}