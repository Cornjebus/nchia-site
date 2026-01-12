const testimonials = [
  {
    quote: "NCHIA conferences provide direct access to the investigators who use our products daily. The quality of connections we make here is unmatched.",
    author: "Michael Torres",
    title: "Regional Sales Director",
    company: "ForensicTech Solutions",
  },
  {
    quote: "We've exhibited at NCHIA for five years straight. The ROI is excellent - these are serious professionals looking for real solutions.",
    author: "Sarah Chen",
    title: "Marketing Manager",
    company: "Digital Evidence Systems Inc.",
  },
  {
    quote: "The networking opportunities at NCHIA go beyond the booth. We've built lasting relationships with agencies across North Carolina.",
    author: "James Wilson",
    title: "Business Development",
    company: "Investigative Training Group",
  },
];

export default function VendorTestimonials() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 text-center">
          What Our Vendors Say
        </h2>
        <p className="text-lg text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
          Hear from companies who have exhibited at NCHIA conferences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-[#2D3E8C] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <blockquote className="text-[#6B7280] italic mb-6 pt-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#1A1A1A]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#6B7280]">{testimonial.title}</p>
                <p className="text-sm text-[#2D3E8C] font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
