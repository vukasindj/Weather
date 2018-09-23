const weather = new Weather('Podgorica');
const ui = new UI;

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
weather.getWeather()
.then(results => {
    ui.paint(results);
   
}) 
.catch(err => console.log(err));
}