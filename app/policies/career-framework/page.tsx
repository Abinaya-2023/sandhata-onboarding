import PolicyNavigation from "@/components/PolicyNavigation";
export default function CareerFrameworkPage() {
  const principles = [
    {
      icon: "🎯",
      title: "Performance",
      description:
        "Growth is based on contribution, impact and consistent results.",
    },
    {
      icon: "🚀",
      title: "Potential",
      description:
        "Career progression considers future capability and readiness.",
    },
    {
      icon: "📚",
      title: "Learning Mindset",
      description:
        "Continuous learning and development are critical for growth.",
    },
    {
      icon: "🤝",
      title: "Professional Behaviour",
      description:
        "Ownership, accountability and maturity are essential.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Career Framework
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Understand how career growth, development and progression work at Sandhata.
          </p>

        </div>

      </section>

      {/* Philosophy */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Career Philosophy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Career growth at Sandhata is based on capability, performance,
            potential, learning mindset and professional behaviour rather
            than only tenure or job title.
          </p>

        </div>

      </section>

      {/* Principles */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Career Growth Principles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {principles.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Competencies */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Competency Framework
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Technical
              </h3>

              <p>
                Skills and expertise required for your role.
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Behavioural
              </h3>

              <p>
                Communication, collaboration and professional conduct.
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Role-Based
              </h3>

              <p>
                Responsibilities and expectations for current and future roles.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Development */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Development Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Self Assessment
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Manager Discussion
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Quarterly Check-ins
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Progress Review
          </div>

        </div>

      </section>

      {/* Progression Criteria */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-green-50 border-l-8 border-green-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Promotion Readiness
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✓ Demonstrated next-level competencies</li>

            <li>✓ Strong performance against KRAs</li>

            <li>✓ Completed development actions</li>

            <li>✓ Positive stakeholder feedback</li>

            <li>✓ Consistent professional conduct</li>

          </ul>

        </div>

      </section>

      {/* Important Notes */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-yellow-50 border-l-8 border-yellow-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Important Clarifications
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>
              A role change does not automatically mean an immediate salary change.
            </li>

            <li>
              Internal roles and client project roles may differ.
            </li>

            <li>
              Progression is not automatic and requires formal review.
            </li>

            <li>
              Career decisions are validated by HR and review panels.
            </li>

          </ul>

        </div>

      </section>
<PolicyNavigation
  previous={{
    title: "Work From Home",
    href: "/policies/work-from-home",
  }}
  next={{
    title: "PMS 2026",
    href: "/policies/pms-2026",
  }}
/>
    </div>
  );
}