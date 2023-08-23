import React from "react"
import VgCard from "./VgCard"
import Category from "./Category";
function CardSection() {
    return (
        
        <div className="video-games d-flex flex-column flex-xl-row my-4">
        
                <Category />
           <div className="container">
            <h2 className ="px-5 my-4">VideoGames</h2>
                <div class="row row-cols-md--1 row-cols-lg-2 row-cols-xxl-3 g-4 mb-5 px-5 ">

                    <VgCard />
                    <VgCard />
                    <VgCard />
                    <VgCard />
                    <VgCard />
                    <VgCard />
                    <VgCard />
                    <VgCard />
                    <VgCard />
                </div>
            </div>
        </div>


    )

}
export default CardSection;