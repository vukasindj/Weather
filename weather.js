class Weather {

    constructor(city){
        this.apiKey = '84587c34438443bee0a2443858b4f9a1';
        this.city = city;
    } 

    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&&units=metric&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    } 

    changeLocation(city){
        this.city = city;
    }
}