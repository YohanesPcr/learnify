// components/PajakInfo.jsx

export default function PajakInfo() {
    // ✅ Komponen PajakInfo digunakan untuk menampilkan informasi pajak tetap
    return (
      <div className="mb-4">
        {/* Label yang menampilkan teks "Pajak" */}
        <label className="block text-gray-700 font-medium mb-1">
          Pajak: <b className="text-red-500">11%</b> 
          {/* Menampilkan angka pajak 11% dengan warna merah */}
        </label>
      </div>
    );
}
