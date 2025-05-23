import { Clock } from 'lucide-react';

export default function Categories() {
  const categories = ['Design', 'Education', 'Craft', 'Marketing'];

  const courseCards = [
    {
      title: 'UI/UX Design',
      desc: 'Learn how to design user-friendly and engaging interfaces with real-world projects.',
      image: '/img/uiux.jpg',
    },
    {
      title: 'Digital Marketing',
      desc: 'Master SEO, social media, and advertising to grow your brand and business online.',
      image: '/img/marketing.jpg',
    },
    {
      title: 'Web Development',
      desc: 'Build modern and responsive websites using HTML, CSS, JavaScript, and frameworks.',
      image: '/img/1.jpg',
    },
  ];

  return (
    <section id="categories-section" className="px-6 md:px-16 py-16">
      {/* Header & Search */}
      <div id="categories-header" className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 id="categories-title" className="text-2xl md:text-3xl font-bold text-[#2d2d2d]">
          Popular categories
        </h2>

        <div id="categories-search-wrapper" className="relative w-full md:w-80">
          <input
            id="categories-search"
            type="text"
            placeholder="Search your Course"
            className="w-full border border-[#00B074] rounded-md py-2 px-4 pr-10 focus:outline-none"
          />
          <button id="search-button" className="absolute right-3 top-2.5 text-[#00B074]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0012.9 12.9z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Category buttons */}
      <div id="category-buttons" className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
        {categories.map((cat, i) => (
          <button
            key={i}
            id={`category-button-${cat.toLowerCase()}`}
            className="bg-[#004C3F] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#006e59] transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div id="course-cards" className="grid md:grid-cols-3 gap-6 mb-4">
        {courseCards.map((course, i) => (
          <div key={i} id={`course-card-${i}`} className="bg-white shadow-sm rounded-2xl overflow-hidden p-3">
            <img
              id={`course-img-${i}`}
              src={course.image}
              alt={course.title}
              className="rounded-xl w-full h-48 object-cover"
            />
            <div id={`course-info-${i}`} className="text-left mt-3">
              <h4 id={`course-title-${i}`} className="text-[#00B074] font-semibold">
                {course.title}
              </h4>
              <p id={`course-desc-${i}`} className="text-sm text-gray-500 leading-relaxed">
                {course.desc}
              </p>
            </div>

            <div id={`course-footer-${i}`} className="flex justify-between items-center mt-4 px-2 pb-1">
              <div id={`course-duration-${i}`} className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>10 week</span>
              </div>
              <button
                id={`course-viewmore-${i}`}
                className="bg-[#004C3F] text-white px-4 py-1 rounded-md text-sm hover:bg-[#006e59] transition"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div id="view-all-wrapper" className="text-right mt-4">
        <a id="view-all-link" href="#" className="text-sm text-[#004C3F] hover:underline">
          View All &rarr;
        </a>
      </div>
    </section>
  );
}
