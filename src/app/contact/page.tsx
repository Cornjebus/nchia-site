import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the North Carolina Homicide Investigators Association. Get in touch with questions about membership, conferences, or vendor opportunities.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E8C] via-[#3B4FAD] to-[#1A2566] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Have questions? We&apos;re here to help. Reach out to the NCHIA team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send Us a Message</h2>
              <p className="text-[#6B7280] mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Contact Information</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2D3E8C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">Mailing Address</h3>
                    <address className="text-[#6B7280] not-italic mt-1">
                      North Carolina Homicide Investigators Association<br />
                      P.O. Box 12345<br />
                      Raleigh, NC 27601
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2D3E8C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">Email</h3>
                    <a
                      href="mailto:info@nchia.org"
                      className="text-[#2D3E8C] hover:underline mt-1 block"
                    >
                      info@nchia.org
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2D3E8C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">Phone</h3>
                    <a
                      href="tel:+19195551234"
                      className="text-[#2D3E8C] hover:underline mt-1 block"
                    >
                      (919) 555-1234
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-[#F5F7FA] rounded-lg">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/membership" className="text-[#2D3E8C] hover:underline">
                      Membership Information
                    </a>
                  </li>
                  <li>
                    <a href="/conferences" className="text-[#2D3E8C] hover:underline">
                      Conference Registration
                    </a>
                  </li>
                  <li>
                    <a href="/vendors" className="text-[#2D3E8C] hover:underline">
                      Vendor & Sponsorship Inquiries
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">Our Location</h2>
          <div className="bg-gray-300 rounded-lg aspect-[21/9] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gray-500">Interactive map coming soon</p>
              <p className="text-gray-400 text-sm mt-2">Raleigh, North Carolina</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
