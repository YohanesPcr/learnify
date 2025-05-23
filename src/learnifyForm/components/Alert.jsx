// Komponen Alert: Menampilkan pesan error atau success dengan tampilan berbeda
export default function Alert({ type, message }) {
  // Objek untuk menyimpan gaya berdasarkan tipe alert
  const alertStyles = {
    error: "bg-red-100 border-l-4 border-red-500 text-red-700", // Gaya untuk error
    success: "bg-blue-100 border-l-4 border-blue-500 text-blue-700", // Gaya untuk success
  };

  return (
    <div className={`mt-4 p-3 ${alertStyles[type]}`}>
      {/* Menampilkan pesan dengan gaya yang sesuai */}
      <p className="font-semibold">{message}</p>
    </div>
  );
}
