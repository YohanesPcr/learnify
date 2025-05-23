// components/BorderUserForm.jsx
export default function BorderUserForm({ children }) {
    // ✅ Komponen BorderUserForm digunakan sebagai wadah khusus untuk formulir tambah user
    // ✅ Menerima 'children' sebagai konten dinamis yang akan ditampilkan di dalamnya
  
    return (
      <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
        {/* ✅ Elemen div ini mengatur tampilan luar dengan:
            - 'flex flex-col' → menata elemen secara vertikal
            - 'items-center justify-center' → memusatkan elemen secara horizontal & vertikal
            - 'm-5 p-5' → memberikan margin dan padding agar tampilan lebih lega
            - 'bg-gray-100' → memberi latar belakang abu-abu terang */}
  
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          {/* ✅ Elemen div ini sebagai container utama dengan:
              - 'bg-white' → memberi latar belakang putih
              - 'p-6' → padding agar konten tidak terlalu rapat ke tepi
              - 'rounded-lg' → membuat sudut melengkung agar lebih estetis
              - 'shadow-lg' → menambahkan efek bayangan agar tampilan lebih elegan
              - 'w-96' → mengatur lebar container agar konsisten */}
          
          <h2 className="text-2xl font-semibold text-center mb-4">Tambah User</h2>
          {/* ✅ Menampilkan judul formulir 'Tambah User' dengan:
              - 'text-2xl' → ukuran teks besar
              - 'font-semibold' → membuat teks lebih tebal
              - 'text-center' → membuat teks berada di tengah
              - 'mb-4' → memberikan margin bawah agar ada jarak sebelum children */}
  
          {children}
          {/* ✅ Menampilkan konten yang diterima sebagai 'children' */}
        </div>
      </div>
    );
  }
  