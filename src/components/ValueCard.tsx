interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-[#2D3E8C] rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[#6B7280] leading-relaxed">{description}</p>
    </div>
  );
}
