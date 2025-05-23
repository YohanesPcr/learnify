import { createRoot } from "react-dom/client";  
import TailwindCSS from "./TailwindCSS";  // ✅ Mengimpor Navbar TailwindCSS  
import './tailwind.css';  // ✅ Mengimpor file Tailwind CSS untuk styling  
import UserForm from "./UserForm";  // ✅ Mengimpor Formulir User  
import HitungGajiForm from "./HitungGajiForm";  // ✅ Mengimpor Formulir Perhitungan Gaji  

// ✅ Membuat root React dan merender komponen di dalam elemen dengan id="root"
createRoot(document.getElementById("root"))  
  .render(  
    <div>  
      <TailwindCSS />  {/* ✅ Navbar menggunakan TailwindCSS */}
      <UserForm />  {/* ✅ Form untuk menambahkan user */}
      <HitungGajiForm />  {/* ✅ Form untuk menghitung gaji */}
    </div>  
  );  
