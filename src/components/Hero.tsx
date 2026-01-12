import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/lib/images';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTAs?: boolean;
  backgroundImage?: string;
}

export default function Hero({
  title = "Advancing Homicide Investigation Excellence in North Carolina",
  subtitle = "The North Carolina Homicide Investigators Association provides premier training, networking, and resources for law enforcement professionals dedicated to solving homicides and delivering justice for victims and families.",
  showCTAs = true,
  backgroundImage = images.hero.conference,
}: HeroProps) {
  return (
    <section className="relative text-white min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Conference background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D3E8C]/90 via-[#3B4FAD]/85 to-[#1A2566]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow">
            {subtitle}
          </p>
          {showCTAs && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/conferences/spring"
                className="bg-white text-[#2D3E8C] px-8 py-4 rounded-md font-semibold text-center hover:bg-gray-100 transition-colors shadow-lg"
              >
                Register for Conference
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-center hover:bg-white hover:text-[#2D3E8C] transition-colors"
              >
                Learn More
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
