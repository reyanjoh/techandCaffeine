import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/about" element={<AboutUs />}/>
          
      </Routes>      

      <Footer />
    </div>
  );
}

export default App;
