import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact";
import { Route } from "react-router-dom";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import Deals from "./Components/Deals/Deals";
import DetailRoom from "./Components/DetailRoom/DetailRoom";

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
          <Route exact path="/" component={Home} />       
          <Route exact path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/deals" component={Deals} />
          <Route path="/rooms" component={DetailRoom} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

