// Import React 18 untuk rendering root aplikasi
import { createRoot } from "react-dom/client";

// Import file Tailwind CSS agar styling diterapkan
import './tailwind.css';

// Import komponen yang akan dirender
import TailwindCSS from "./TailwindCSS";  
import LearnifyForm from "./LearnifyForm";
import SubjectSelectionForm from "./SubjectSelectionForm";

// Inisialisasi root React pada elemen dengan id "root"
createRoot(document.getElementById("root")).render(
  <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
    {/* Mengaktifkan Tailwind CSS (jika ada konfigurasi tambahan di dalam komponen ini) */}
    <TailwindCSS />  

    {/* Form pendaftaran murid */}
    <LearnifyForm />

    {/* Form pemilihan mata pelajaran */}
    <SubjectSelectionForm />
  </div>
);
