import Link from 'next/link';

interface ConferenceBannerProps {
  name: string;
  dates: string;
  location: string;
  href: string;
}

export default function ConferenceBanner({
  name = "Spring Conference 2025",
  dates = "March 15-17, 2025",
  location = "Raleigh Convention Center, Raleigh, NC",
  href = "/conferences/spring",
}: ConferenceBannerProps) {
  return (
    <section className="bg-[#1A2566] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300 uppercase tracking-wide mb-1">
              Upcoming Conference
            </p>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-300">
              {dates} &bull; {location}
            </p>
          </div>
          <Link
            href={href}
            className="bg-white text-[#1A2566] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
}
