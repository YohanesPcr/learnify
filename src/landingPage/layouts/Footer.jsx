import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#083b2e] text-white px-6 py-12 grid md:grid-cols-3 gap-8">
      
      {/* Form Get in Touch */}
      <div id="footer-form">
        <h4 id="footer-form-title" className="font-semibold mb-3">Get in Touch</h4>
        <form id="contact-form" className="space-y-2">
          <input
            id="input-name"
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded bg-white text-black"
          />
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-white text-black"
          />
          <textarea
            id="input-message"
            placeholder="Message"
            className="w-full p-2 rounded bg-white text-black"
          />
          <button
            id="btn-submit"
            className="bg-[#00B074] px-4 py-2 rounded text-white transition-all duration-200 hover:bg-green-600 active:bg-green-900"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Kontak */}
      <div id="footer-contact">
        <h4 id="footer-contact-title" className="font-semibold mb-3">Contact Us</h4>
        <p id="footer-address">
          #724, 6th Floor, 23rd Cross, 7th Block, ERUPOP 2nd Stage, State - 2342 454
        </p>
        <p id="footer-phone" className="mt-2">1244 66 66 8888</p>
      </div>

      {/* Sosial Media */}
      <div id="footer-social">
        <h4 id="footer-social-title" className="font-semibold mb-3">Be Social</h4>
        <div id="footer-social-icons" className="flex space-x-4">
          <FaFacebook id="icon-facebook" className="text-xl cursor-pointer hover:text-[#00B074]" />
          <FaTwitter id="icon-twitter" className="text-xl cursor-pointer hover:text-[#00B074]" />
          <FaInstagram id="icon-instagram" className="text-xl cursor-pointer hover:text-[#00B074]" />
          <FaLinkedin id="icon-linkedin" className="text-xl cursor-pointer hover:text-[#00B074]" />
        </div>
      </div>

    </footer>
  );
}
