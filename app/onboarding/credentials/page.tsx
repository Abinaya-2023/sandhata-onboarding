import OnboardingNav from "@/components/OnboardingNav";
import ProgressTracker from "@/components/ProgressTracker";

export default function CredentialsPage() {
  return (
    <>
      
      <main className="bg-slate-50 min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-6xl font-bold">
              Credentials & Access
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Your first step at Sandhata. Learn how to access company systems,
              secure your account and start collaborating.
            </p>

          </div>

        </section>
<OnboardingNav />
<ProgressTracker />
        {/* Quick Start */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Quick Start Checklist
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div>☑ Receive company credentials</div>
              <div>☑ Login to Outlook</div>
              <div>☑ Change temporary password</div>
              <div>☑ Login to Microsoft Teams</div>
              <div>☑ Verify account access</div>
              <div>☑ Contact IT if required</div>

            </div>

          </div>

        </section>

        {/* What You Receive */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-bold text-center mb-12">
            What You Will Receive
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-5xl mb-4">📧</div>

              <h3 className="text-2xl font-bold mb-4">
                Company Email ID
              </h3>

              <p className="text-gray-700">
                Your official Sandhata email address used for communication,
                meetings, approvals, notifications and collaboration.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-5xl mb-4">🔑</div>

              <h3 className="text-2xl font-bold mb-4">
                Temporary Password
              </h3>

              <p className="text-gray-700">
                A temporary password issued during onboarding that must be
                changed during your first login.
              </p>
            </div>

          </div>

        </section>

        {/* First Login */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              First Login Process
            </h2>

            <div className="space-y-6">

              <div className="bg-slate-100 rounded-2xl p-6">
                <h3 className="font-bold mb-2">
                  Step 1
                </h3>

                <p>
                  Open Outlook and enter your company email address.
                </p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6">
                <h3 className="font-bold mb-2">
                  Step 2
                </h3>

                <p>
                  Enter the temporary password shared during onboarding.
                </p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6">
                <h3 className="font-bold mb-2">
                  Step 3
                </h3>

                <p>
                  Create a new secure password and save it safely.
                </p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6">
                <h3 className="font-bold mb-2">
                  Step 4
                </h3>

                <p>
                  Verify Outlook and Teams access.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Password Guidelines */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Password Best Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="font-bold mb-3">
                  Recommended
                </h3>

                <ul className="list-disc ml-5 space-y-2">
                  <li>Use a strong unique password</li>
                  <li>Include letters, numbers and symbols</li>
                  <li>Store passwords securely</li>
                  <li>Update passwords when required</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="font-bold mb-3">
                  Avoid
                </h3>

                <ul className="list-disc ml-5 space-y-2">
                  <li>Sharing passwords</li>
                  <li>Writing passwords openly</li>
                  <li>Using simple personal information</li>
                  <li>Reusing weak passwords</li>
                </ul>
              </div>

            </div>

          </div>

        </section>

        {/* Common Issues */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Common Login Issues
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-100 rounded-2xl p-6">
                🔒 Incorrect Password
              </div>

              <div className="bg-slate-100 rounded-2xl p-6">
                ⛔ Account Locked
              </div>

              <div className="bg-slate-100 rounded-2xl p-6">
                📧 Email Not Recognized
              </div>

              <div className="bg-slate-100 rounded-2xl p-6">
                💬 Teams Login Failure
              </div>

            </div>

          </div>

        </section>

        {/* Help */}
        <section className="max-w-6xl mx-auto px-6 pb-20">

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-bold mb-4">
              Need Help?
            </h2>

            <p className="text-lg text-blue-100">
              Contact the IT Support team if you experience issues with
              login, password reset or account access.
            </p>

          </div>

        </section>

      </main>
      
    </>
  );
}