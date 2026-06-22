import PolicyNavigation from "@/components/PolicyNavigation";
export default function POSHPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            POSH Policy
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Prevention of Sexual Harassment at Workplace.
            Building a safe, respectful and inclusive workplace for everyone.
          </p>

        </div>

      </section>

      {/* Overview */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            What is POSH?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            POSH stands for Prevention of Sexual Harassment at Workplace.
            The policy aims to ensure every employee can work in an environment
            of dignity, safety, equality and mutual respect.
          </p>

        </div>

      </section>

      {/* Examples */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Examples of Unacceptable Behaviour
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-8">
            Inappropriate comments or jokes
          </div>

          <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-8">
            Unwanted messages or communication
          </div>

          <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-8">
            Offensive gestures or behaviour
          </div>

          <div className="bg-red-50 border-l-8 border-red-500 rounded-3xl p-8">
            Unwelcome physical contact
          </div>

        </div>

      </section>

      {/* Reporting Process */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Reporting Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Incident
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Report
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Investigation
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            Resolution
          </div>

        </div>

      </section>

      {/* Employee Rights */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-green-50 border-l-8 border-green-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Employee Rights
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✓ Right to a safe workplace</li>

            <li>✓ Right to confidentiality</li>

            <li>✓ Right to fair investigation</li>

            <li>✓ Right to report concerns without retaliation</li>

            <li>✓ Right to dignity and respect</li>

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
                Can I report a concern confidentially?
              </h3>

              <p className="text-gray-700">
                Yes. Complaints are handled with appropriate confidentiality.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                What if I witness inappropriate behaviour?
              </h3>

              <p className="text-gray-700">
                Employees are encouraged to report concerns and support a respectful workplace.
              </p>
            </div>

          </div>

        </div>

      </section>
<PolicyNavigation
  previous={{
    title: "PMS 2026",
    href: "/policies/pms-2026",
  }}
  next={{
    title: "Anti-Bribery",
    href: "/policies/anti-bribery",
  }}
/>
    </div>
  );
}