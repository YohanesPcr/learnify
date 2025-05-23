// Komponen InputField: Digunakan untuk membuat input field yang dapat digunakan kembali (reusable component) dalam sebuah form.
export default function InputField({ label, type, placeholder, onChange, value }) {
  return (
    <div className="mb-3"> 
      {/* Label untuk input field */}
      <label className="block text-blue-700 font-medium mb-1">{label}</label>
      
      {/* Input field dengan properti yang dapat dikustomisasi */}
      <input
        type={type} // Jenis input (misal: text, email, password)
        placeholder={placeholder} // Placeholder untuk memberikan petunjuk pada pengguna
        className="w-full p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500" 
        onChange={onChange} // Event handler saat nilai input berubah
        value={value} // Nilai input yang dikontrol oleh state dari komponen induk
      />
    </div>
  );
}
