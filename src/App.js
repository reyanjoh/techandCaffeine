import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import ScrollToTop from "./util/ScrollToTop";


function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>      

      <Footer />
    </div>
  );
}

export default App;
