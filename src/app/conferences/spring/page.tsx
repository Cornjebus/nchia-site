import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Spring Conference 2026 - Harrah\'s Cherokee',
  description: 'Register for the NCHIA Spring Conference 2026 - April 19-24 at Harrah\'s Cherokee Resort/Casino. Expert training for homicide investigators.',
};

const agenda = [
  {
    day: 'Day 1 - Sunday, April 19',
    events: [
      { time: '2:00 PM', title: 'Early Registration Opens' },
      { time: '5:00 PM', title: 'Welcome Reception' },
    ],
  },
  {
    day: 'Day 2 - Monday, April 20',
    events: [
      { time: '8:00 AM', title: 'Registration & Continental Breakfast' },
      { time: '9:00 AM', title: 'Opening Ceremony & Welcome' },
      { time: '10:00 AM', title: 'Keynote Presentation' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Training Sessions' },
      { time: '5:00 PM', title: 'Vendor Reception' },
    ],
  },
  {
    day: 'Day 3 - Tuesday, April 21',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Training Sessions' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Training Sessions' },
      { time: '5:00 PM', title: 'Evening Activities' },
    ],
  },
  {
    day: 'Day 4 - Wednesday, April 22',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Training Sessions' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Training Sessions' },
      { time: '6:00 PM', title: 'Awards Banquet' },
    ],
  },
  {
    day: 'Day 5 - Thursday, April 23',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Training Sessions' },
      { time: '12:00 PM', title: 'Lunch Break' },
      { time: '1:30 PM', title: 'Training Sessions' },
    ],
  },
  {
    day: 'Day 6 - Friday, April 24',
    events: [
      { time: '8:00 AM', title: 'Continental Breakfast' },
      { time: '9:00 AM', title: 'Final Training Sessions' },
      { time: '12:00 PM', title: 'Closing Remarks & Certificate Distribution' },
    ],
  },
];

export default function SpringConferencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D3E8C] via-[#3B4FAD] to-[#1A2566] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-green-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Registration Open
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Spring Conference 2026</h1>
          <p className="text-xl text-gray-200 mb-2">April 19-24, 2026</p>
          <p className="text-lg text-gray-300 mb-8">Harrah&apos;s Cherokee Resort/Casino, Cherokee, NC</p>
          <a
            href="https://form.jotform.com/naborsconsulting/nchia-conference-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2D3E8C] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Register Now - $300
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
                Join us for the NCHIA Spring Conference 2026 at Harrah&apos;s Cherokee Resort/Casino! This six-day training conference brings together homicide investigators from across North Carolina for expert training, case study presentations, and invaluable networking opportunities.
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
                    <span className="text-[#6B7280]">Conference Registration</span>
                    <span className="font-semibold text-[#1A1A1A]">$300</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-[#6B7280]">Dates</span>
                    <span className="font-semibold text-[#1A1A1A]">April 19-24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Location</span>
                    <span className="font-semibold text-[#1A1A1A]">Cherokee, NC</span>
                  </div>
                </div>
                <a
                  href="https://form.jotform.com/naborsconsulting/nchia-conference-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mb-4"
                >
                  Register Now
                </a>
                <a
                  href="https://nchia.org/wp-content/uploads/2024/12/Spring-2026-Agenda.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D3E8C] hover:underline text-sm text-center block"
                >
                  Download Full Agenda (PDF)
                </a>
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
            Preliminary agenda subject to change. Download the full agenda PDF for complete details.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agenda.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#2D3E8C] text-white px-4 py-3">
                  <h3 className="text-lg font-semibold">{day.day}</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start text-sm">
                        <span className="text-[#2D3E8C] font-medium w-20 flex-shrink-0">
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
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="Resort hotel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Harrah&apos;s Cherokee Resort/Casino</h3>
              <address className="text-[#6B7280] not-italic mb-6">
                777 Casino Drive<br />
                Cherokee, NC 28719
              </address>

              <div className="bg-[#F5F7FA] rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-[#1A1A1A] mb-3">Hotel Reservations</h4>
                <p className="text-[#6B7280] mb-4">
                  Book your room directly with Harrah&apos;s Cherokee to receive the NCHIA group rate.
                </p>
                <div className="space-y-2">
                  <p className="text-[#1A1A1A]">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:828-497-7777" className="text-[#2D3E8C] hover:underline">
                      (828) 497-7777
                    </a>
                  </p>
                  <p className="text-[#1A1A1A]">
                    <strong>Group Code:</strong> NCHIA 2026
                  </p>
                </div>
              </div>

              <a
                href="https://www.caesars.com/harrahs-cherokee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#2D3E8C] hover:underline font-medium"
              >
                Visit Harrah&apos;s Cherokee Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A2566] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Register?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure your spot at the Spring Conference 2026 at Harrah&apos;s Cherokee Resort/Casino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://form.jotform.com/naborsconsulting/nchia-conference-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1A2566] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now - $300
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
