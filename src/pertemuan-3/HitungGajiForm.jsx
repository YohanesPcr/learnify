import { useState } from "react";  
import InputField from "./components/InputField";  
import Alert from "./components/Alert";  
import Border from "./components/Border";  
import PajakInfo from "./components/PajakInfo";  

export default function HitungGajiForm() {  
  // ✅ State untuk menyimpan input gaji
  const [gaji, setGaji] = useState("");  

  // ✅ Pajak ditetapkan sebesar 11% (0.11)
  const pajak = 0.11;  

  // ✅ Menghitung total gaji bersih setelah pajak
  const totalGaji = gaji - gaji * pajak;  

  return (  
    <Border>  
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">  
        Hitung Gaji Bersih  
      </h2>  

      {/* Input untuk memasukkan jumlah gaji */}
      <InputField   
        type="number"  
        placeholder="Masukkan jumlah gaji"  
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"  
        onChange={(e) => setGaji(e.target.value)}  
      />  

      {/* Menampilkan informasi pajak (11%) */}
      <PajakInfo />  

      {/* Validasi gaji */}
      {!gaji || gaji < 0 ? (  
        // Jika input kosong atau negatif, tampilkan pesan error
        <Alert type="error" message="Silakan masukkan gaji yang valid (tidak boleh kosong atau negatif)." />  
      ) : (  
        // Jika input valid, tampilkan total gaji bersih setelah pajak
        <Alert type="success" message={`Total Take Home Pay (THP): Rp ${totalGaji.toLocaleString()}`} />  
      )}  
    </Border>  
  );  
}  
