import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Conferences & Training',
  description: 'NCHIA hosts two major conferences annually featuring expert training, networking, and professional development for homicide investigators.',
};

const conferences = [
  {
    name: 'Spring Conference 2025',
    dates: 'March 15-17, 2025',
    location: 'Raleigh Convention Center, Raleigh, NC',
    description: 'Our flagship spring conference brings together investigators from across the state for three days of intensive training, case presentations, and networking.',
    href: '/conferences/spring',
    status: 'Registration Open',
  },
  {
    name: 'Fall Conference 2025',
    dates: 'October 8-10, 2025',
    location: 'Raleigh Convention Center, Raleigh, NC',
    description: 'The fall conference focuses on emerging trends in homicide investigation, new forensic technologies, and advanced investigative techniques.',
    href: '/conferences/fall',
    status: 'Coming Soon',
  },
];

const trainingTopics = [
  'Crime Scene Management',
  'Interview and Interrogation Techniques',
  'Digital Evidence Collection',
  'Cold Case Investigation',
  'Forensic Pathology Updates',
  'Legal Updates and Case Law',
  'Victim Family Communication',
  'Media Relations',
];

export default function ConferencesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E8C] via-[#3B4FAD] to-[#1A2566] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Conferences & Training</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Premier training opportunities for law enforcement professionals dedicated to homicide investigation excellence.
          </p>
        </div>
      </section>

      {/* Conferences Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Upcoming Conferences</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {conferences.map((conference, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#2D3E8C] text-white p-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    conference.status === 'Registration Open'
                      ? 'bg-green-500'
                      : 'bg-gray-500'
                  }`}>
                    {conference.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    {conference.name}
                  </h3>
                  <p className="text-[#2D3E8C] font-medium mb-1">{conference.dates}</p>
                  <p className="text-[#6B7280] mb-4">{conference.location}</p>
                  <p className="text-[#6B7280] mb-6">{conference.description}</p>
                  <Link
                    href={conference.href}
                    className="btn-primary inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Topics */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 text-center">
            Training Topics
          </h2>
          <p className="text-lg text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Our conferences feature nationally recognized experts covering a wide range of topics relevant to modern homicide investigation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trainingTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md flex items-center"
              >
                <svg
                  className="w-5 h-5 text-[#2D3E8C] mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#1A1A1A]">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Registration Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Registration Fees</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex justify-between">
                    <span>NCHIA Members</span>
                    <span className="font-semibold text-[#1A1A1A]">$275</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Non-Members</span>
                    <span className="font-semibold text-[#1A1A1A]">$325</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Late Registration (after deadline)</span>
                    <span className="font-semibold text-[#1A1A1A]">+$50</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">What&apos;s Included</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All training sessions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Conference materials
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Networking events
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vendor exhibition access
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Training credit certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Past Conferences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.gallery.map((src, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={src}
                  alt={`Past conference photo ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B7280] mt-6">
            Highlights from previous NCHIA conferences
          </p>
        </div>
      </section>
    </>
  );
}
