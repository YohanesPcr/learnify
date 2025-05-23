// components/Border.jsx
export default function Border({ children }) {
    // ✅ Komponen Border digunakan sebagai wadah dengan tampilan rapi dan terpusat 
    // ✅ Menerima 'children' sebagai konten yang akan ditempatkan di dalamnya
  
    return (
      <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
        {/* ✅ Elemen div ini mengatur tampilan luar dengan:
            - 'flex flex-col' → menata elemen secara vertikal
            - 'items-center justify-center' → memusatkan elemen secara horizontal & vertikal
            - 'm-5 p-5' → memberikan margin dan padding agar tampilan lebih lega
            - 'bg-gray-100' → memberikan latar belakang abu-abu terang */}
  
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          {/* ✅ Elemen div ini sebagai container utama dengan:
              - 'bg-white' → memberi latar belakang putih
              - 'p-6' → padding agar konten tidak terlalu rapat ke tepi
              - 'rounded-lg' → memberikan sudut melengkung agar lebih estetis
              - 'shadow-lg' → menambahkan efek bayangan agar tampilan lebih elegan
              - 'w-96' → mengatur lebar container agar konsisten */}
          {children}
          {/* ✅ Menampilkan konten yang diterima sebagai 'children' */}
        </div>
      </div>
    );
  }
  