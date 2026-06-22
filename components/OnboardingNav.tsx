import Link from "next/link";

export default function OnboardingNav() {
  const modules = [
    {
      name: "Credentials",
      href: "/onboarding/credentials",
    },
    {
      name: "Outlook",
      href: "/onboarding/outlook",
    },
    {
      name: "Attendance",
      href: "/onboarding/attendance",
    },
    {
      name: "Timesheets",
      href: "/onboarding/timesheets",
    },
    {
      name: "Leave",
      href: "/onboarding/leave",
    },
    {
      name: "SaAT",
      href: "/onboarding/saat",
    },
  ];

  return (
    <div className="bg-white shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-6">

        {modules.map((module) => (
          <Link
            key={module.name}
            href={module.href}
            className="px-4 py-2 rounded-full bg-slate-100 hover:bg-blue-100 transition"
          >
            {module.name}
          </Link>
        ))}

      </div>

    </div>
  );
}