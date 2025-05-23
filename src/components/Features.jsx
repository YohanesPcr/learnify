import { Users, Clock, Video } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Users className="text-[#00B074]" />, title: 'Learn From Experts', desc: 'Top Experts Around The World' },
    { icon: <Video className="text-[#00B074]" />, title: 'Go At Your Own Pace', desc: 'Enjoy Lifetime Access Courses' },
    { icon: <Clock className="text-[#00B074]" />, title: 'Life Time Access', desc: 'Learn On Your Schedule' },
  ];

  return (
    <section id="features-section" className="bg-white py-16">
      <div id="features-grid" className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div
            key={i}
            id={`feature-card-${i}`}
            className="bg-white shadow-md rounded-xl p-6 text-center"
          >
            <div
              id={`feature-icon-wrapper-${i}`}
              className="mb-4 mx-auto w-12 h-12 flex items-center justify-center bg-[#e6f7f1] rounded-full"
            >
              <span id={`feature-icon-${i}`}>{f.icon}</span>
            </div>
            <h4 id={`feature-title-${i}`} className="font-semibold text-lg mb-1">
              {f.title}
            </h4>
            <p id={`feature-desc-${i}`} className="text-sm text-gray-500">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
