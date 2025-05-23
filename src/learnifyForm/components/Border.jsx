// Komponen Border: Wrapper untuk membungkus elemen dengan tampilan border yang rapi
export default function Border({ children }) {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-blue-50">
      {/* Kontainer utama yang memberikan padding dan background biru muda */}

      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-blue-300">
        {/* Kotak putih dengan border, shadow, dan ukuran lebar 96 */}
        {children} {/* Menampilkan konten yang diberikan sebagai children */}
      </div>
    </div>
  );
}
