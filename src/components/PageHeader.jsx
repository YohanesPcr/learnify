export default function PageHeader({ subtitle = "", title = "" }) {
    return (
      <section className="bg-[#E7FAF5] py-24 px-4">
        <div className="bg-[#043334] text-white rounded-2xl max-w-5xl mx-auto relative px-10 py-20 overflow-hidden">
          
          {/* Teks */}
          <div className="text-center">
            <h4 className="uppercase tracking-widest text-xs text-[#A0DAD6]">
              {subtitle}
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              {title}
            </h1>
          </div>
  
          {/* Kiri Atas - seperempat lingkaran */}
          <div className="absolute top-6 left-6 w-14 h-14 bg-[#CDE5DC] rounded-br-full"></div>
  
          {/* Kanan Bawah - setengah lingkaran miring */}
          <div className="absolute bottom-6 right-6 w-20 h-20">
            <div className="w-full h-full bg-[#F9E86F] rounded-full transform rotate-[-45deg] clip-half-circle"></div>
          </div>
  
        </div>
      </section>
    );
  }
  