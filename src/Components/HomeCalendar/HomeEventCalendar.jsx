import React, { Component } from 'react';
import CountDown from "../CountDown/CountDown"
// Countdown Component
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown = () => {
    const targetDate = new Date(this.props.targetDate).getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    this.setState({ days, hours, minutes, seconds });
  };

  render() {
      return  <CountDown days = {this.state.days} hours =  {this.state.hours} minutes = {this.state.minutes} seconds = {this.state.seconds} />
   
   
  }
}

// EventCalendar Component
function EventCalendar() {
  const sectionImage = "https://i.pinimg.com/736x/3a/dd/3f/3add3fee70905528c05a37c78b8e982f.jpg";
  const targetDate = "2023-12-31 23:59:59"; // Imposta la data di destinazione del countdown

  return (
    <div className="container col-xxl-8 px-4 py-5 event-calendar">

      <div className="row flex-lg-row align-items-center g-5 py-5 my-5 pb-5">
        <div className="col-12 col-sm-8 col-lg-6 ">
          <img src={sectionImage} className="event-calendar-image d-block mx-lg-auto img-fluid" alt="hero-image" width="900" height="100" loading="lazy" />
        </div>
        <div className="col-lg-6 pt-1 mt-4">
          <h1 className="hero-title display-5 fw-bold lh-1 mb-4 mt-3">Evento de VideoJuegos 2023</h1>
          <p className="lead mb-5">
            ¡Bienvenidos al evento de videojuegos del año!
            Prepárate para sumergirte en un emocionante mundo de aventuras, competencias y diversión sin límites.
          </p>
          <div className="d-grid gap-2 mt-4 pt-3 d-md-flex justify-content-md-start">
          <div className="countdown-wrapper">
        <Countdown targetDate={targetDate} />
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;
