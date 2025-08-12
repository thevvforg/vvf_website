import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Waitlist from './components/Waitlist'
import BecomeMember from "./components/BecomeMember"
import i18n from './i18n';
import { useTranslation } from "react-i18next";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
       <Router>
        <nav>
          <button className="px-3 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50" onClick={()=> changeLanguage("en")}>English</button>
          <button className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50" onClick={()=> changeLanguage("hi")}>हिंदी</button>
        </nav>
        <Hero/>
      <Routes>
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/membership" element={<BecomeMember />} />
      </Routes>
    </Router>
    <Features />
    <Footer/>
    </>
  );
}

export default App;
