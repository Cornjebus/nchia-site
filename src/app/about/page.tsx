import { Metadata } from 'next';
import Image from 'next/image';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About NCHIA',
  description: 'Learn about the North Carolina Homicide Investigators Association, our mission, history, and board of directors.',
};

const boardMembers = [
  {
    name: 'Derek Moore',
    position: 'President',
    title: 'Major',
    agency: 'Carteret County Sheriff\'s Office',
    image: 'https://nchia.org/wp-content/uploads/2021/01/Derek-Moore-Treasurer.jpg',
  },
  {
    name: 'Dan Johnson',
    position: 'Vice-President',
    title: 'Lieutenant, Field Operations',
    agency: 'Fayetteville Police Department',
    image: 'https://nchia.org/wp-content/uploads/2021/01/Daniel-Johnson-Board-Member.jpg',
  },
  {
    name: 'Nicholas Deming',
    position: 'Treasurer',
    title: 'Assistant Special Agent in Charge, Special Investigations Unit',
    agency: 'NC State Bureau of Investigation',
    image: 'https://nchia.org/wp-content/uploads/2023/06/NickDenning.jpg',
  },
  {
    name: 'Chad Suggs',
    position: 'Secretary',
    title: '(Retired) Captain, Criminal Investigations Division',
    agency: 'Pitt County Sheriff\'s Office',
    image: 'https://nchia.org/wp-content/uploads/2021/01/Chad-Suggs-Secretary.jpg',
  },
  {
    name: 'Adam Crozier',
    position: 'Board Member',
    title: 'Corporal, Homicide Unit',
    agency: 'Greensboro Police Department',
    image: 'https://nchia.org/wp-content/uploads/2021/10/adamc.jpg',
  },
  {
    name: 'Justin Godwin',
    position: 'Board Member',
    title: 'Sergeant, Field Operations',
    agency: 'Wilson Police Department',
    image: 'https://nchia.org/wp-content/uploads/2021/01/Justin-Godwin-Board-Member-1.jpg',
  },
  {
    name: 'Trish Fore',
    position: 'Board Member',
    title: 'Program Director, Medical Examiner Training and Management',
    agency: 'NC Office of the Chief Medical Examiner',
    image: 'https://nchia.org/wp-content/uploads/2021/01/Trish-Fore-Board-Member.jpg',
  },
  {
    name: 'Daniel Karratti',
    position: 'Board Member',
    title: 'Sergeant, Patrol Division',
    agency: 'Jacksonville Police Department',
    image: 'https://nchia.org/wp-content/uploads/2023/01/Daniel-Karratti-photo.jpg',
  },
  {
    name: 'G.J. Maccini',
    position: 'Board Member',
    title: 'Special Agent, Cold Case Homicide Unit',
    agency: 'NCIS Carolinas Field Office',
    image: 'https://nchia.org/wp-content/uploads/2023/12/Joe-Maccini.jpg',
  },
  {
    name: 'Matt Hefner',
    position: 'Board Member',
    title: 'Detective, Homicide Cold Case Unit',
    agency: 'Charlotte-Mecklenburg Police Department',
    image: 'https://nchia.org/wp-content/uploads/2024/12/Hefner.png',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative text-white min-h-[300px] lg:min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.about.teamwork}
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D3E8C]/90 via-[#3B4FAD]/85 to-[#1A2566]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">About NCHIA</h1>
          <p className="text-xl text-gray-100 max-w-2xl drop-shadow">
            Dedicated to advancing homicide investigation excellence in North Carolina since 1984.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Our Mission</h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                The North Carolina Homicide Investigators Association is committed to providing premier training, networking, and professional development opportunities for law enforcement professionals dedicated to solving homicides and delivering justice for victims and their families.
              </p>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                We believe that through collaboration, education, and the sharing of best practices, we can enhance the effectiveness of homicide investigations across North Carolina and bring closure to those affected by violent crime.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                NCHIA serves as a bridge connecting investigators from agencies of all sizes, fostering relationships that extend beyond our conferences and creating a support network that benefits all members.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={images.lawEnforcement.justice}
                alt="Justice and law enforcement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section with Image */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Our History</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src={images.conferences.workshop}
                alt="Training workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Founded in 1984, the North Carolina Homicide Investigators Association was established by a dedicated group of homicide investigators who recognized the need for specialized training and professional networking in their field.
              </p>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                What began as informal gatherings of investigators sharing case experiences has grown into one of the most respected law enforcement professional organizations in North Carolina. Today, NCHIA hosts two major conferences annually, bringing together hundreds of investigators, forensic specialists, and prosecutors.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Over four decades, NCHIA has remained true to its founding mission while adapting to the evolving landscape of homicide investigation, incorporating new technologies, forensic techniques, and investigative methodologies into our training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 text-center">Board of Directors</h2>
          <p className="text-lg text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Our volunteer board members represent agencies across North Carolina, bringing diverse experience and perspectives to guide our organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-[#2D3E8C]/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">{member.name}</h3>
                <p className="text-[#2D3E8C] font-bold text-sm mb-1">{member.position}</p>
                <p className="text-[#6B7280] text-sm mb-1">{member.title}</p>
                <p className="text-[#6B7280] text-xs">{member.agency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nonprofit Status */}
      <section className="py-16 bg-[#1A2566] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">501(c)(3) Nonprofit Organization</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            NCHIA is a registered 501(c)(3) nonprofit organization. Your membership dues and conference fees directly support our mission of advancing homicide investigation excellence in North Carolina.
          </p>
        </div>
      </section>
    </>
  );
}
