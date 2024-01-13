import{BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home"
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
  <Router>
    {/* <div>sadsad</div>
    <Button colorScheme="whatsapp">click</Button> */}
    {/* <Button py={1} m={300}>click1</Button> */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/Upload" element={<Upload/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
