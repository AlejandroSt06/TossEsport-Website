import React from "react"
import Header from "../../Components/Header/Header"
import HomeHero from "../../Components/HomeHero/HomeHero"
import EventCalendar from "../../Components/HomeEventCalendar"
import OurTeam from "../../Components/OurTeam/OurTeam"
import Carousel from "../../Components/Carousel/Carousel"
import Footer from "../../Components/Footer/Footer"
import "../../App.css"
import "./home.css"
function HomePage(){

    return(
        <>
        <Header/>
        <HomeHero />
        <div className='background-dark px-0 mx-0'>
        <EventCalendar/>
        <OurTeam/>
        <Carousel/>
        </div> 
        <Footer />
               </>
    )
}
export default HomePage