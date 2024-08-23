import { useState, useEffect, FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/styles.css'; 
import  { MobileMenu }  from "./components/mobilemenu";
import Cursor from "./components/cursor";
import { About } from "./components/about";
import  Home from "./components/home";
import { Contact } from "./components/contact";
import  RecentWork  from "./components/recentwork";
import Blog from "./components/blog"

export const App: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
    );
  }

  return (
    <Router>
      <div
        className="kioto_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="rollIn"
        data-exit="rollOut"
      >
        <MobileMenu />
        <Cursor />
        <div className="mouse-cursor">
          <div className="cursor-inner"></div>
          <div className="cursor-outer"></div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recentwork" element={<RecentWork />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
