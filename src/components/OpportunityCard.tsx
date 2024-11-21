import { ArrowRight } from 'lucide-react';

interface OpportunityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  earnings: string;
}

export default function OpportunityCard({ title, description, icon, earnings }: OpportunityCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          {icon}
        </div>
        <span className="text-green-600 font-semibold">{earnings}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="flex items-center text-blue-600 hover:text-blue-700">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
}