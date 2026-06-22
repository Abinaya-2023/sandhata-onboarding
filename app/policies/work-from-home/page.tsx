import PolicyNavigation from "@/components/PolicyNavigation";
export default function WorkFromHomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Work From Home Policy
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Guidelines and expectations for employees working remotely
            while maintaining productivity, collaboration and security.
          </p>

        </div>

      </section>

      {/* Overview */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Policy Overview
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Work From Home (WFH) enables employees to perform their duties
            remotely while maintaining the same standards of productivity,
            professionalism and accountability expected in the office.
          </p>

        </div>

      </section>

      {/* Expectations */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Employee Expectations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-3">
              Availability
            </h3>
            <p>
              Be available during designated working hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">
              Communication
            </h3>
            <p>
              Stay connected through Outlook, Teams and official channels.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">
              Productivity
            </h3>
            <p>
              Deliver assigned work within agreed timelines.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3">
              Security
            </h3>
            <p>
              Protect company information and systems.
            </p>
          </div>

        </div>

      </section>

      {/* Responsibilities */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Key Responsibilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Employee
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>Maintain regular attendance</li>
              <li>Update SaAT status</li>
              <li>Respond to communication promptly</li>
              <li>Maintain work records</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Manager
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>Monitor deliverables</li>
              <li>Support team collaboration</li>
              <li>Review performance fairly</li>
              <li>Ensure workload balance</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Organization
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>Provide collaboration tools</li>
              <li>Ensure secure access</li>
              <li>Support remote productivity</li>
              <li>Maintain business continuity</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Security */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-yellow-50 border-l-8 border-yellow-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Information Security Requirements
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>Use company-approved devices and applications.</li>

            <li>Protect passwords and login credentials.</li>

            <li>Do not share confidential information externally.</li>

            <li>Lock devices when unattended.</li>

            <li>Use secure internet connections.</li>

          </ul>

        </div>

      </section>

      {/* Common Mistakes */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Common Mistakes to Avoid
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>Failing to update SaAT status.</li>

            <li>Being unavailable during work hours.</li>

            <li>Missing meetings without notification.</li>

            <li>Using unsecured networks for work.</li>

            <li>Delays in communication.</li>

          </ul>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-bold text-xl mb-2">
                Do I need to update SaAT when working from home?
              </h3>

              <p className="text-gray-700">
                Yes. Employees should update their work location and
                availability status appropriately.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                Can I work from any location?
              </h3>

              <p className="text-gray-700">
                Employees should follow company guidelines and update
                their work location accurately when working remotely.
              </p>
            </div>

          </div>

        </div>

      </section>
<PolicyNavigation
  previous={{
    title: "Professional Appearance",
    href: "/policies/professional-appearance",
  }}
  next={{
    title: "Career Framework",
    href: "/policies/career-framework",
  }}
/>
    </div>
  );
}