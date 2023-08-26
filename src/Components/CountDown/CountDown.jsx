function CountDown(props){
return(
<div className="countdown">
<div>{props.days} <span>dias</span></div>
<div>{props.hours} <span>oras</span></div>
<div>{props.minutes} <span>minutos</span></div>
<div>{props.seconds} <span>segundos</span></div>

</div>

)



}



export default CountDown
