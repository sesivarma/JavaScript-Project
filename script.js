const apiKey="4ce4d7a509669a14bbd3e7eb79945d31";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector("#btn");
const weatherIcon=document.querySelector(".weather-icon");
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") { // Check if the pressed key is Enter
        event.preventDefault(); // Prevent the default action if necessary
        searchButton.click(); // Trigger the button click
    }
});

async function checkWeather(city){
    const response =await fetch(apiUrl+city+ `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
    var data =await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}}

