import OnboardingNav from "@/components/OnboardingNav";
import ProgressTracker from "@/components/ProgressTracker";
export default function LeavePage() {
  const leaveTypes = [
    {
      icon: "🏖",
      title: "Casual Leave",
      description:
        "Used for personal commitments, appointments, family functions, errands, or planned short absences.",
      examples: [
        "Bank work",
        "Family event",
        "Personal appointment",
        "Urgent personal work",
      ],
    },
    {
      icon: "🤒",
      title: "Sick Leave",
      description:
        "Used when you are unwell and unable to perform your work responsibilities.",
      examples: [
        "Fever",
        "Medical consultation",
        "Recovery from illness",
        "Health-related rest",
      ],
    },
    {
      icon: "🎉",
      title: "Restricted Holiday",
      description:
        "Optional holidays that employees may choose based on cultural, religious or regional significance.",
      examples: [
        "Regional festivals",
        "Religious celebrations",
        "Community observances",
      ],
    },
    {
      icon: "📈",
      title: "Earned Leave",
      description:
        "Leave accumulated over time based on company policy and employee service period.",
      examples: [
        "Vacation planning",
        "Extended personal travel",
        "Family visits",
      ],
    },
    {
      icon: "👶",
      title: "Maternity Leave",
      description:
        "Leave granted to employees before and after childbirth according to company policy and applicable laws.",
      examples: [
        "Prenatal care",
        "Childbirth recovery",
        "Early childcare",
      ],
    },
    {
      icon: "👨‍🍼",
      title: "Paternity Leave",
      description:
        "Leave provided to employees following the birth or adoption of a child.",
      examples: [
        "Supporting family after childbirth",
        "Adoption-related responsibilities",
      ],
    },
    {
      icon: "🚨",
      title: "Emergency Leave",
      description:
        "Used when unexpected personal or family emergencies require immediate absence.",
      examples: [
        "Medical emergency",
        "Family emergency",
        "Urgent personal situation",
      ],
    },
    {
      icon: "📉",
      title: "Loss of Pay (LOP)",
      description:
        "Applied when leave exceeds available leave balance or when leave is taken without eligible leave credits.",
      examples: [
        "Leave balance exhausted",
        "Unapproved extended absence",
      ],
    },
  ];

  return (
    <>
      
      <main className="bg-slate-50 min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-6xl font-bold">
              Leave Application Guide
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Understand leave types, approval workflow and employee responsibilities.
            </p>

          </div>

        </section>
<OnboardingNav />
<ProgressTracker />
        {/* Process Flow */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Leave Application Process
            </h2>

            <div className="grid md:grid-cols-5 gap-4 text-center">

              <div className="bg-slate-100 rounded-2xl p-4">
                Login
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                Select Leave Type
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                Choose Dates
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                Add Reason
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                Submit
              </div>

            </div>

          </div>

        </section>

        {/* Leave Types */}
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-bold text-center mb-12">
            Types of Leave
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {leaveTypes.map((leave) => (
              <div
                key={leave.title}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <div className="text-5xl mb-5">
                  {leave.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {leave.title}
                </h3>

                <p className="text-gray-700 mb-6">
                  {leave.description}
                </p>

                <h4 className="font-semibold mb-3">
                  Common Examples
                </h4>

                <ul className="list-disc ml-6 space-y-1">
                  {leave.examples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </section>

        {/* Status */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Leave Status Meaning
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-yellow-50 p-6 rounded-2xl">
                <h3 className="font-bold mb-2">Pending</h3>
                <p>Awaiting approval.</p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="font-bold mb-2">Approved</h3>
                <p>Leave request approved.</p>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="font-bold mb-2">Rejected</h3>
                <p>Request was not approved.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="font-bold mb-2">Cancelled</h3>
                <p>Leave withdrawn by employee.</p>
              </div>

            </div>

          </div>

        </section>

      </main>
     
    </>
  );
}