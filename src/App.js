import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Prices from "./components/prices/Prices";
import FeaturedServices from "./components/services/FeaturedServices";
import Services from "./components/services/Services";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
          
      </Routes>      

      
      <FeaturedServices />
      <Prices />
      <div className="test"></div>
    </div>
  );
}

export default App;
