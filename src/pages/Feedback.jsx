import { useEffect, useState } from "react";
import { feedbackAPI } from "../services/feedbackAPI";
import AlertBox1 from "../components/AlertBox1";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

export default function Feedback() {
  const [form, setForm] = useState({ nama: "", rating: "", deskripsi: "", tanggal: "" });
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const loadFeedbacks = async () => {
    try {
      setLoading(true);
      const data = await feedbackAPI.fetchFeedbacks();
      setFeedbacks(data.reverse());
    } catch {
      setError("Failed to load feedbacks");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ratingNumber = parseInt(form.rating);
    if (ratingNumber < 1 || ratingNumber > 5) {
      setError("Rating must be between 1 and 5");
      return;
    }

    try {
      setLoading(true);
      await feedbackAPI.createFeedback({
        nama: form.nama,
        rating: form.rating,
        deskripsi: form.deskripsi,
        tanggal: new Date().toISOString().split("T")[0],
      });
      setSuccess("Feedback successfully submitted!");
      setForm({ nama: "", rating: "", deskripsi: "", tanggal: "" });
      loadFeedbacks();
    } catch {
      setError("Failed to submit feedback");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const value = parseInt(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < value ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-center text-green-700 text-xl font-semibold mb-8 underline underline-offset-4">
        Customer Feedback
      </h2>

      {error && <AlertBox1 type="error">{error}</AlertBox1>}
      {success && <AlertBox1 type="success">{success}</AlertBox1>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* FORM */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-800">Submit Your Feedback</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1 text-green-800">Name</label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                className="w-full border border-green-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-green-800">Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                value={form.rating}
                onChange={handleChange}
                className="w-full border border-green-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-green-800">Description</label>
              <textarea
                name="deskripsi"
                rows="3"
                value={form.deskripsi}
                onChange={handleChange}
                className="w-full border border-green-300 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
            >
              {loading ? "Saving..." : "Submit"}
            </button>
          </form>
        </div>

        {/* LIST */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-800">Submitted Feedbacks</h3>
          {loading && <LoadingSpinner text="Loading feedbacks..." />}
          {!loading && feedbacks.length === 0 && <EmptyState text="No feedback submitted yet." />}
          {!loading && feedbacks.length > 0 && (
            <ul className="space-y-4">
              {feedbacks.map((item) => (
                <li
                  key={item.id}
                  className="border border-green-200 rounded-xl p-4 shadow-sm"
                >
                  <p className="font-semibold text-green-700">{item.nama}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>Rating:</span>
                    <span className="flex">{renderStars(item.rating)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Date: {item.tanggal}</p>
                  <p className="mt-1 text-gray-700">{item.deskripsi}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
