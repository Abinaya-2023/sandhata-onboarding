import Link from "next/link";
import {
  KeyRound,
  Mail,
  ClipboardList,
  Clock3,
  Plane,
  MapPin,
} from "lucide-react";

export default function OnboardingPage() {
  const onboardingModules = [
    {
      title: "Credentials & Access",
      icon: <KeyRound size={42} className="text-blue-700" />,
      description:
        "Get started with company credentials, password setup and account access.",
      link: "/onboarding/credentials",
    },
    {
      title: "Outlook & Teams",
      icon: <Mail size={42} className="text-blue-700" />,
      description:
        "Learn email communication, Teams collaboration and meetings.",
      link: "/onboarding/outlook",
    },
    {
      title: "Attendance",
      icon: <ClipboardList size={42} className="text-blue-700" />,
      description:
        "Understand attendance tracking, check-in and check-out process.",
      link: "/onboarding/attendance",
    },
    {
      title: "Timesheets",
      icon: <Clock3 size={42} className="text-blue-700" />,
      description:
        "Submit project hours and understand approval workflows.",
      link: "/onboarding/timesheets",
    },
    {
      title: "Leave Application",
      icon: <Plane size={42} className="text-blue-700" />,
      description:
        "Explore leave types, eligibility and approval process.",
      link: "/onboarding/leave",
    },
    {
      title: "SaAT Status Update",
      icon: <MapPin size={42} className="text-blue-700" />,
      description:
        "Update work mode and maintain business continuity records.",
      link: "/onboarding/saat",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Employee Onboarding Guide
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to get started at Sandhata.
            Follow the onboarding journey and learn the tools,
            processes and policies that will help you succeed.
          </p>

        </div>

      </section>

      {/* Modules */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Your Onboarding Journey
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {onboardingModules.map((module) => (
            <Link
              href={module.link}
              key={module.title}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-8">
                {module.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {module.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {module.description}
              </p>

              <span className="text-blue-700 font-semibold">
                Explore →
              </span>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}