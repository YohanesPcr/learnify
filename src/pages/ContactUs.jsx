// src/pages/ContactUs.jsx

import { useEffect, useState } from "react";
import { messagesAPI } from "../services/messagesAPI";
import AlertBox1 from "../components/AlertBox1";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const loadMessages = async () => {
    try {
      setLoading(true);
      const data = await messagesAPI.fetchMessages();
      setMessages(data.reverse());
    } catch {
      setError("Gagal memuat pesan");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await messagesAPI.createMessage(form);
      setSuccess("Pesan berhasil dikirim!");
      setForm({ name: "", email: "", message: "" });
      loadMessages();
    } catch {
      setError("Gagal mengirim pesan");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="bg-white p-10 rounded-xl shadow-md max-w-6xl mx-auto mt-10">
      <h2 className="text-center text-green-600 text-xl font-semibold mb-8 underline underline-offset-4">
        CONTACT US
      </h2>

      {error && <AlertBox1 type="error">{error}</AlertBox1>}
      {success && <AlertBox1 type="success">{success}</AlertBox1>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Leave us a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
            >
              {loading ? "Mengirim..." : "Send"}
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Message sent</h3>
          {loading && <LoadingSpinner text="Memuat pesan..." />}
          {!loading && messages.length === 0 && <EmptyState text="Belum ada pesan" />}
          {!loading && messages.length > 0 && (
            <ul className="space-y-4">
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <p className="font-semibold text-emerald-700">{msg.name}</p>
                  <p className="text-sm text-gray-500">{msg.email}</p>
                  <p className="mt-2">{msg.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
