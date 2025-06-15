// src/pages/ContactUs.jsx

// Import hook dan komponen yang dibutuhkan
import { useEffect, useState } from "react";
import { messagesAPI } from "../services/messagesAPI"; // API untuk mengakses pesan dari backend/Supabase
import AlertBox1 from "../components/AlertBox1"; // Komponen alert custom
import LoadingSpinner from "../components/LoadingSpinner"; // Komponen loading spinner
import EmptyState from "../components/EmptyState"; // Komponen tampilan kosong jika tidak ada data
import { AiFillDelete, AiFillEdit } from "react-icons/ai"; // Ikon edit dan delete

export default function ContactUs() {
  // State untuk form input
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // State untuk daftar pesan yang diambil dari backend
  const [messages, setMessages] = useState([]);

  // State untuk indikator loading
  const [loading, setLoading] = useState(false);

  // State untuk notifikasi sukses atau error
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // State untuk menyimpan ID pesan yang sedang diedit
  const [editId, setEditId] = useState(null);

  // Fungsi untuk mengambil data pesan dari backend
  const loadMessages = async () => {
    try {
      setLoading(true); // set loading true saat mulai ambil data
      const data = await messagesAPI.fetchMessages(); // ambil data pesan
      setMessages(data.reverse()); // tampilkan pesan dari yang terbaru
    } catch {
      setError("Gagal memuat pesan"); // tampilkan error jika gagal
    } finally {
      setLoading(false); // set loading false setelah selesai
    }
  };

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fungsi untuk submit form (buat/edit pesan)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (editId) {
        // Jika editId terisi, berarti mode edit
        await messagesAPI.updateMessage(editId, form);
        setSuccess("Pesan berhasil diperbarui!");
      } else {
        // Jika tidak, berarti kirim pesan baru
        await messagesAPI.createMessage(form);
        setSuccess("Pesan berhasil dikirim!");
      }
      // Reset form dan mode edit
      setForm({ name: "", email: "", message: "" });
      setEditId(null);
      loadMessages(); // refresh data setelah kirim/edit
    } catch {
      setError(editId ? "Gagal memperbarui pesan" : "Gagal mengirim pesan");
    } finally {
      setLoading(false);
      // Hapus notifikasi sukses setelah 3 detik
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  // Fungsi untuk menghapus pesan
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus pesan ini?");
    if (!konfirmasi) return;
    try {
      setLoading(true);
      await messagesAPI.deleteMessage(id); // panggil API hapus
      setSuccess("Pesan berhasil dihapus");
      loadMessages(); // refresh daftar pesan
    } catch {
      setError("Gagal menghapus pesan");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk masuk ke mode edit
  const handleEdit = (msg) => {
    setForm({ name: msg.name, email: msg.email, message: msg.message });
    setEditId(msg.id); // simpan ID pesan yg sedang diedit
  };

  // useEffect untuk memuat pesan saat halaman pertama kali dibuka
  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="bg-white p-10 rounded-xl shadow-md max-w-6xl mx-auto mt-10">
      <h2 className="text-center text-green-600 text-xl font-semibold mb-8 underline underline-offset-4">
        CONTACT US
      </h2>

      {/* Menampilkan notifikasi error dan sukses */}
      {error && <AlertBox1 type="error">{error}</AlertBox1>}
      {success && <AlertBox1 type="success">{success}</AlertBox1>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form input pesan */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {editId ? "Edit Message" : "Leave us a message"}
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Input nama */}
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            {/* Input email */}
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            {/* Textarea pesan */}
            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded resize-none"
                required
              ></textarea>
            </div>

            {/* Tombol kirim dan batal (jika sedang edit) */}
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
              >
                {loading ? "Menyimpan..." : editId ? "Update" : "Send"}
              </button>
              {editId && (
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 px-4 rounded hover:bg-gray-400"
                  onClick={() => {
                    // Reset form & keluar dari mode edit
                    setForm({ name: "", email: "", message: "" });
                    setEditId(null);
                  }}
                >
                  Batal
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Daftar pesan yang sudah dikirim */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Message sent</h3>
          {loading && <LoadingSpinner text="Memuat pesan..." />}
          {!loading && messages.length === 0 && (
            <EmptyState text="Belum ada pesan" />
          )}
          {!loading && messages.length > 0 && (
            <ul className="space-y-4">
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  className="border border-gray-200 rounded-xl p-4 relative"
                >
                  {/* Menampilkan isi pesan */}
                  <p className="font-semibold text-emerald-700">{msg.name}</p>
                  <p className="text-sm text-gray-500">{msg.email}</p>
                  <p className="mt-2">{msg.message}</p>
                  {/* Tombol edit dan hapus */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(msg)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                    >
                      <AiFillEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Hapus"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
