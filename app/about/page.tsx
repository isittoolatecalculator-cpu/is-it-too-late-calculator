export default function AboutPage() {
  return (
     <main className="min-h-screen bg-gray-50 text-black px-6 py-14">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold">
          About Is It Too Late Calculator
        </h1>

        <p>
          Is It Too Late Calculator is a structured time-investment modeling tool
          designed to help individuals evaluate whether starting a new goal
          is realistically feasible based on time availability.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          What This Tool Does
        </h2>

        <p>
          The calculator estimates:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Years remaining until a selected target age</li>
          <li>Total available investment hours</li>
          <li>Estimated time to reach predefined effort benchmarks</li>
          <li>Opportunity cost of delaying five years</li>
          <li>Optional life allocation modeling (sleep and screen usage)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          What This Tool Does Not Do
        </h2>

        <p>
          This website does not guarantee outcomes, predict success,
          or provide financial, medical, or career advice.
        </p>

        <p>
          All projections are based on structured time accumulation formulas.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Who It Is For
        </h2>

        <p>
          This tool is designed for individuals considering:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Career changes</li>
          <li>Investing later in life</li>
          <li>Starting fitness routines</li>
          <li>Returning to education</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          Philosophy
        </h2>

        <p>
          The core principle behind this project is that most life transitions
          are constrained by structured time allocation rather than age alone.
        </p>

        <p>
          By quantifying time capacity and opportunity cost,
          the goal is to provide clarity — not motivation or prediction.
        </p>

      </div>
    </main>
  );
}