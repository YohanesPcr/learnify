export default function PopularCategories() {
    const categories = ["Design", "Education", "Craft", "Marketing"];
  
    return (
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Popular categories</h2>
        <div className="max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search your Course"
            className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <button key={index} className="bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition">
              {cat}
            </button>
          ))}
        </div>
      </section>
    );
  }
  