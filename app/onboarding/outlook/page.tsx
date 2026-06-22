import OnboardingNav from "@/components/OnboardingNav";
import ProgressTracker from "@/components/ProgressTracker";
export default function OutlookPage() {
  return (
    <>
     

      <main className="bg-slate-50 min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-6xl font-bold">
              Outlook & Microsoft Teams
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Learn how to communicate, collaborate and stay connected with your team.
            </p>

          </div>

        </section>
<OnboardingNav />
<ProgressTracker />
        {/* Overview */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-5xl mb-4">📧</div>

              <h2 className="text-3xl font-bold mb-4">
                Outlook
              </h2>

              <p className="text-gray-700">
                Outlook is Sandhata's official communication platform used
                for emails, meeting invitations, approvals, announcements
                and calendar management.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-5xl mb-4">💬</div>

              <h2 className="text-3xl font-bold mb-4">
                Microsoft Teams
              </h2>

              <p className="text-gray-700">
                Teams is used for instant messaging, virtual meetings,
                team collaboration, channels and document sharing.
              </p>
            </div>

          </div>

        </section>

        {/* Email vs Teams */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Email vs Teams Chat
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                📧 Use Email When
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Communicating formally</li>
                <li>Sending approvals</li>
                <li>Sharing official updates</li>
                <li>Contacting clients</li>
                <li>Keeping documented records</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                💬 Use Teams When
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Asking quick questions</li>
                <li>Team discussions</li>
                <li>Instant collaboration</li>
                <li>Joining meetings</li>
                <li>Sharing files quickly</li>
              </ul>
            </div>

          </div>

        </section>

        {/* Teams Features */}
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Microsoft Teams Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold">Chat</h3>
              <p className="mt-2 text-gray-600">
                One-to-one and group conversations.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold">Meetings</h3>
              <p className="mt-2 text-gray-600">
                Audio and video conferencing.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold">Channels</h3>
              <p className="mt-2 text-gray-600">
                Topic-based team collaboration.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="text-4xl mb-3">📁</div>
              <h3 className="font-bold">Files</h3>
              <p className="mt-2 text-gray-600">
                Secure document sharing.
              </p>
            </div>

          </div>

        </section>

        {/* Calendar */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Calendar & Meeting Management
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-100 rounded-2xl p-5">
                📅 Accept or decline meeting invitations promptly.
              </div>

              <div className="bg-slate-100 rounded-2xl p-5">
                ⏰ Join meetings on time.
              </div>

              <div className="bg-slate-100 rounded-2xl p-5">
                🎥 Use video when appropriate.
              </div>

              <div className="bg-slate-100 rounded-2xl p-5">
                📝 Keep your calendar updated.
              </div>

            </div>

          </div>

        </section>

        {/* Best Practices */}
        <section className="max-w-6xl mx-auto px-6 pb-20">

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8">
              Communication Best Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <ul className="space-y-3">
                  <li>✓ Maintain professional communication</li>
                  <li>✓ Use clear subject lines</li>
                  <li>✓ Respond in a timely manner</li>
                  <li>✓ Keep discussions respectful</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li>✓ Use channels appropriately</li>
                  <li>✓ Share files securely</li>
                  <li>✓ Keep meetings productive</li>
                  <li>✓ Respect availability status</li>
                </ul>
              </div>

            </div>

          </div>

        </section>

      </main>
    
    </>
  );
}