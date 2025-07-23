// components/NewsCard.jsx
const NewsCard = ({ news }) => {
  return (
    <div className="bg-white dark:bg-gray-800 reading:bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {news.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 reading:text-amber-700/80">
            {news.readTime}
          </span>
        </div>
        <h3 className="hindi-heading text-xl font-bold mb-3 leading-tight hover:text-primary transition-colors">
          {news.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 reading:text-text-reading mb-4">
          {news.excerpt}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 reading:text-amber-700/80">
          <span>{news.date}</span>
          <button className="text-primary font-medium hover:text-primary-dark transition-colors">
            पढ़ना जारी रखें
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
