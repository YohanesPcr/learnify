import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { registrationsPaketAPI } from "../services/registrationsPaketAPI";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/courses";
const API_KEY =   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";
// Ganti dengan API key kamu

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function RegisterPaketForm() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    paymentMethod: "",
    accountNumber: "",
    proofUrl: "",
  });

  const paymentOptions = [
    { method: "BCA", account: "1234567890 a.n PT Learnify Indonesia" },
    { method: "BNI", account: "4567891230 a.n PT Learnify Indonesia" },
    { method: "DANA", account: "085712345678 a.n Learnify Digital" },
    { method: "OVO", account: "089912345678 a.n Learnify Pay" },
  ];

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${API_URL}?slug=eq.${slug}`, { headers });
        setCourse(res.data[0] || null);
      } catch (err) {
        console.error("Gagal ambil data course:", err);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [slug]);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "paymentMethod") {
      const selected = paymentOptions.find((opt) => opt.method === value);
      setForm((prev) => ({
        ...prev,
        paymentMethod: value,
        accountNumber: selected?.account || "",
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setAlert({ type: "", message: "" });

    try {
      const cleanPrice = Number(course.price.replace(/[^\d]/g, ""));

      const payload = {
        name: form.name,
        email: form.email,
        course_slug: course.slug,
        package_type: course.packagetype,
        price: cleanPrice,
        payment_method: form.paymentMethod,
        account_number: form.accountNumber,
        proof_url: form.proofUrl,
      };

      await registrationsPaketAPI.createRegistration(payload);

      setAlert({
        type: "success",
        message: "Pendaftaran berhasil! Kami akan memverifikasi dalam waktu 24 jam.",
      });

      setForm({
        name: "",
        email: "",
        paymentMethod: "",
        accountNumber: "",
        proofUrl: "",
      });
    } catch (err) {
      setAlert({
        type: "error",
        message: "Gagal mengirim data. Silakan coba lagi.",
      });
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <LoadingSpinner />
      </div>
    );
  }

  if (!course) {
    return <EmptyState message="Kursus tidak ditemukan." />;
  }

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-[#004C3F] mb-1">
        Daftar untuk: {course.title}
      </h2>
      <p className="text-lg font-semibold text-[#00B074] mb-4">
        Harga: {formatRupiah(Number(course.price.replace(/[^\d]/g, "")))}
      </p>

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

        <div>
          <label className="block font-semibold">Nomor Rekening</label>
          <input
            name="accountNumber"
            value={form.accountNumber}
            readOnly
            className="w-full border p-2 rounded mt-1 bg-gray-100 text-gray-700"
          />
        </div>

        <div>
          <label className="block font-semibold">Link Bukti Pembayaran (URL Gambar)</label>
          <input
            name="proofUrl"
            type="url"
            required
            placeholder="https://..."
            value={form.proofUrl}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#00B074] text-white py-2 rounded hover:bg-[#007f61]"
        >
          {submitting ? "Mengirim..." : "Daftar Sekarang"}
        </button>
      </form>

      <div className="mt-6">
        {submitting && (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        )}
        {alert.message && <AlertBox type={alert.type} message={alert.message} />}
      </div>
    </section>
  );
}
