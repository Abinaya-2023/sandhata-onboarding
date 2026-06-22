import Breadcrumbs from "@/components/Breadcrumbs";
import PolicyNavigation from "@/components/PolicyNavigation";
export default function AntiBriberyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Policies", href: "/policies" },
    { label: "Anti-Bribery Policy" },
  ]}
/>
      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Anti-Bribery & Anti-Corruption Policy
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Promoting ethical business practices, integrity and compliance
            across all Sandhata operations.
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
            Sandhata follows a zero-tolerance approach towards bribery,
            corruption and unethical business practices. Employees are
            expected to conduct business honestly, transparently and in
            compliance with applicable laws and company standards.
          </p>

        </div>

      </section>

      {/* Core Principles */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Core Principles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-3">
              Integrity
            </h3>
            <p>
              Act honestly and ethically in all business dealings.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">
              Transparency
            </h3>
            <p>
              Ensure transactions are documented and traceable.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-3">
              Compliance
            </h3>
            <p>
              Follow company policies and legal requirements.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">
              Accountability
            </h3>
            <p>
              Take responsibility for ethical decisions.
            </p>
          </div>

        </div>

      </section>

      {/* Prohibited Activities */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Prohibited Activities
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>❌ Offering or accepting bribes.</li>

            <li>❌ Unofficial payments to gain business advantage.</li>

            <li>❌ Gifts intended to improperly influence decisions.</li>

            <li>❌ Concealing transactions or financial records.</li>

            <li>❌ Misuse of company resources for personal gain.</li>

          </ul>

        </div>

      </section>

      {/* Reporting */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Reporting Concerns
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="bg-slate-100 rounded-2xl p-5">
              Observe Concern
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Report
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Investigation
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Resolution
            </div>

          </div>

        </div>

      </section>

      {/* Employee Responsibilities */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-green-50 border-l-8 border-green-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Employee Responsibilities
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✓ Follow ethical business practices.</li>

            <li>✓ Report suspicious activities immediately.</li>

            <li>✓ Maintain accurate records.</li>

            <li>✓ Participate in compliance training.</li>

            <li>✓ Seek guidance when unsure.</li>

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
                Can I accept gifts from vendors?
              </h3>

              <p className="text-gray-700">
                Employees should follow company guidelines regarding gifts,
                hospitality and conflicts of interest.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                What should I do if I suspect unethical conduct?
              </h3>

              <p className="text-gray-700">
                Report concerns through the appropriate reporting channels
                without delay.
              </p>
            </div>

          </div>

        </div>

      </section>
<PolicyNavigation
  previous={{
    title: "POSH Policy",
    href: "/policies/posh",
  }}
/>
    </div>
  );
}