// Import React hook dan komponen/utility yang dibutuhkan
import { useState } from "react";
import { useParams } from "react-router-dom"; // Untuk mengambil parameter dari URL
import courseData from "../json/courses.json"; // Ambil data course dari file JSON lokal
import { registrationsPaketAPI } from "../services/registrationsPaketAPI"; // API service untuk pendaftaran
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

export default function RegisterPaketForm() {
  // Ambil slug dari URL menggunakan react-router
  const { slug } = useParams();

  // Cari course yang sesuai berdasarkan slug
  const course = courseData.find((c) => c.slug === slug);

  // Daftar metode pembayaran yang tersedia
  const paymentOptions = [
    { method: "BCA", account: "1234567890 a.n PT Learnify Indonesia" },
    { method: "BNI", account: "4567891230 a.n PT Learnify Indonesia" },
    { method: "DANA", account: "085712345678 a.n Learnify Digital" },
    { method: "OVO", account: "089912345678 a.n Learnify Pay" },
  ];

  // State untuk menyimpan data form pendaftaran
  const [form, setForm] = useState({
    name: "",
    email: "",
    paymentMethod: "",
    accountNumber: "",
    proof: null, // File bukti transfer
  });

  // State loading saat submit dan alert untuk feedback
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  // Jika slug tidak ditemukan dalam data kursus, tampilkan pesan kosong
  if (!course) {
    return <EmptyState message="Kursus tidak ditemukan." />;
  }

  // Fungsi utilitas untuk format harga dalam bentuk Rupiah
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  // Handler perubahan input
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Jika memilih metode pembayaran, otomatis isi nomor rekening
    if (name === "paymentMethod") {
      const selected = paymentOptions.find((opt) => opt.method === value);
      setForm((prev) => ({
        ...prev,
        paymentMethod: value,
        accountNumber: selected?.account || "",
      }));
    } else {
      // Untuk input biasa dan file upload
      setForm((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  // Handler untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Tampilkan spinner
    setAlert({ type: "", message: "" }); // Reset alert

    try {
      // Simulasi URL gambar bukti (tidak diunggah sungguhan)
      const proofUrl = form.proof ? URL.createObjectURL(form.proof) : null;

      // Payload data yang dikirim ke API
      const payload = {
        name: form.name,
        email: form.email,
        course_slug: course.slug,
        package_type: course.packageType,
        price: Number(course.price.replace(/[^\d]/g, "")), // Hapus karakter non-digit
        payment_method: form.paymentMethod,
        account_number: form.accountNumber,
        proof_url: proofUrl,
      };

      // Kirim data ke API
      await registrationsPaketAPI.createRegistration(payload);

      // Berhasil
      setAlert({
        type: "success",
        message: "Pendaftaran berhasil! Kami akan memverifikasi dalam waktu 24 jam.",
      });

      // Reset form setelah berhasil
      setForm({
        name: "",
        email: "",
        paymentMethod: "",
        accountNumber: "",
        proof: null,
      });
    } catch (err) {
      // Gagal kirim data
      setAlert({
        type: "error",
        message: "Gagal mengirim data. Silakan periksa kembali dan coba lagi.",
      });
      console.error(err);
    } finally {
      setSubmitting(false); // Matikan spinner
    }
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      {/* Judul dan harga kursus */}
      <h2 className="text-2xl font-bold text-[#004C3F] mb-1">
        Daftar untuk: {course.title}
      </h2>
      <p className="text-lg font-semibold text-[#00B074] mb-4">
        Harga: {formatRupiah(Number(course.price.replace(/[^\d]/g, "")))}
      </p>

      {/* Formulir Pendaftaran */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Nama</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block font-semibold">Metode Pembayaran</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">-- Pilih Metode --</option>
            {paymentOptions.map((opt) => (
              <option key={opt.method} value={opt.method}>
                {opt.method}
              </option>
            ))}
          </select>
        </div>

        {/* Nomor rekening terisi otomatis dan hanya dibaca */}
        <div>
          <label className="block font-semibold">Nomor Rekening</label>
          <input
            name="accountNumber"
            value={form.accountNumber}
            readOnly
            className="w-full border p-2 rounded mt-1 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Upload bukti transfer */}
        <div>
          <label className="block font-semibold">Upload Bukti Pembayaran</label>
          <input
            name="proof"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#00B074] text-white py-2 rounded hover:bg-[#007f61]"
        >
          {submitting ? "Mengirim..." : "Daftar Sekarang"}
        </button>
      </form>

      {/* Spinner atau alert di bawah form */}
      <div className="mt-6">
        {submitting && (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        )}

        {alert.message && (
          <AlertBox type={alert.type} message={alert.message} />
        )}
      </div>
    </section>
  );
}
