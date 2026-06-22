import {
  CalendarDays,
  PartyPopper,
  Trophy,
  HeartHandshake,
  Users,
  Info,
} from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      date: "Every Last Friday",
      title: "HR Feedback Connect",
      status: "Monthly",
      icon: <Users size={26} className="text-blue-700" />,
      description:
        "Employee feedback and engagement connect conducted every last Friday of the month.",
    },
    {
      date: "Completed",
      title: "Blood Donation Day",
      status: "Completed",
      icon: <HeartHandshake size={26} className="text-blue-700" />,
      description:
        "Annual social responsibility and wellness initiative.",
    },
    {
      date: "Date TBD",
      title: "Sandhata Sports League",
      status: "TBD",
      icon: <Trophy size={26} className="text-blue-700" />,
      description:
        "Company sports and team-building event. Final event date is yet to be decided.",
    },
    {
      date: "19 Jun 2026",
      title: "Yoga Day",
      status: "Upcoming",
      icon: <CalendarDays size={26} className="text-blue-700" />,
      description:
        "Wellness-focused celebration for International Yoga Day.",
    },
    {
      date: "26 Aug 2026",
      title: "Onam Celebration",
      status: "Upcoming",
      icon: <PartyPopper size={26} className="text-blue-700" />,
      description:
        "Festive Onam celebration across teams.",
    },
    {
      date: "19 Oct 2026",
      title: "Sandhata Anniversary",
      status: "Upcoming",
      icon: <PartyPopper size={26} className="text-blue-700" />,
      description:
        "Annual celebration of Sandhata's anniversary.",
    },
    {
      date: "03 Nov 2026",
      title: "Diwali Celebration",
      status: "Upcoming",
      icon: <PartyPopper size={26} className="text-blue-700" />,
      description:
        "Festival of Lights celebration.",
    },
    {
      date: "09 Dec 2026",
      title: "Christmas Celebration - India",
      status: "Upcoming",
      icon: <PartyPopper size={26} className="text-blue-700" />,
      description:
        "India office Christmas celebration.",
    },
    {
      date: "11 Dec 2026",
      title: "Christmas Celebration - UK",
      status: "Upcoming",
      icon: <PartyPopper size={26} className="text-blue-700" />,
      description:
        "UK office Christmas celebration.",
    },
    {
      date: "12 Dec 2026",
      title: "Team Outing",
      status: "Upcoming",
      icon: <Users size={26} className="text-blue-700" />,
      description:
        "Year-end team outing and bonding activity.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Events & Engagement
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Stay connected through celebrations, wellness initiatives,
            learning programs, CSR activities and employee engagement events.
          </p>

        </div>
      </section>

      {/* Events */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Events Calendar
        </h2>

        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 mb-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >

            <div className="flex justify-between items-center mb-5">

              <p className="text-blue-700 font-semibold">
                {event.date}
              </p>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold
                ${
                  event.status === "Upcoming"
                    ? "bg-green-100 text-green-700"
                    : event.status === "Completed"
                    ? "bg-blue-100 text-blue-700"
                    : event.status === "Monthly"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {event.status}
              </span>

            </div>

            <div className="flex items-center gap-4 mb-4">

              {event.icon}

              <h3 className="text-2xl font-bold">
                {event.title}
              </h3>

            </div>

            <p className="text-gray-600 leading-relaxed">
              {event.description}
            </p>

          </div>
        ))}

      </section>

      {/* Important Note */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-5">

            <Info
              size={28}
              className="text-blue-700"
            />

            <h2 className="text-3xl font-bold">
              Important Note
            </h2>

          </div>

          <p className="text-gray-700 leading-relaxed">
            Event dates may change based on business requirements,
            venue availability and organizational planning.
            Please refer to official company communications for the latest
            event updates.
          </p>

        </div>

      </section>

    </div>
  );
}