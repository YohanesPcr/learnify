import { GraduationCap, Clock, User } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-between items-center px-6 py-16 md:py-24 bg-gradient-to-br from-white to-green-50">
      {/* Left Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-sm text-green-600 font-semibold">Start your favourite course</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-3 mb-4">
          Now learning from <br /> anywhere, and build <br /> your <span className="text-green-600">bright career.</span>
        </h1>
        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-semibold">
          Start Learning
        </button>
      </div>

      {/* Right Illustration */}
      <div className="md:w-1/2 relative">
        <img src="/images/student.png" alt="student" className="w-[90%] mx-auto md:mx-0" />
        
        {/* Stats */}
        <div className="absolute top-6 left-2 md:left-12 bg-white px-4 py-2 rounded-xl shadow-md flex items-center space-x-2">
          <User className="text-green-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">40K+</p>
            <p className="text-sm font-semibold">Students Enrolled</p>
          </div>
        </div>
        <div className="absolute bottom-8 right-4 md:right-20 bg-white px-4 py-2 rounded-xl shadow-md flex items-center space-x-2">
          <GraduationCap className="text-green-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">2435</p>
            <p className="text-sm font-semibold">Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
