// Komponen Dropdown: Dropdown yang dapat digunakan kembali untuk memilih umur atau opsi lainnya
export default function Dropdown({ label, options, onChange }) {
    return (
      <div className="mb-3">
        {/* Label untuk dropdown */}
        <label className="block text-blue-700 font-medium mb-1">{label}</label>

        {/* Dropdown/select dengan daftar opsi */}
        <select
          className="w-full p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
          onChange={onChange} // Event handler untuk menangani perubahan nilai
        >
          {/* Opsi default yang selalu muncul pertama */}
          <option value="">Pilih Umur</option>

          {/* Mapping array 'options' untuk menampilkan setiap opsi */}
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
}
