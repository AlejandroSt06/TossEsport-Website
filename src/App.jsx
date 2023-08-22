
import './App.css'
import Header from './Header'
import Hero from './Hero'
import CardSection from './Card-section/CardSection'
import Footer from './Footer/Footer'
import Features from './Features/Features'
function App() {
  return(
<>
   <Header />
   <Hero />
   <div className='background-dark'>
   <CardSection/>  
   <Features />
   </div>
   <Footer />
   
   </>
  )
}

export default App
