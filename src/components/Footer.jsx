import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      {/* Subscribe Section */}
      <section className="mt-20 bg-[#DFF5F2] py-16 px-6 text-center rounded-t-2xl relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-[#043334]">
          <span className="relative inline-block">
            <span className="relative z-10">Subscribe</span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#F9E86F] rounded-full z-0"></span>
          </span>{" "}
          <span className="font-semibold">Our Newsletter</span>
        </h2>
        <p className="mt-3 text-[#4F4F4F] text-sm md:text-base max-w-lg mx-auto">
          Join now to receive personalized recommendations from the full Coursera catalog.
        </p>
        <div className="mt-6 flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your mail"
            className="px-4 py-3 w-64 md:w-80 rounded-l-md border border-gray-300 focus:outline-none text-sm"
          />
          <button className="bg-[#176B5D] text-white px-6 py-3 rounded-r-md text-sm">
            Subscribe
          </button>
        </div>

        {/* Decorative half circles */}
        <div className="absolute bottom-6 left-6 w-14 h-14 bg-[#A5D9CE] rounded-br-full rounded-tl-full rotate-180"></div>
        <div className="absolute bottom-6 right-6 w-14 h-14 bg-[#A5D9CE] rounded-bl-full rounded-tr-full rotate-180"></div>
      </section>

      {/* Footer Main Section */}
      <footer className="bg-[#083b2e] text-white px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Get in Touch */}
        <div>
          <h4 className="font-semibold mb-3">Get in Touch</h4>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white text-black"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded bg-white text-black"
            />
            <button
              className="bg-[#00B074] px-4 py-2 rounded text-white transition-all duration-200 hover:bg-green-600 active:bg-green-900"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p>
            #724, 6th Floor, 23rd Cross, 7th Block, ERUPOP 2nd Stage, State - 2342 454
          </p>
          <p className="mt-2">1244 66 66 8888</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-3">Be Social</h4>
          <div className="flex space-x-4">
            <FaFacebook className="text-xl cursor-pointer hover:text-[#00B074]" aria-label="Facebook" />
            <FaTwitter className="text-xl cursor-pointer hover:text-[#00B074]" aria-label="Twitter" />
            <FaInstagram className="text-xl cursor-pointer hover:text-[#00B074]" aria-label="Instagram" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-[#00B074]" aria-label="LinkedIn" />
          </div>
        </div>
        
      </footer>
    </>
  );
}
