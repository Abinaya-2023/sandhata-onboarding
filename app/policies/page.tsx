import Link from "next/link";
import {
  Plane,
  Briefcase,
  TrendingUp,
  Target,
  ShieldCheck,
  Scale,
  Home,
} from "lucide-react";

export default function PoliciesPage() {
  const policies = [
    {
      title: "Leave Policy",
      icon: <Plane size={48} className="text-blue-700" />,
      description:
        "Understand leave types, approvals, leave balances and employee responsibilities.",
      link: "/policies/leave-policy",
    },
    {
      title: "Professional Appearance",
      icon: <Briefcase size={48} className="text-blue-700" />,
      description:
        "Guidelines on dress code, grooming and workplace professionalism.",
      link: "/policies/professional-appearance",
    },
    {
      title: "Career Framework",
      icon: <TrendingUp size={48} className="text-blue-700" />,
      description:
        "Learn about career growth, competency development and progression paths.",
      link: "/policies/career-framework",
    },
    {
      title: "PMS 2026",
      icon: <Target size={48} className="text-blue-700" />,
      description:
        "Performance Management System, goal setting and performance reviews.",
      link: "/policies/pms-2026",
    },
    {
      title: "POSH Policy",
      icon: <ShieldCheck size={48} className="text-blue-700" />,
      description:
        "Creating a safe, inclusive and respectful workplace for everyone.",
      link: "/policies/posh",
    },
    {
      title: "Anti-Bribery & Anti-Corruption",
      icon: <Scale size={48} className="text-blue-700" />,
      description:
        "Understand ethical business conduct and compliance requirements.",
      link: "/policies/anti-bribery",
    },
    {
      title: "Work From Home Policy",
      icon: <Home size={48} className="text-blue-700" />,
      description:
        "Remote working guidelines, expectations and responsibilities.",
      link: "/policies/work-from-home",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Policy Hub
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Explore company policies, employee guidelines and workplace
            standards that help create a productive, ethical and inclusive
            work environment.
          </p>

        </div>

      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-4">
            Why Policies Matter
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Policies provide clarity on employee rights, responsibilities,
            workplace expectations and organizational standards. They ensure
            fairness, consistency and compliance across the organization.
          </p>

        </div>

      </section>

      {/* Policy Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Available Policies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {policies.map((policy) => (
            <Link
              href={policy.link}
              key={policy.title}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="mb-8">
                {policy.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {policy.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {policy.description}
              </p>

              <span className="text-blue-700 font-semibold">
                Read Policy →
              </span>

            </Link>
          ))}

        </div>

      </section>

    </div>
  );
}