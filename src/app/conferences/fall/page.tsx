import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fall Conference 2025',
  description: 'NCHIA Fall Conference 2025 - October 8-10 at the Raleigh Convention Center. Focus on emerging trends and advanced investigative techniques.',
};

const agenda = [
  {
    day: 'Day 1 - October 8',
    events: [
      { time: '8:00 AM', title: 'Registration & Continental Breakfast' },
      { time: '9:00 AM', title: 'Opening Ceremony & Welcome' },
      { time: '10:00 AM', title: 'Keynote: Emerging Trends in Homicide Investigation' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Workshop: AI and Technology in Investigations' },
      { time: '3:30 PM', title: 'Regional Case Study Presentations' },
      { time: '5:00 PM', title: 'Vendor Reception' },
    ],
  },
  {
    day: 'Day 2 - October 9',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Serial Case Investigation Strategies' },
      { time: '11:00 AM', title: 'Behavioral Analysis in Homicide Cases' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Advanced Forensic Techniques' },
      { time: '3:30 PM', title: 'Multi-Agency Collaboration' },
      { time: '5:00 PM', title: 'Awards Dinner' },
    ],
  },
  {
    day: 'Day 3 - October 10',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Officer Wellness & Mental Health' },
      { time: '10:30 AM', title: 'Annual Business Meeting' },
      { time: '12:00 PM', title: 'Closing Remarks & Certificate Distribution' },
    ],
  },
];

export default function FallConferencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E8C] via-[#3B4FAD] to-[#1A2566] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gray-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Coming Soon
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Fall Conference 2025</h1>
          <p className="text-xl text-gray-200 mb-2">October 8-10, 2025</p>
          <p className="text-lg text-gray-300 mb-8">Raleigh Convention Center, Raleigh, NC</p>
          <p className="text-lg text-gray-300 bg-white/10 rounded-lg p-4 inline-block">
            Registration opens Summer 2025
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Conference Overview</h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                The NCHIA Fall Conference focuses on emerging trends, advanced investigative techniques, and the latest developments in forensic science. This conference provides an opportunity to explore cutting-edge technologies and methodologies that are shaping the future of homicide investigation.
              </p>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Join colleagues from across North Carolina for three days of advanced training, including sessions on artificial intelligence applications, behavioral analysis, and multi-agency collaboration strategies.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Featured Topics</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {[
                  'AI & Technology in Investigations',
                  'Serial Case Investigation',
                  'Behavioral Analysis',
                  'Advanced Forensic Techniques',
                  'Multi-Agency Collaboration',
                  'Officer Wellness',
                ].map((topic, index) => (
                  <li key={index} className="flex items-center text-[#6B7280]">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-[#F5F7FA] rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Registration</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-[#6B7280]">NCHIA Members</span>
                    <span className="font-semibold text-[#1A1A1A]">$275</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-[#6B7280]">Non-Members</span>
                    <span className="font-semibold text-[#1A1A1A]">$325</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Late Registration</span>
                    <span className="font-semibold text-[#1A1A1A]">+$50</span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4 text-center mb-4">
                  <p className="text-[#6B7280]">Registration opens Summer 2025</p>
                </div>
                <Link
                  href="/membership"
                  className="btn-secondary w-full text-center block"
                >
                  Join NCHIA for Member Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Preview */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Preliminary Agenda</h2>
          <p className="text-lg text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Preliminary agenda subject to change. Full agenda with speaker details will be available when registration opens.
          </p>
          <div className="space-y-8">
            {agenda.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#2D3E8C] text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">{day.day}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start">
                        <span className="text-[#2D3E8C] font-medium w-24 flex-shrink-0">
                          {event.time}
                        </span>
                        <span className="text-[#1A1A1A]">{event.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Signup */}
      <section className="py-16 bg-[#1A2566] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Notified When Registration Opens</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our mailing list to be the first to know when Fall Conference registration opens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1A2566] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us to Join Mailing List
            </Link>
            <Link
              href="/conferences/spring"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#1A2566] transition-colors"
            >
              Register for Spring Conference
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
