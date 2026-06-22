import Breadcrumbs from "@/components/Breadcrumbs";
import PolicyNavigation from "@/components/PolicyNavigation";
export default function LeavePolicyPage() {
  const leaveTypes = [
    {
      title: "Casual Leave",
      days: "12 Days / Year",
      icon: "🏖️",
      description:
        "For personal work, family commitments and short-notice non-medical reasons.",
    },
    {
      title: "Earned Leave",
      days: "12 Days / Year",
      icon: "📅",
      description:
        "Planned leave that can be carried forward up to 10 days.",
    },
    {
      title: "Sick Leave",
      days: "As Per Policy",
      icon: "🤒",
      description:
        "Used for illness, medical treatment and health-related needs.",
    },
    {
      title: "Restricted Holiday",
      days: "As Applicable",
      icon: "🎉",
      description:
        "Optional holidays from the approved restricted holiday calendar.",
    },
    {
      title: "Maternity Leave",
      days: "26 Weeks",
      icon: "👶",
      description:
        "Available to eligible female employees for the first two children.",
    },
    {
      title: "Paternity Leave",
      days: "5 Days",
      icon: "👨‍👶",
      description:
        "Available to eligible male employees within 6 months of childbirth or adoption.",
    },
  ];

  return (
    <>
     

      <main className="bg-slate-50 min-h-screen">
        <Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Policies", href: "/policies" },
    { label: "Leave Policy" },
  ]}
/>

        {/* Hero */}

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-6xl font-bold">
              Leave Policy
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
              Understand leave types, eligibility, approval process,
              emergency leave rules and employee responsibilities.
            </p>

          </div>

        </section>


        {/* Overview */}

        <section className="max-w-6xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-6">
              Policy Overview
            </h2>

            <div className="space-y-4 text-lg text-gray-700">

              <p>
                The Leave Policy helps employees take planned time away
                from work for rest, sickness, personal needs, family
                responsibilities and important life events.
              </p>

              <p>
                The policy applies to all permanent employees across
                Sandhata locations.
              </p>

              <p>
                Leave is managed on a calendar-year basis from
                January to December.
              </p>

            </div>

          </div>

        </section>

        {/* Leave Types */}

        <section className="max-w-7xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-bold text-center mb-12">
            Types of Leave
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {leaveTypes.map((leave) => (
              <div
                key={leave.title}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <div className="text-5xl mb-4">
                  {leave.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {leave.title}
                </h3>

                <p className="text-blue-700 font-semibold mb-4">
                  {leave.days}
                </p>

                <p className="text-gray-600">
                  {leave.description}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Special Leave Rules */}

        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Important Leave Rules
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-bold text-xl">
                  Casual Leave
                </h3>

                <p className="text-gray-700">
                  Employees receive 12 Casual Leaves per year.
                  Maximum 2 days can be taken continuously and
                  Casual Leave cannot be combined with other leave types.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Earned Leave
                </h3>

                <p className="text-gray-700">
                  Employees receive 12 Earned Leaves per year.
                  Up to 10 days can be carried forward.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Long Leave Without Pay
                </h3>

                <p className="text-gray-700">
                  Employees with at least 3 years of service may apply
                  for 30 to 90 days of unpaid leave for approved personal,
                  medical, family or educational reasons.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Emergency Leave */}

        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-4">
              Emergency Leave
            </h2>

            <p className="text-lg text-gray-700">
              In emergencies, employees must inform their Reporting
              Manager and HR within 4 hours of absence.
            </p>

            <p className="mt-4 text-lg text-gray-700">
              The leave request must be submitted within
              2 working days after returning to work.
            </p>

          </div>

        </section>

        {/* Loss of Pay */}

        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-yellow-50 border-l-8 border-yellow-500 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-4">
              Loss of Pay (LOP)
            </h2>

            <p className="text-lg text-gray-700">
              If leave is taken without sufficient leave balance
              or without approval, it may be treated as
              Loss of Pay and deducted from salary.
            </p>

          </div>

        </section>

        {/* Responsibilities */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Responsibilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Employee
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>Submit leave requests on time</li>
                <li>Provide accurate dates</li>
                <li>Upload supporting documents</li>
                <li>Ensure work is handed over properly</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Manager
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>Review requests promptly</li>
                <li>Assess business impact</li>
                <li>Approve or reject fairly</li>
                <li>Provide comments when required</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                HR Team
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>Maintain leave records</li>
                <li>Validate eligibility</li>
                <li>Manage leave balances</li>
                <li>Support payroll processing</li>
              </ul>
            </div>

          </div>
         <PolicyNavigation
  next={{
    title: "Professional Appearance",
    href: "/policies/professional-appearance",
  }}
/>

        </section>

      </main>


    </>
  );
}