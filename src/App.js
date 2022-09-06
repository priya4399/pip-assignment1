import Carouselbanner from "./Components/Carouselbanner";
import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Event from "./Components/event";
import Navbar1 from "./Components/Navbar1";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
// import Home from "./Components/Home";
function App() {
  return (
    <>
     <Navbar1 />
    <Carouselbanner />
        <Router>
          <Routes>
          
            <Route exact path="/" element={
              <Event /> } />
           
            <Route exact path="/About" element={<About/>} />
         
            <Route exact path="/ContactUs" element={
              <ContactUs/>} />
         
          </Routes>
        
        </Router>
       
        {/* <Carouselbanner />

        <Event /> */}
    </>
  );
}

export default App;
