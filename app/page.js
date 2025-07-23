// app/page.jsx
import BreakingNews from "@/components/BreakingNews";
import NewsCard from "@/components/NewsCard";
import CategorySection from "@/components/CategorySection";
import TrendingNews from "@/components/TrendingNews";

export default function Home() {
  const breakingNews = {
    title:
      "मोदी सरकार ने की नई शिक्षा नीति की घोषणा, अब 5वीं कक्षा तक मातृभाषा में शिक्षा अनिवार्य",
    category: "राजनीति",
    time: "2 घंटे पहले",
  };

  const featuredNews = [
    {
      id: 1,
      title: "चंद्रयान-4 मिशन की तैयारियां पूरी, इस साल होगा प्रक्षेपण",
      excerpt:
        "भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) ने चंद्रयान-4 मिशन के लिए सभी तैयारियां पूरी कर ली हैं। इसरो चेयरमैन एस. सोमनाथ ने बताया कि यह मिशन इस साल के अंत तक लॉन्च किया जाएगा।",
      category: "तकनीक",
      date: "15 मई, 2023",
      readTime: "4 मिनट",
      image: "/tech.jpg",
    },
    {
      id: 2,
      title: "विम्बलडन में सानिया मिर्जा की जोड़ी ने जीता खिताब",
      excerpt:
        "भारतीय टेनिस स्टार सानिया मिर्जा ने अपने करियर के अंतिम विम्बलडन टूर्नामेंट में महिला युगल का खिताब जीत लिया है। सानिया और उनकी साथी ची यू-फान ने फाइनल में शीर्ष वरीयता प्राप्त जोड़ी को हराया।",
      category: "खेल",
      date: "14 मई, 2023",
      readTime: "3 मिनट",
      image: "/sports.jpg",
    },
    {
      id: 3,
      title: "बॉलीवुड में वापसी करेंगे शाहरुख खान, डॉन 3 में नजर आएंगे",
      excerpt:
        "सुपरस्टार शाहरुख खान अगले साल रिलीज होने वाली फिल्म डॉन 3 में वापसी करेंगे। फिल्म के निर्देशक फरहान अख्तर ने इसकी पुष्टि की है। फिल्म की शूटिंग इसी साल अक्टूबर में शुरू होगी।",
      category: "मनोरंजन",
      date: "13 मई, 2023",
      readTime: "5 मिनट",
      image: "/entertainment.jpg",
    },
  ];

  const trendingNews = [
    {
      id: 1,
      title: "महंगाई पर नियंत्रण के लिए RBI ने बढ़ाई रेपो दर",
      rank: 1,
    },
    {
      id: 2,
      title: "उत्तराखंड में बादल फटने से 12 लोगों की मौत",
      rank: 2,
    },
    {
      id: 3,
      title: "अमेरिकी राष्ट्रपति भारत दौरे पर आएंगे जुलाई में",
      rank: 3,
    },
    {
      id: 4,
      title: "आईपीएल फाइनल: चेन्नई सुपर किंग्स बनाम गुजरात टाइटन्स",
      rank: 4,
    },
  ];

  return (
    <div className="space-y-10">
      <BreakingNews news={breakingNews} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="hindi-heading text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 reading:border-amber-200">
            प्रमुख समाचार
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          <CategorySection
            title="राजनीति"
            news={[
              "केंद्र सरकार ने जम्मू-कश्मीर में पंचायत चुनावों की घोषणा की",
              "ममता बनर्जी ने केंद्र सरकार पर लगाया TMC विधायकों को टारगेट करने का आरोप",
              "उत्तर प्रदेश में योगी सरकार का बड़ा फैसला, अब हर जिले में बनेगा मेडिकल कॉलेज",
            ]}
          />

          <CategorySection
            title="व्यापार"
            news={[
              "रिलायंस ने लॉन्च किया नया 5G स्मार्टफोन, कीमत सिर्फ 8,999 रुपये",
              "एडानी ग्रुप ने विदेशों में बढ़ाई निवेश की योजना",
              "शेयर बाजार में तेजी, सेंसेक्स 800 अंक ऊपर",
            ]}
          />
        </div>

        <div className="lg:col-span-1">
          <TrendingNews news={trendingNews} />

          <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-white mb-8">
            <h3 className="hindi-heading text-xl font-bold mb-4">
              न्यूज़लेटर सदस्यता
            </h3>
            <p className="mb-4">दैनिक समाचार अपने इनबॉक्स में प्राप्त करें</p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="आपका नाम"
                className="w-full px-4 py-2 rounded text-gray-900"
              />
              <input
                type="email"
                placeholder="आपका ईमेल"
                className="w-full px-4 py-2 rounded text-gray-900"
              />
              <button className="w-full bg-white text-primary font-bold py-2 rounded hover:bg-gray-100 transition-colors">
                सदस्यता लें
              </button>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 reading:bg-amber-50 p-6 rounded-xl">
            <h3 className="hindi-heading text-xl font-bold mb-4">
              आज का विचार
            </h3>
            <div className="text-center italic p-4 border-l-4 border-primary bg-white dark:bg-gray-900 reading:bg-amber-100 rounded-r">
              <p className="text-lg">
                "सफलता वह नहीं जो आपके पास है, बल्कि वह है जो आप हैं।"
              </p>
              <p className="mt-2">- डॉ. ए.पी.जे. अब्दुल कलाम</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
