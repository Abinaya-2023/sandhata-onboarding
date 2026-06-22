import OnboardingNav from "@/components/OnboardingNav";
import ProgressTracker from "@/components/ProgressTracker";
export default function SaatPage() {
  const workModes = [
    {
      icon: "🏢",
      title: "Work From Office",
      description:
        "Select when you are working from an official Sandhata office location.",
    },
    {
      icon: "🏠",
      title: "Work From Home",
      description:
        "Select when you are working from your registered home location.",
    },
    {
      icon: "📍",
      title: "Different Location",
      description:
        "Select when you are working from a location other than your registered home or office.",
    },
    {
      icon: "🌗",
      title: "First Half Working",
      description:
        "Used when you are available only during the first half of the working day.",
    },
    {
      icon: "🌗",
      title: "Second Half Working",
      description:
        "Used when you are available only during the second half of the working day.",
    },
    {
      icon: "🌴",
      title: "On Leave",
      description:
        "Select when approved leave has been applied for the day.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            SaAT Status Update
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Keep your work location and availability updated to support
            business continuity and team collaboration.
          </p>

        </div>

      </section>
<OnboardingNav />
<ProgressTracker />
      {/* What is SaAT */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            What is SaAT?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            SaAT helps Sandhata track employee work locations and availability.
            It supports business continuity planning, workforce visibility and
            operational readiness.
          </p>

        </div>

      </section>

      {/* Why It Matters */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Why Updating Status Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-100 p-6 rounded-2xl">
              👥 Team Visibility
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl">
              📊 Workforce Planning
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl">
              🛡 Business Continuity
            </div>

          </div>

        </div>

      </section>

      {/* Work Modes */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Work Mode Options
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {workModes.map((mode) => (
            <div
              key={mode.title}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="text-5xl mb-5">
                {mode.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {mode.title}
              </h3>

              <p className="text-gray-700">
                {mode.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Update Process */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Status Update Process
          </h2>

          <div className="grid md:grid-cols-4 gap-4 text-center">

            <div className="bg-slate-100 p-5 rounded-2xl">
              Open SaAT
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              Select Work Mode
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              Verify Details
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              Submit
            </div>

          </div>

        </div>

      </section>

      {/* Common Mistakes */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-8">
            Common Mistakes to Avoid
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white/10 p-5 rounded-2xl">
              ❌ Forgetting to update status
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              ❌ Selecting the wrong work mode
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              ❌ Updating information late
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              ❌ Assuming previous status carries forward
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}