import { useEffect, useState } from "react";
import { feedbackAPI } from "../services/feedbackAPI";
import AlertBox1 from "../components/AlertBox1";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { AiFillEdit } from "react-icons/ai";

export default function Feedback() {
  const [form, setForm] = useState({ nama: "", rating: "", deskripsi: "", tanggal: "" });
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);

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
      if (editId) {
        await feedbackAPI.updateFeedback(editId, form);
        setSuccess("Feedback successfully updated!");
      } else {
        await feedbackAPI.createFeedback({
          nama: form.nama,
          rating: form.rating,
          deskripsi: form.deskripsi,
          tanggal: new Date().toISOString().split("T")[0],
        });
        setSuccess("Feedback successfully submitted!");
      }
      setForm({ nama: "", rating: "", deskripsi: "", tanggal: "" });
      setEditId(null);
      loadFeedbacks();
    } catch {
      setError(editId ? "Failed to update feedback" : "Failed to submit feedback");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const handleEdit = (item) => {
    setForm({
      nama: item.nama,
      rating: item.rating,
      deskripsi: item.deskripsi,
      tanggal: item.tanggal,
    });
    setEditId(item.id);
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

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
          <h3 className="text-lg font-semibold mb-4 text-green-800">
            {editId ? "Edit Feedback" : "Submit Your Feedback"}
          </h3>
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

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
              >
                {loading ? "Saving..." : editId ? "Update" : "Submit"}
              </button>
              {editId && (
                <button
                  type="button"
                  className="bg-gray-200 text-gray-800 px-4 rounded hover:bg-gray-300"
                  onClick={() => {
                    setForm({ nama: "", rating: "", deskripsi: "", tanggal: "" });
                    setEditId(null);
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
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
                  className="border border-green-200 rounded-xl p-4 relative shadow-sm"
                >
                  <p className="font-semibold text-green-700">{item.nama}</p>
                  <p className="text-sm text-gray-600">Rating: {item.rating}</p>
                  <p className="text-sm text-gray-500 mb-1">Date: {item.tanggal}</p>
                  <p className="mt-1 text-gray-700">{item.deskripsi}</p>
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-green-600 hover:text-green-800"
                      title="Edit"
                    >
                      <AiFillEdit />
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
