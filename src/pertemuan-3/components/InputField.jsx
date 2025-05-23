export default function InputField({ label, type, placeholder, onChange }) {  
  // ✅ Komponen InputField digunakan untuk input teks dalam formulir
  // ✅ Menerima properti:
  //    - 'label' → teks label untuk input
  //    - 'type' → tipe input (text, password, dll.)
  //    - 'placeholder' → teks contoh dalam input
  //    - 'onChange' → fungsi yang dijalankan saat nilai input berubah

  return (  
    <div className="mb-3">  
      {/* Label untuk input */}
      <label className="block text-gray-700 font-medium mb-1">{label}</label>  

      {/* Input field dengan styling Tailwind */}
      <input  
        type={type}  
        placeholder={placeholder}  
        className="w-full p-2 border border-gray-300 rounded"  
        onChange={onChange} // Menjalankan fungsi saat nilai input berubah  
      />  
    </div>  
  );  
}  
