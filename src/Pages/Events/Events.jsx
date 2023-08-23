import Header from "../../Components/Header/Header"
import CardSection from "../../Components/Card-section/CardSection"
import Hero from "../../Hero"
import Features from "../../Components/Features/Features"
import Footer from "../../Components/Footer/Footer"
function Events() {
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
    export default Events