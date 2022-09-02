import {Routes, Route} from 'react-router-dom'
import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import About from './components/about/about'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
