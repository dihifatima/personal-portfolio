import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
 export default function App() {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   
   <About></About>
      <Projects/>

   <Experience/>
   <Skills/>
   <Contact/>
   <Footer/>
   </>
  )
}