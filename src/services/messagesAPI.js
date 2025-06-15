// src/services/messagesAPI.js
import axios from "axios";

// URL endpoint API Supabase untuk tabel messages
const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/messages";

// API Key dari Supabase (gunakan ENV file di produksi agar aman)
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

// Header default yang dikirim ke Supabase untuk otorisasi
const headers = {
  apikey: API_KEY, // Supabase API key
  Authorization: `Bearer ${API_KEY}`, // Supabase auth token
  "Content-Type": "application/json", // Format JSON
};

// Objek `messagesAPI` menyediakan fungsi CRUD
export const messagesAPI = {
  // Fungsi ambil semua pesan, diurutkan dari yang terbaru (created_at desc)
  async fetchMessages() {
    const res = await axios.get(`${API_URL}?select=*&order=created_at.desc`, {
      headers,
    });
    return res.data; // Hasil berupa array pesan
  },

  // Fungsi tambah pesan baru ke Supabase
  async createMessage(data) {
    const res = await axios.post(API_URL, data, {
      headers: {
        ...headers,
        Prefer: "return=representation", // Supaya response berisi data hasil insert
      },
    });
    return res.data[0]; // Kembalikan objek pesan yang baru dibuat
  },

  // Fungsi update pesan berdasarkan ID
  async updateMessage(id, data) {
    const res = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers: {
        ...headers,
        Prefer: "return=representation", // Dapatkan data hasil update
      },
    });
    return res.data[0]; // Kembalikan pesan yang sudah diperbarui
  },

  // Fungsi hapus pesan berdasarkan ID
  async deleteMessage(id) {
    const res = await axios.delete(`${API_URL}?id=eq.${id}`, {
      headers,
    });
    return res.data; // Supabase biasanya mengembalikan array kosong jika berhasil hapus
  },
};
