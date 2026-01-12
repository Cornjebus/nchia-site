import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Join NCHIA for $50/year and access discounted conference registration, member directory, training announcements, and networking opportunities.',
};

const memberBenefits = [
  {
    title: 'Discounted Conference Registration',
    description: 'Save $50 on registration for each of our bi-annual conferences. Your membership pays for itself with just one conference attendance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Member Directory Access',
    description: 'Connect with fellow homicide investigators across North Carolina through our exclusive member directory.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Training Announcements',
    description: 'Be the first to know about upcoming training opportunities, conferences, and professional development resources.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'Networking Opportunities',
    description: 'Build lasting professional relationships with investigators from agencies of all sizes across the state.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Professional Recognition',
    description: 'Join a respected community of professionals dedicated to excellence in homicide investigation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Voting Rights',
    description: 'Have a voice in the direction of NCHIA through voting on organizational matters at our annual business meeting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const eligibility = [
  'Active law enforcement officers (local, state, federal)',
  'Retired law enforcement officers',
  'District attorneys and prosecutors',
  'Forensic professionals',
  'Medical examiners and coroners',
  'Allied criminal justice professionals',
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E8C] via-[#3B4FAD] to-[#1A2566] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Join a community of professionals dedicated to excellence in homicide investigation.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-[#2D3E8C] text-white py-8 px-6">
                <h2 className="text-2xl font-bold mb-2">Annual Membership</h2>
                <div className="text-5xl font-bold">$50</div>
                <p className="text-gray-200 mt-2">per year</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    $50 off conference registration
                  </li>
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Member directory access
                  </li>
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Training announcements
                  </li>
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Networking opportunities
                  </li>
                  <li className="flex items-center text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Voting rights
                  </li>
                </ul>
                <a
                  href="https://form.jotform.com/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Join NCHIA Today
                </a>
                <p className="text-sm text-[#6B7280] mt-4">
                  Membership renews annually on the anniversary of your join date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 text-center">Member Benefits</h2>
          <p className="text-lg text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Your membership supports our mission and provides valuable benefits throughout the year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-[#2D3E8C] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#6B7280]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Eligibility</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-[#6B7280] mb-6">
                Membership in NCHIA is open to professionals in the criminal justice field who are dedicated to advancing homicide investigation excellence:
              </p>
              <ul className="space-y-3">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#6B7280] mt-6">
                All membership applications are subject to verification. Supporting documentation may be required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                When does my membership expire?
              </h3>
              <p className="text-[#6B7280]">
                Memberships are valid for one year from the date of joining and renew annually.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                Can I join at a conference?
              </h3>
              <p className="text-[#6B7280]">
                Yes! You can join NCHIA at any of our conferences and immediately receive the member discount on registration.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                Is membership tax-deductible?
              </h3>
              <p className="text-[#6B7280]">
                NCHIA is a 501(c)(3) nonprofit organization. Membership dues may be tax-deductible to the extent allowed by law. Please consult your tax advisor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A2566] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Become a member today and start enjoying all the benefits NCHIA has to offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://form.jotform.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1A2566] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Join NCHIA - $50/year
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#1A2566] transition-colors"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
