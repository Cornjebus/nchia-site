import Link from 'next/link';
import Hero from '@/components/Hero';
import ConferenceBanner from '@/components/ConferenceBanner';
import ValueCard from '@/components/ValueCard';

const valueProps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Expert Training',
    description: 'Learn from nationally recognized homicide investigators and forensic experts at our bi-annual conferences.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Professional Network',
    description: 'Connect with investigators from agencies across North Carolina and build lasting professional relationships.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Latest Techniques',
    description: 'Stay current on investigative methods, technology advancements, and legal updates in homicide investigation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Career Development',
    description: 'Earn training credits and advance your investigative career through professional development opportunities.',
  },
];

const stats = [
  { value: '40+', label: 'Years Serving NC' },
  { value: '500+', label: 'Members Statewide' },
  { value: '2', label: 'Conferences Annually' },
];

export default function Home() {
  return (
    <>
      <Hero />

      <ConferenceBanner
        name="Spring Conference 2026"
        dates="April 19-24, 2026"
        location="Harrah's Cherokee Resort/Casino, Cherokee, NC"
        href="/conferences/spring"
      />

      {/* Why Attend Section */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              Why Attend NCHIA Conferences?
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Join hundreds of law enforcement professionals dedicated to excellence in homicide investigation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <ValueCard
                key={index}
                icon={prop.icon}
                title={prop.title}
                description={prop.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2D3E8C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-5xl lg:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendors & Sponsors Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F7FA] rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Become a Vendor or Sponsor
                </h2>
                <p className="text-lg text-[#6B7280] mb-6">
                  Connect directly with North Carolina&apos;s homicide investigators. Our conferences provide unparalleled access to law enforcement decision-makers from agencies across the state.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    200+ investigators per conference
                  </li>
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Decision-makers from agencies statewide
                  </li>
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multiple sponsorship tiers available
                  </li>
                </ul>
                <Link
                  href="/vendors"
                  className="btn-primary inline-block"
                >
                  View Sponsorship Options
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                  Who Attends?
                </h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2D3E8C] rounded-full mr-3"></span>
                    Homicide detectives and investigators
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2D3E8C] rounded-full mr-3"></span>
                    Crime scene technicians
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2D3E8C] rounded-full mr-3"></span>
                    Forensic specialists
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2D3E8C] rounded-full mr-3"></span>
                    District attorneys and prosecutors
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2D3E8C] rounded-full mr-3"></span>
                    Agency command staff
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A2566]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join NCHIA?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Become a member today and gain access to premier training, networking, and professional development opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-white text-[#1A2566] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Now - $50/year
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#1A2566] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
