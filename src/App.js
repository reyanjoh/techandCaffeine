import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Prices from "./components/prices/Prices";
import Services from "./components/services/Services";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
          
      </Routes>      


      
      
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
