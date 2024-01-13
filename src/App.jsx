import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
// import{} from ''
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';

import './style/app.scss'
import './style/Header.scss'
import './style/Home.scss'
import './style/Footer.scss'
import './style/Contact.scss'
import './style/mediaquery.scss'

function App() {
  return(
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
  </Routes>
  <Footer/>
</Router>
  
  )
}

export default App;
