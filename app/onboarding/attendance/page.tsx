import OnboardingNav from "@/components/OnboardingNav";
import ProgressTracker from "@/components/ProgressTracker";
export default function AttendancePage() {
  return (
    <>


      <main className="bg-slate-50 min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-6xl font-bold">
              Attendance Management
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Learn how attendance is recorded, tracked and used for payroll,
              compliance and workforce planning.
            </p>

          </div>

        </section>
<OnboardingNav />
<ProgressTracker />
        {/* Why Attendance Matters */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-6">
              Why Attendance Matters
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Attendance is more than simply marking your presence.
              It helps the organization maintain payroll accuracy,
              workforce planning, project allocation and compliance
              requirements.
            </p>

          </div>

        </section>

        {/* Key Attendance Terms */}
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Key Attendance Terms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                📍 Check-In
              </h3>

              <p>
                Marks the beginning of your workday.
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Example: Starting work at 9:00 AM.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                🚪 Check-Out
              </h3>

              <p>
                Marks the completion of your workday.
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Example: Finishing work at 6:00 PM.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                📊 Attendance Summary
              </h3>

              <p>
                A record of attendance, holidays, weekends and leave.
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Used for payroll and reporting.
              </p>
            </div>

          </div>

        </section>

        {/* Process Flow */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Attendance Process
            </h2>

            <div className="grid md:grid-cols-4 gap-4 text-center">

              <div className="bg-slate-100 p-5 rounded-2xl">
                Login
              </div>

              <div className="bg-slate-100 p-5 rounded-2xl">
                Check-In
              </div>

              <div className="bg-slate-100 p-5 rounded-2xl">
                Complete Workday
              </div>

              <div className="bg-slate-100 p-5 rounded-2xl">
                Check-Out
              </div>

            </div>

          </div>

        </section>

        {/* Common Scenarios */}
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Common Attendance Scenarios
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                ✅ Regular Office Day
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Check in at start of workday</li>
                <li>Work scheduled hours</li>
                <li>Check out before leaving</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🏠 Work From Home
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Follow approved work mode</li>
                <li>Maintain availability</li>
                <li>Update attendance appropriately</li>
              </ul>
            </div>

          </div>

        </section>

        {/* Common Mistakes */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Common Mistakes to Avoid
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-red-50 rounded-2xl p-5">
                ❌ Forgetting to check in
              </div>

              <div className="bg-red-50 rounded-2xl p-5">
                ❌ Forgetting to check out
              </div>

              <div className="bg-red-50 rounded-2xl p-5">
                ❌ Updating attendance late
              </div>

              <div className="bg-red-50 rounded-2xl p-5">
                ❌ Assuming attendance is automatic
              </div>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto px-6 pb-20">

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-bold">
                  What happens if I forget to check in?
                </h3>

                <p className="text-blue-100 mt-2">
                  Contact your reporting manager or HR team and follow the attendance correction process.
                </p>
              </div>

              <div>
                <h3 className="font-bold">
                  Why is attendance important?
                </h3>

                <p className="text-blue-100 mt-2">
                  Attendance data impacts payroll, workforce planning and compliance reporting.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
      
    </>
  );
}