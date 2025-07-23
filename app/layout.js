// app/layout.jsx
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "समाचार दर्पण - ताज़ा खबरें हिंदी में",
  description:
    "भारत की सर्वश्रेष्ठ हिंदी न्यूज़ वेबसाइट - राजनीति, मनोरंजन, खेल, तकनीक",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <div className="min-h-screen bg-background-light dark:bg-background-dark reading:bg-background-reading text-text-light dark:text-text-dark reading:text-text-reading transition-colors duration-300">
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
            <footer className="py-8 bg-gray-100 dark:bg-gray-800 reading:bg-amber-50 mt-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4">समाचार दर्पण</h3>
                    <p className="text-sm opacity-80">
                      भारत की सर्वश्रेष्ठ हिंदी न्यूज़ वेबसाइट
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">श्रेणियाँ</h4>
                    <ul className="space-y-2">
                      {[
                        "राजनीति",
                        "मनोरंजन",
                        "खेल",
                        "तकनीक",
                        "व्यापार",
                        "स्वास्थ्य",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="hover:text-primary transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">उपयोगी लिंक</h4>
                    <ul className="space-y-2">
                      {[
                        "हमारे बारे में",
                        "संपर्क करें",
                        "गोपनीयता नीति",
                        "शर्तें",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="hover:text-primary transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">समाचारपत्र प्राप्त करें</h4>
                    <div className="flex flex-col space-y-3">
                      <input
                        type="email"
                        placeholder="आपका ईमेल"
                        className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 reading:border-amber-300 bg-transparent"
                      />
                      <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
                        सदस्यता लें
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 reading:border-amber-200 mt-8 pt-6 text-center text-sm opacity-80">
                  <p>
                    © {new Date().getFullYear()} समाचार दर्पण. सर्वाधिकार
                    सुरक्षित
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
