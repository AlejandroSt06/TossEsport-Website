function EventCalendar(){

    const sectionImage = "https://i.pinimg.com/736x/3a/dd/3f/3add3fee70905528c05a37c78b8e982f.jpg"
return(


 <div className="container col-xxl-8 px-4 py-1 event-calendar">
 <h2>EventCalendar</h2>
            <div className="row flex-lg-row align-items-center g-5 py-4 my-5 pb-3">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={sectionImage} className="event-calendar-image d-block mx-lg-auto img-fluid" alt="hero-image" width="900" height="100" loading="lazy" />
                </div>
                <div class="col-lg-6 pt-1 mt-4">
                    <h1 className="hero-title display-5 fw-bold lh-1 mb-4 mt-3">Evento de VideoJuegos 2023</h1>
                    <p className="lead mb-5">
                        ¡Bienvenidos al evento de videojuegos del año!
                        Prepárate para sumergirte en un emocionante mundo de aventuras, competencias y diversión sin límites.


                    </p>
                    <div className="d-grid gap-2 mt-4 pt-3 d-md-flex justify-content-md-start">
                        <button type="button" className="btn home-hero-btn-primary btn-lg px-4 me-md-2">Primary</button>
                     
                    </div>
                </div>
            </div>


</div>
    
)
}

export default EventCalendar