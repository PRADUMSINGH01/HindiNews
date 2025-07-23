// components/TrendingNews.jsx
const TrendingNews = ({ news }) => {
  return (
    <div className="bg-white dark:bg-gray-800 reading:bg-amber-50 rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 reading:border-amber-200">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <h3 className="hindi-heading text-xl font-bold">ट्रेंडिंग समाचार</h3>
      </div>

      <div className="space-y-5">
        {news.map((item) => (
          <div key={item.id} className="flex group">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mr-4">
              {item.rank}
            </div>
            <h4 className="hindi-heading text-lg font-medium group-hover:text-primary transition-colors">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
