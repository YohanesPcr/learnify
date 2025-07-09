import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Subscribe Section */}
      <section className="mt-20 bg-[#DFF5F2] py-16 px-6 text-center rounded-t-2xl relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
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

          {/* Input Email */}
          <div className="mt-6 flex justify-center">
            <div className="join">
              <label className="input input-bordered join-item flex items-center gap-2 w-64 md:w-80">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="Enter your mail" className="grow" required />
              </label>
              <button className="btn join-item bg-[#176B5D] text-white hover:bg-[#104e44]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute bottom-6 left-6 w-14 h-14 bg-[#A5D9CE] rounded-br-full rounded-tl-full rotate-180"></div>
        <div className="absolute bottom-6 right-6 w-14 h-14 bg-[#A5D9CE] rounded-bl-full rounded-tr-full rotate-180"></div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#083b2e] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Get in Touch Form */}
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
              Jl. Purnawarman No. 36 B, Rt. 03 Rw. 05<br />
              Kel. Babakan Ciamis, Kec. Sumur Bandung<br />
              Kota Bandung, Provinsi Jawa Barat
            </p>
            <p className="mt-2">WhatsApp: <a href="https://wa.me/628112468988" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00B074]">+62 8112468988</a></p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold mb-3">Be Social</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BoZpwY14C/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl hover:text-[#00B074]" />
              </a>
              <a
                href="https://x.com/officialgopusat?s=21&t=Fxf2ndhN5-wzd0UbQHzrCw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl hover:text-[#00B074]" />
              </a>
              <a
                href="https://www.instagram.com/officialganeshaoperation?igsh=MTAxdXFlZ2Z0Ync2Yg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl hover:text-[#00B074]" />
              </a>
              <a
                href="https://www.linkedin.com/company/ganesha-operation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl hover:text-[#00B074]" />
              </a>
              <a
                href="https://wa.me/628112468988"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl hover:text-[#00B074]" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
