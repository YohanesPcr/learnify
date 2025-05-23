// components/ButtonUserForm.jsx
export default function ButtonUserForm({ label, onClick }) {
    // ✅ Komponen ButtonUserForm digunakan untuk tombol dalam formulir pengguna
    // ✅ Menerima dua properti:
    //    - 'label' → teks yang akan ditampilkan pada tombol
    //    - 'onClick' → fungsi yang akan dijalankan saat tombol diklik
  
    return (
      <button 
        className="w-full bg-green-500 text-white p-2 rounded" 
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  