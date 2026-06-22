import PolicyNavigation from "@/components/PolicyNavigation";
export default function ProfessionalAppearancePage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Professional Appearance Policy
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Maintaining a professional image that reflects Sandhata's values,
            culture and commitment to excellence.
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
            Professional appearance contributes to a positive workplace
            environment and creates confidence among colleagues, clients
            and stakeholders. Employees are expected to maintain appropriate
            grooming, hygiene and attire while representing Sandhata.
          </p>

        </div>

      </section>

      {/* Expectations */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Professional Expectations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">👔</div>
            <h3 className="text-xl font-bold mb-3">
              Appropriate Attire
            </h3>
            <p>
              Wear clean, neat and workplace-appropriate clothing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-3">
              Personal Grooming
            </h3>
            <p>
              Maintain personal hygiene and a professional appearance.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">
              Client Meetings
            </h3>
            <p>
              Dress professionally during client-facing interactions.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-3">
              Workplace Image
            </h3>
            <p>
              Represent Sandhata positively at all times.
            </p>
          </div>

        </div>

      </section>

      {/* Do's */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-green-50 border-l-8 border-green-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            ✓ Recommended Practices
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>Maintain professional grooming standards.</li>

            <li>Wear clean and presentable clothing.</li>

            <li>Follow department-specific dress requirements.</li>

            <li>Dress appropriately for client interactions.</li>

            <li>Maintain professional body language and conduct.</li>

          </ul>

        </div>

      </section>

      {/* Don'ts */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            ✗ Practices to Avoid
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>Wearing inappropriate or offensive clothing.</li>

            <li>Ignoring workplace hygiene standards.</li>

            <li>Unprofessional appearance during meetings.</li>

            <li>Attire that negatively impacts workplace professionalism.</li>

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
                Is there a mandatory dress code?
              </h3>

              <p className="text-gray-700">
                Employees are expected to maintain professional and
                workplace-appropriate attire.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                Does the policy apply during virtual meetings?
              </h3>

              <p className="text-gray-700">
                Yes. Professional appearance is expected during client
                meetings and important virtual interactions.
              </p>
            </div>

          </div>

        </div>


      </section>
<PolicyNavigation
  previous={{
    title: "Leave Policy",
    href: "/policies/leave-policy",
  }}
  next={{
    title: "Work From Home",
    href: "/policies/work-from-home",
  }}
/>
    </div>
  );
}