import axios from "axios";

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/registrations";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const registrationsPaketAPI = {
  async createRegistration(data) {
    try {
      const res = await axios.post(API_URL, data, {
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
      });
      return res.data;
    } catch (error) {
      console.error("Gagal kirim ke Supabase:", error.response?.data || error.message);
      throw error;
    }
  },
};