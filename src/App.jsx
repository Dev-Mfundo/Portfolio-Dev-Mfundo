import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/contact'

function App() {
  return(
    <div>
      <Header/>
      <main>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
