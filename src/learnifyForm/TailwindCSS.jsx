export default function TailwindCSS() {
    return (
        <nav className="flex justify-between bg-blue-600 p-4 text-white shadow-md w-full fixed top-0 left-0 right-0">
          <h1 className="text-lg font-bold">Learnify</h1>
          <ul className="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Kursus</a></li>
            <li><a href="#">Kontak</a></li>
          </ul>
        </nav>
      );
    }
    