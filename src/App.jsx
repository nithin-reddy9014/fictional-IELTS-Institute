import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/coursesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />
        {/* Courses Page */}
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
