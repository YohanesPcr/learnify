import { Search, MessageSquare, Bell, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Left: Title */}
      <h1 className="text-xl font-[var(--font-poppins-extrabold)] text-[var(--color-teks)]">
        Courses
      </h1>

      {/* Middle: Search Bar */}
      <div className="flex items-center flex-1 mx-6 max-w-md relative">
        <Search className="absolute left-3 text-[var(--color-hijau)] w-4 h-4" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full pl-9 pr-4 py-2 rounded-full bg-[var(--color-latar)] text-sm focus:outline-none text-[var(--color-teks)] placeholder:text-[var(--color-teks-samping)]"
        />
      </div>

      {/* Right: Language, Icons, Profile */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <div className="flex items-center space-x-1 cursor-pointer text-sm text-[var(--color-teks-samping)]">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="English"
            className="w-5 h-5 rounded-full object-cover"
          />
          <span>Eng (US)</span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[var(--color-latar)] flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-[var(--color-teks-samping)]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[var(--color-latar)] flex items-center justify-center">
            <Bell className="w-4 h-4 text-[var(--color-teks-samping)]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[var(--color-latar)] flex items-center justify-center">
            <Settings className="w-4 h-4 text-[var(--color-teks-samping)]" />
          </div>
        </div>

        {/* Profile Image */}
        <img
          src="https://source.unsplash.com/40x40/?man,face"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
