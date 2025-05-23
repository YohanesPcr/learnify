import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
