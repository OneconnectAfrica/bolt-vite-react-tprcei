interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  earnings: string;
}

export default function TestimonialCard({ name, role, content, image, earnings }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="text-green-600 font-semibold">
        Earnings: {earnings}
      </div>
    </div>
  );
}