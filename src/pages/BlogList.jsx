import { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/blog";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(`${API_URL}?order=id.desc`, { headers });
        setArticles(res.data);
      } catch (error) {
        console.error("Gagal mengambil artikel:", error);
      }
    };
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#ffffff] text-[#043334] font-sans">
      <PageHeader subtitle="Blog" title="Articles & News" />

      <section className="mt-16 mb-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#043334] leading-snug">
              Latest articles
            </h2>
            <input
              type="text"
              placeholder="Search your Course"
              className="input input-success w-full md:w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="card bg-white shadow-sm rounded-lg overflow-hidden"
          >
            <figure className="h-52 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <div className="flex items-center gap-2 text-xs text-[#7A7A7A]">
                <span>{article.date}</span>
              </div>
              <h3 className="font-semibold text-lg mt-2 text-[#043334] leading-snug">
                {article.title}
              </h3>
              <a
                href={article.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#176B5D] text-sm font-semibold mt-3 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
