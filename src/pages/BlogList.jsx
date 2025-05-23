import articles from "../json/blog.json";
import PageHeader from '../components/PageHeader';// Ensure to import your PageHeader component  
export default function BlogList() {
  return (
    <div className="bg-[#ffffff] text-[#043334] font-sans">
    <PageHeader subtitle="Blog" title="Articles & News"/>  

   {/* Bagian Header Artikel */}
<section className="mt-16 mb-10">
  <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
    {/* Atas: Title + Filter */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#043334] leading-snug">
        Latest articles
      </h2>

      {/* Filter Button */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-[#176B5D] text-white px-4 py-2 rounded-full text-sm">
          All
        </button>
        <button className="bg-[#E7FAF5] text-[#176B5D] px-4 py-2 rounded-full text-sm">
          Marketing
        </button>
        <button className="bg-[#E7FAF5] text-[#176B5D] px-4 py-2 rounded-full text-sm">
          Technology
        </button>
        <button className="bg-[#E7FAF5] text-[#176B5D] px-4 py-2 rounded-full text-sm">
          SEO
        </button>
        <button className="bg-[#E7FAF5] text-[#176B5D] px-4 py-2 rounded-full text-sm">
          Social Media
        </button>
      </div>
    </div>
  </div>
</section>

{/* Artikel Cards */}
<div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {articles.map((article) => (
    <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-[#7A7A7A]">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        <h3 className="font-semibold text-lg mt-2 text-[#043334] leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-[#4F4F4F] mt-2">
          {article.description}
        </p>
        <a href="#" className="text-[#176B5D] text-sm font-semibold mt-3 inline-block">
          Read More
        </a>
      </div>
    </div>
  ))}
</div>

  
    </div>
  );
}
