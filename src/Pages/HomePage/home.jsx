import React from "react"
import Header from "../../Components/Header/Header"
import HomeHero from "../../Components/HomeHero/HomeHero"
import EventCalendar from "../../Components/HomeEventCalendar"
import OurTeam from "../../Components/OurTeam/OurTeam"
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
        </div>        </>
    )
}
export default HomePage