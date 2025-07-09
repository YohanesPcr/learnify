import axios from "axios";

// Gunakan .env untuk menyimpan API_KEY & URL
const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/feedback";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const feedbackAPI = {
  async fetchFeedbacks() {
    try {
      const res = await axios.get(`${API_URL}?select=*&order=tanggal.desc`, {
        headers,
      });
      return res.data;
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
      throw err;
    }
  },

  async createFeedback(data) {
    try {
      // Tambahkan tanggal saat ini jika belum disediakan
      const feedbackData = {
        ...data,
        tanggal: data.tanggal || new Date().toISOString(),
      };

      const res = await axios.post(API_URL, feedbackData, {
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
      });

      return res.data[0];
    } catch (err) {
      console.error("Error creating feedback:", err);
      throw err;
    }
  },

  async updateFeedback(id, data) {
    try {
      const res = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
      });
      return res.data[0];
    } catch (err) {
      console.error("Error updating feedback:", err);
      throw err;
    }
  },

  async deleteFeedback(id) {
    try {
      const res = await axios.delete(`${API_URL}?id=eq.${id}`, {
        headers,
      });
      return res.data;
    } catch (err) {
      console.error("Error deleting feedback:", err);
      throw err;
    }
  },
};
