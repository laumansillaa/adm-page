import {Routes, Route} from 'react-router-dom'
import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Services from './components/services/services';
import People from './components/people/people'
import Contact from './components/contact/contact'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path= '/services' element={<Services/>}/>
          <Route exact path= '/people' element={<People/>}/>
          <Route exact path= '/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
