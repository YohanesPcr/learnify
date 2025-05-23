import mentors from "../json/mentors.json";
import PageHeader from '../components/PageHeader';// Ensure to import your PageHeader component  
export default function MentorList() {
  return (
    <div className="bg-[#ffffff] text-[#043334] font-sans">
      
      <PageHeader subtitle="Teachers" title="Meet the teacher"/> 



<section className="relative mt-20 mb-10">
  <div className="max-w-6xl mx-auto px-6 flex justify-between items-start">
    {/* Teks kiri */}
    <div className="text-left">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#043334] leading-snug">
        Meet our professional
      </h2>
      <div className="text-2xl md:text-4xl font-semibold text-[#043334] leading-snug">
        <span className="relative z-10">mentors.</span>
      </div>
    </div>

    {/* Logo dekoratif kanan atas */}
    <div className="w-10 h-10 bg-[#043334] rotate-[135deg] rounded-tr-full mt-2"></div>
  </div>
</section>

{/* Mentor Cards */}
<div className="max-w-6xl mx-auto px-6 mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
  {mentors.map((mentor) => (
    <div
      key={mentor.id}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 text-center bg-[#DFF5F2]">
        <h3 className="font-bold text-lg">{mentor.name}</h3>
        <p className="text-sm text-gray-600">{mentor.position}</p>
        <p className="text-sm text-gray-500 mt-1">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="mt-2 flex justify-center items-center text-sm text-gray-600 gap-2">
          <span>⭐ {mentor.rating}</span>
          <span>({mentor.reviews})</span>
        </div>
      </div>
    </div>
  ))}
</div>


 

    </div>
  );
}
