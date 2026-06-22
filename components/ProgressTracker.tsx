export default function ProgressTracker() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <div className="flex justify-between mb-3">

          <h3 className="font-bold">
            Onboarding Journey
          </h3>

          <span>
            100% Complete
          </span>

        </div>

        <div className="w-full bg-slate-200 rounded-full h-4">

          <div className="bg-blue-700 h-4 rounded-full w-full"></div>

        </div>

      </div>

    </div>
  );
}