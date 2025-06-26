import axios from "axios";

// URL endpoint API Supabase untuk tabel messages
const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/courses";

// API Key dari Supabase (gunakan ENV file di produksi agar aman)
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export const coursesAPI = {
  async getAllCourses() {
    try {
      const res = await axios.get(`${API_URL}courses`, { headers });
      return res.data;
    } catch (error) {
      console.error("Gagal fetch courses:", error.response?.data || error.message);
      throw error;
    }
  },
};
