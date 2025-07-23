// components/BreakingNews.jsx
const BreakingNews = ({ news }) => {
  return (
    <div className="bg-red-600 text-white py-3 px-4 rounded-lg flex items-center">
      <span className="font-bold px-3 py-1 bg-white text-red-600 rounded mr-3">
        ताज़ा खबर
      </span>
      <div className="flex-1 overflow-hidden">
        <span className="inline-block whitespace-nowrap animate-marquee">
          {news.title}
        </span>
      </div>
      <span className="ml-4 text-sm opacity-90">{news.time}</span>
    </div>
  );
};

export default BreakingNews;
