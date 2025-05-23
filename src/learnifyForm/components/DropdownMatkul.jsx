export default function DropdownMatkul({ label, options, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="block text-blue-700 font-medium mb-1">{label}</label>
      <select
        className="w-full p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      >
        <option value="">Pilih {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
