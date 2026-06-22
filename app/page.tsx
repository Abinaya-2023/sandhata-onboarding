import Link from "next/link";
import {
  Mail,
  ClipboardList,
  Clock3,
  Plane,
  BookOpen,
  Phone,
  CheckCircle2,
  Circle,
} from "lucide-react";

export default function Home() {
  const completedSteps = 2;
  const totalSteps = 6;
  const progress = (completedSteps / totalSteps) * 100;

  const quickAccess = [
    {
      title: "Email Setup",
      icon: <Mail size={32} className="text-blue-700" />,
      description: "Configure Outlook and Microsoft Teams access.",
      link: "/onboarding/outlook",
    },
    {
      title: "Attendance",
      icon: <ClipboardList size={32} className="text-blue-700" />,
      description: "Learn attendance tracking and work hours.",
      link: "/onboarding/attendance",
    },
    {
      title: "Timesheets",
      icon: <Clock3 size={32} className="text-blue-700" />,
      description: "Submit project hours and timesheets.",
      link: "/onboarding/timesheets",
    },
    {
      title: "Leave",
      icon: <Plane size={32} className="text-blue-700" />,
      description: "Apply and track leave requests.",
      link: "/onboarding/leave",
    },
    {
      title: "Policies",
      icon: <BookOpen size={32} className="text-blue-700" />,
      description: "Review company policies and guidelines.",
      link: "/policies",
    },
    {
      title: "Contacts",
      icon: <Phone size={32} className="text-blue-700" />,
      description: "Reach HR, IT, Finance and Admin teams.",
      link: "/contacts",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-16 px-6">

        <h1 className="text-5xl font-bold">
          Sandhata Employee Onboarding Center
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Welcome to the team. Your one-stop destination for onboarding,
          culture, policies, events and support.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

  <Link
    href="/onboarding"
    className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
  >
    Get Started
  </Link>

  <Link
    href="https://www.sandhata.com/about-us"
    className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition"
  >
    About Sandhata
  </Link>

  <Link
    href="https://www.sandhata.com/our-team"
    className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition"
  >
    Our Leaders
  </Link>

</div>
      </section>

      {/* Progress Tracker */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-bold">
              Onboarding Progress
            </h2>

            <span className="text-blue-700 font-semibold">
              {Math.round(progress)}% Complete
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-8">

            <div
              className="bg-blue-700 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            />

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-green-600" size={22} />
              <span>Receive Credentials</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-green-600" size={22} />
              <span>Setup Outlook</span>
            </div>

            <div className="flex items-center gap-4">
              <Circle className="text-gray-400" size={22} />
              <span>Setup Teams</span>
            </div>

            <div className="flex items-center gap-4">
              <Circle className="text-gray-400" size={22} />
              <span>Mark Attendance</span>
            </div>

            <div className="flex items-center gap-4">
              <Circle className="text-gray-400" size={22} />
              <span>Submit Timesheet</span>
            </div>

            <div className="flex items-center gap-4">
              <Circle className="text-gray-400" size={22} />
              <span>Review Policies</span>
            </div>

          </div>

        </div>

      </section>

      {/* Quick Access */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-8">
          Quick Access
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {quickAccess.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}