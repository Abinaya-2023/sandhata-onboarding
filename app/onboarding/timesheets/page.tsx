import OnboardingNav from "@/components/OnboardingNav";
import ProgressTracker from "@/components/ProgressTracker";
export default function TimesheetsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Timesheet Management
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Learn how to record your work, submit time logs and ensure accurate project reporting.
          </p>

        </div>

      </section>
      <OnboardingNav />
      <ProgressTracker />

      {/* Why Timesheets */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Why Timesheets Matter
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Timesheets help Sandhata understand how project effort is distributed,
            improve planning, manage client commitments and ensure accurate reporting.
            They are not used to monitor employees but to understand work allocation.
          </p>

        </div>

      </section>

      {/* Key Terms */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Understanding Timesheet Terms
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              📁 Project Name
            </h3>

            <p>
              The project or client assignment you are currently working on.
            </p>

            <div className="mt-4 bg-slate-100 p-4 rounded-xl">
              Example: Digital Transformation Project
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              💼 Job Name
            </h3>

            <p>
              The category of work being performed.
            </p>

            <div className="mt-4 bg-slate-100 p-4 rounded-xl">
              Example: Business Analysis, Testing, Development
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              📝 Work Item
            </h3>

            <p>
              The specific activity completed during the day.
            </p>

            <div className="mt-4 bg-slate-100 p-4 rounded-xl">
              Example: Requirement Gathering Meeting
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              ⏱ Hours Logged
            </h3>

            <p>
              Actual time spent performing the activity.
            </p>

            <div className="mt-4 bg-slate-100 p-4 rounded-xl">
              Example: 8 Hours
            </div>
          </div>

        </div>

      </section>

      {/* Process Flow */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-10">
            Timesheet Submission Process
          </h2>

          <div className="grid md:grid-cols-5 gap-4 text-center">

            <div className="bg-slate-100 p-5 rounded-2xl">
              Login
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              Open Time Logs
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              Enter Work Details
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              Save Entry
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              Submit
            </div>

          </div>

        </div>

      </section>

      {/* Daily vs Weekly */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Daily vs Weekly Logging
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              📅 Daily Logging
            </h3>

            <p>
              Record work activities every day to maintain accuracy and avoid missing information.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              📊 Weekly Review
            </h3>

            <p>
              Verify all logged entries before submitting for approval.
            </p>
          </div>

        </div>

      </section>

      {/* Approval Workflow */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-8">
            Approval Workflow
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-white/10 p-6 rounded-2xl">
              Employee
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              Reporting Manager
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              Approved Record
            </div>

          </div>

          <p className="mt-8 text-blue-100">
            Ensure timesheets are submitted on time to avoid approval delays and reporting issues.
          </p>

        </div>

      </section>

    </div>
  );
}