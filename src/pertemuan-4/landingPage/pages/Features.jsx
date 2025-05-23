import { UserCheck, Clock, MonitorPlay } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <UserCheck size={28} />,
      title: "Learn From Experts",
      desc: "Top Experts Around The World",
    },
    {
      icon: <Clock size={28} />,
      title: "Go At Your Own Pace",
      desc: "Enjoy Lifetime Access Courses",
    },
    {
      icon: <MonitorPlay size={28} />,
      title: "Life Time Access",
      desc: "Learn On Your Schedule",
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );

  
}
