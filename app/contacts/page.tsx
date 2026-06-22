import {
  Users,
  ClipboardList,
  BadgeDollarSign,
  Laptop,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function ContactsPage() {
  const contacts = [
    {
      department: "People / HR",
      icon: <Users size={24} className="text-blue-700" />,
      purpose: "HR support, onboarding, policies and employee assistance",
      primary:
        "selcia.arthursam@sandhata.com, hemalatha.santhanagopi@sandhata.com",
      escalation: "suresh.kona@sandhata.com",
    },
    {
      department: "PMO & Timesheets",
      icon: <ClipboardList size={24} className="text-blue-700" />,
      purpose:
        "Timesheets, project reporting, PMO support and coordination",
      primary:
        "rajeshwari.subramanian@sandhata.com, malathi.bharathan@sandhata.com",
      escalation: "bharat.muppidi@sandhata.com",
    },
    {
      department: "Finance & Accounts",
      icon: <BadgeDollarSign size={24} className="text-blue-700" />,
      purpose:
        "Payroll, reimbursements, invoices and finance queries",
      primary:
        "nishitha.deepanrai@sandhata.com, swagatika.puhan@sandhata.com, shyamsunder.kandukuri@sandhata.com",
      escalation: "bharat.muppidi@sandhata.com",
    },
    {
      department: "IT Support",
      icon: <Laptop size={24} className="text-blue-700" />,
      purpose:
        "Laptop, Outlook, Teams, VPN, passwords and technical support",
      primary:
        "selin.amalraj@sandhata.com, vinothkumar.muthu@sandhata.com, praveen.chandran@sandhata.com, ponmurugan.antonyraj@sandhata.com, dhayanithi.mohan@sandhata.com, lakshmikanth.panthangi@sandhata.com",
      escalation: "boopathy.raja@sandhata.com",
    },
    {
      department: "Admin Support",
      icon: <Building2 size={24} className="text-blue-700" />,
      purpose:
        "Office administration, facilities and logistics support",
      primary:
        "karthikeyan.mahendran@sandhata.com, suryaprakash.alluri@sandhata.com",
      escalation: "suresh.kona@sandhata.com",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Contact Directory
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
            Find the right support team and escalation contact for quick assistance.
          </p>

        </div>

      </section>

      {/* Directory */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-blue-900 text-white">

                <tr>
                  <th className="text-left px-6 py-5">
                    Department
                  </th>

                  <th className="text-left px-6 py-5">
                    Purpose
                  </th>

                  <th className="text-left px-6 py-5">
                    Primary Contacts
                  </th>

                  <th className="text-left px-6 py-5">
                    Escalation Contact
                  </th>
                </tr>

              </thead>

              <tbody>

                {contacts.map((contact, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    <td className="px-6 py-6">

                      <div className="flex items-center gap-6 font-semibold">
                        {contact.icon}
                        {contact.department}
                      </div>

                    </td>

                    <td className="px-6 py-6 text-gray-600">
                      {contact.purpose}
                    </td>

                    <td className="px-6 py-6 text-blue-700 break-words">
                      {contact.primary}
                    </td>

                    <td className="px-6 py-6 text-red-700 font-medium break-words">
                      {contact.escalation}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* Guidelines */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Communication Guidelines
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" />
              <span>Contact the appropriate department first.</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" />
              <span>Include relevant details, screenshots and employee information.</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" />
              <span>Escalate only when the issue remains unresolved.</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" />
              <span>Use official Sandhata communication channels.</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" />
              <span>Maintain professional communication at all times.</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}