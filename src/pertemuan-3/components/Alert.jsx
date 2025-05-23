// components/Alert.jsx
export default function Alert({ type, message }) {  
    // ✅ Komponen Alert digunakan untuk menampilkan pesan notifikasi berdasarkan tipe ('error' atau 'success') 
    // ✅ Menggunakan props 'type' untuk menentukan gaya alert dan 'message' untuk isi pesan
    
    const alertStyles = {
      error: "bg-red-100 border-l-4 border-red-500 text-red-700",
      success: "bg-blue-100 border-l-4 border-blue-500 text-blue-700",
    };
    // ✅ 'alertStyles' adalah objek yang menyimpan kelas Tailwind CSS untuk menentukan warna dan border 
    // ✅ Jika 'type' adalah 'error', latar belakang merah dengan teks merah
    // ✅ Jika 'type' adalah 'success', latar belakang biru dengan teks biru
  
    return (
      <div className={`mt-4 p-3 ${alertStyles[type]}`}>
        {/* ✅ 'div' ini akan menampilkan alert dengan styling sesuai 'type' */}
        {/* ✅ 'mt-4 p-3' memberikan margin atas dan padding agar alert terlihat rapi */}
        {/* ✅ '${alertStyles[type]}' memilih warna sesuai dengan tipe error/success */}
  
        <p className="font-semibold">{message}</p>
        {/* ✅ Menampilkan teks pesan alert dengan font tebal */}
      </div>
    );
  }
  