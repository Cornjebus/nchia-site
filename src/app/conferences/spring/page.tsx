import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spring Conference 2025',
  description: 'Register for the NCHIA Spring Conference 2025 - March 15-17 at the Raleigh Convention Center. Three days of expert training for homicide investigators.',
};

const agenda = [
  {
    day: 'Day 1 - March 15',
    events: [
      { time: '8:00 AM', title: 'Registration & Continental Breakfast' },
      { time: '9:00 AM', title: 'Opening Ceremony & Welcome' },
      { time: '10:00 AM', title: 'Keynote: Advances in DNA Evidence' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Workshop: Digital Evidence Collection' },
      { time: '3:30 PM', title: 'Case Study Presentations' },
      { time: '5:00 PM', title: 'Vendor Reception' },
    ],
  },
  {
    day: 'Day 2 - March 16',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Interview & Interrogation Techniques' },
      { time: '11:00 AM', title: 'Cold Case Investigation Strategies' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Forensic Pathology Updates' },
      { time: '3:30 PM', title: 'Legal Updates & Case Law Review' },
      { time: '5:00 PM', title: 'Awards Dinner' },
    ],
  },
  {
    day: 'Day 3 - March 17',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Victim Family Communication' },
      { time: '10:30 AM', title: 'Media Relations Best Practices' },
      { time: '12:00 PM', title: 'Closing Remarks & Certificate Distribution' },
    ],
  },
];

export default function SpringConferencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E8C] via-[#3B4FAD] to-[#1A2566] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-green-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Registration Open
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Spring Conference 2025</h1>
          <p className="text-xl text-gray-200 mb-2">March 15-17, 2025</p>
          <p className="text-lg text-gray-300 mb-8">Raleigh Convention Center, Raleigh, NC</p>
          <a
            href="https://form.jotform.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2D3E8C] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Conference Overview</h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Join us for the NCHIA Spring Conference 2025, our flagship annual training event bringing together homicide investigators from across North Carolina. This three-day conference features nationally recognized experts, interactive workshops, case study presentations, and invaluable networking opportunities.
              </p>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Whether you&apos;re a seasoned investigator or new to homicide investigation, you&apos;ll find valuable content designed to enhance your skills and keep you current on the latest investigative techniques, technologies, and legal developments.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Featured Topics</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {[
                  'Advanced DNA Evidence Analysis',
                  'Digital & Social Media Evidence',
                  'Interview Techniques',
                  'Cold Case Strategies',
                  'Forensic Pathology',
                  'Legal Updates',
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

            {/* Registration Card */}
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
                <a
                  href="https://form.jotform.com/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mb-4"
                >
                  Register Now
                </a>
                <p className="text-sm text-[#6B7280] text-center">
                  Early bird deadline: March 1, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Conference Agenda</h2>
          <p className="text-lg text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Preliminary agenda subject to change. Full agenda with speaker details will be available closer to the conference.
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

      {/* Location */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Location & Accommodations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500">Map placeholder</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Raleigh Convention Center</h3>
              <address className="text-[#6B7280] not-italic mb-6">
                500 S Salisbury St<br />
                Raleigh, NC 27601
              </address>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Hotel Block</h3>
              <p className="text-[#6B7280] mb-4">
                A discounted room block is available at the Marriott Raleigh City Center. Use code &quot;NCHIA2025&quot; when booking to receive the group rate.
              </p>
              <p className="text-[#6B7280]">
                <strong>Group Rate:</strong> $149/night<br />
                <strong>Deadline:</strong> February 15, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A2566] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Register?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure your spot at the 2025 Spring Conference today. Early bird pricing available until March 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://form.jotform.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1A2566] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
            </a>
            <Link
              href="/membership"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#1A2566] transition-colors"
            >
              Become a Member First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
