import PolicyNavigation from "@/components/PolicyNavigation";
export default function PMS2026Page() {
  const kras = [
    {
      icon: "📈",
      title: "Grow Sandhata",
      description:
        "Contribute towards business growth, customer success and organizational objectives.",
    },
    {
      icon: "⚡",
      title: "Be Super-Efficient",
      description:
        "Improve productivity, quality and operational excellence.",
    },
    {
      icon: "🌟",
      title: "Build Our Brand",
      description:
        "Represent Sandhata positively and strengthen our market presence.",
    },
    {
      icon: "🤝",
      title: "Strengthen Our Culture",
      description:
        "Promote collaboration, learning and organizational values.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            PMS 2026
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Understand how performance is planned, tracked, reviewed
            and recognized at Sandhata.
          </p>

        </div>

      </section>

      {/* Overview */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            What is PMS?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The Performance Management System (PMS) helps align employee
            goals with organizational objectives. It provides a structured
            framework for setting goals, measuring outcomes, reviewing
            performance and supporting career growth.
          </p>

        </div>

      </section>

      {/* Performance Formula */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Performance Score Composition
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold">
                30%
              </div>

              <p className="mt-3">
                Practice Goals
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold">
                70%
              </div>

              <p className="mt-3">
                Delivery Goals
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold">
                100%
              </div>

              <p className="mt-3">
                Overall Performance
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* KRAs */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Organization KRAs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {kras.map((kra) => (
            <div
              key={kra.title}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="text-5xl mb-4">
                {kra.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {kra.title}
              </h3>

              <p className="text-gray-600">
                {kra.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* PMS Cycle */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          PMS Cycle
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Goal Setting
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Quarterly Reviews
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Self Assessment
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Manager Review
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Final Rating
          </div>

        </div>

      </section>

      {/* Employee Responsibilities */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Employee Responsibilities
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✓ Understand assigned KRAs and goals.</li>

            <li>✓ Track progress throughout the year.</li>

            <li>✓ Participate actively in review discussions.</li>

            <li>✓ Maintain evidence of achievements.</li>

            <li>✓ Focus on continuous improvement.</li>

          </ul>

        </div>

      </section>

      {/* Manager Responsibilities */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Manager Responsibilities
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✓ Set clear expectations.</li>

            <li>✓ Provide timely feedback.</li>

            <li>✓ Conduct fair and objective reviews.</li>

            <li>✓ Support employee development.</li>

            <li>✓ Recognize strong performance.</li>

          </ul>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-yellow-50 border-l-8 border-yellow-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-bold text-xl mb-2">
                Are ratings based only on project delivery?
              </h3>

              <p className="text-gray-700">
                No. Both practice goals and delivery goals contribute to the overall score.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                How often is performance reviewed?
              </h3>

              <p className="text-gray-700">
                Performance is tracked continuously with formal review checkpoints during the cycle.
              </p>
            </div>

          </div>

        </div>

      </section>
<PolicyNavigation
  previous={{
    title: "Career Framework",
    href: "/policies/career-framework",
  }}
  next={{
    title: "POSH Policy",
    href: "/policies/posh",
  }}
/>
    </div>
  );
}