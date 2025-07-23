// components/CategorySection.jsx
const CategorySection = ({ title, news }) => {
  return (
    <div className="my-10">
      <h3 className="hindi-heading text-xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 reading:border-amber-200">
        {title}
      </h3>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex pb-4 border-b border-gray-100 dark:border-gray-700 reading:border-amber-100 last:border-0 last:pb-0"
          >
            <div className="bg-gray-200 dark:bg-gray-700 reading:bg-amber-200 w-4 h-4 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
            <h4 className="hindi-heading text-lg font-medium hover:text-primary transition-colors">
              {item}
            </h4>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="text-primary font-medium hover:text-primary-dark transition-colors">
          और समाचार देखें
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
