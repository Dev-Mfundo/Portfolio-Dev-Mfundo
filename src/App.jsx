import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/contact'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return(
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
