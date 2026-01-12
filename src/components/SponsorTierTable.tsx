const tiers = [
  {
    name: 'Platinum',
    price: '$5,000',
    benefits: [
      'Premium booth location',
      'Logo on all conference materials',
      'Speaking opportunity',
      '4 conference registrations',
      'Recognition at opening ceremony',
    ],
    color: 'bg-gray-100',
    borderColor: 'border-gray-400',
  },
  {
    name: 'Gold',
    price: '$3,000',
    benefits: [
      'Standard booth location',
      'Logo on event signage',
      '2 conference registrations',
      'Program advertisement',
    ],
    color: 'bg-yellow-50',
    borderColor: 'border-yellow-400',
  },
  {
    name: 'Silver',
    price: '$1,500',
    benefits: [
      'Standard booth location',
      'Program listing',
      '1 conference registration',
    ],
    color: 'bg-gray-50',
    borderColor: 'border-gray-300',
  },
  {
    name: 'Bronze',
    price: '$750',
    benefits: [
      'Tabletop display',
      'Program listing',
    ],
    color: 'bg-orange-50',
    borderColor: 'border-orange-300',
  },
];

export default function SponsorTierTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`${tier.color} border-t-4 ${tier.borderColor} rounded-lg p-6 shadow-md`}
        >
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{tier.name}</h3>
          <p className="text-3xl font-bold text-[#2D3E8C] mb-4">{tier.price}</p>
          <ul className="space-y-2">
            {tier.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-[#6B7280]">
                <svg
                  className="w-5 h-5 text-[#2D3E8C] mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
