class UI {

    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.humidity = document.getElementById('w-humidity');
        this.icon = document.getElementById('w-icon');
        this.string = document.getElementById('w-string');
        this.wind = document.getElementById('w-wind');
        this.pressure = document.getElementById('w-pressure');
        this.country = document.getElementById('w-country');
        this.sunrise = document.getElementById('w-sunrise');

    }



paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.string.textContent = ` ${weather.main.temp.toFixed(0)} °C `;
    this.humidity.textContent = `Humidity: ${weather.main.humidity} % `;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
    this.country.textContent = `Country: ${weather.sys.country}`; 

    let date = new Date(weather.sys.sunrise*1000);
    // Hours part from the timestamp
    let hours = date.getHours();
   // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

   // Will display time in 10:30:23 format
   let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
   this.sunrise.textContent = `Sunrise: ${formattedTime}`;

}

}