function EventCalendar(){

    const sectionImage = "https://cdn.dribbble.com/users/18463/screenshots/1898581/attachments/323811/fourgames-lg.png?resize=800x600&vertical=center"
return(


 <div className="container col-xxl-8 px-4 py-5 ">
            <div className="row flex-lg-row align-items-center g-5 py-5 mt-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={sectionImage} className="home-hero-image d-block mx-lg-auto img-fluid" alt="hero-image" width="900" height="100" loading="lazy" />
                </div>
                <div class="col-lg-6 pt-1 mt-4">
                    <h1 className="hero-title display-5 fw-bold lh-1 mb-5 mt-0">Evento de VideoJuegos 2023</h1>
                    <p className="lead mt-1 mb-5">
                        ¡Bienvenidos al evento de videojuegos del año!
                        Prepárate para sumergirte en un emocionante mundo de aventuras, competencias y diversión sin límites.


                    </p>
                    <div className="d-grid gap-2 mt-1 pt-1 d-md-flex justify-content-md-start">
                        <button type="button" className="btn home-hero-btn-primary btn-lg px-4 me-md-2">Primary</button>
                     
                    </div>
                </div>
            </div>
        </div>


    
)
}

export default EventCalendar