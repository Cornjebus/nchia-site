import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SponsorTierTable from '@/components/SponsorTierTable';
import VendorTestimonials from '@/components/VendorTestimonials';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Vendors & Sponsors',
  description: 'Exhibit at NCHIA conferences and connect directly with North Carolina homicide investigators. View sponsorship tiers and vendor information.',
};

const attendeeDemographics = [
  'Homicide detectives and investigators',
  'Crime scene technicians',
  'Forensic specialists',
  'District attorneys and prosecutors',
  'Agency command staff',
  'Medical examiners',
];

const boothBenefits = [
  '8x10 booth space with table and chairs',
  'Exhibitor badge(s) based on tier',
  'Inclusion in conference program',
  'Access to attendee networking events',
  'Electric and WiFi access',
  'Conference bag insert opportunity',
];

export default function VendorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E8C] via-[#3B4FAD] to-[#1A2566] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Vendors & Sponsors</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Reach North Carolina&apos;s homicide investigators directly at our bi-annual conferences.
          </p>
        </div>
      </section>

      {/* Why Exhibit */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Why Exhibit at NCHIA?</h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                NCHIA conferences offer unparalleled access to law enforcement decision-makers from agencies across North Carolina. Our attendees are actively seeking solutions, training resources, and equipment to enhance their investigative capabilities.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '200+ investigators at each conference',
                  'Decision-makers from agencies statewide',
                  'Targeted law enforcement audience',
                  'High engagement environment',
                  'Two conferences annually (Spring & Fall)',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start text-[#1A1A1A]">
                    <svg className="w-6 h-6 text-[#2D3E8C] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F7FA] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Who Attends?</h3>
              <ul className="space-y-3">
                {attendeeDemographics.map((demo, index) => (
                  <li key={index} className="flex items-center text-[#6B7280]">
                    <span className="w-2 h-2 bg-[#2D3E8C] rounded-full mr-3"></span>
                    {demo}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-[#6B7280]">
                  Attendees represent local, state, and federal agencies from across North Carolina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 text-center">Sponsorship Tiers</h2>
          <p className="text-lg text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Choose the sponsorship level that best fits your marketing goals and budget.
          </p>
          <SponsorTierTable />
        </div>
      </section>

      {/* Booth Benefits */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Booth Benefits</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-[#6B7280] mb-6">
                All exhibitors receive the following base benefits:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {boothBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-[#1A1A1A]">
                    <svg className="w-5 h-5 text-[#2D3E8C] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Testimonials */}
      <VendorTestimonials />

      {/* Prospectus Download */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Download Vendor Prospectus</h2>
            <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
              Get complete details on sponsorship packages, booth specifications, and exhibitor guidelines in our comprehensive vendor prospectus.
            </p>
            <a
              href="/vendor-prospectus.pdf"
              className="btn-primary inline-flex items-center"
              download
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Prospectus (PDF)
            </a>
            <p className="text-sm text-[#6B7280] mt-4">
              Complete sponsorship details and registration information
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A2566] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Vendor</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to connect with North Carolina&apos;s homicide investigators? Reserve your booth today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://form.jotform.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1A2566] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply to Exhibit
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#1A2566] transition-colors"
            >
              Contact Us for Questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
