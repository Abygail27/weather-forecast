var key = 'e399959f6cfe8f81a75fc4def72901f6';

const cityIDs = [
  "london",
  "tokyo",
  "chicago",
  "new york",
  "sidney",
  "seattle", 
  "hong kong",
  "buenos aires"];
  
  
      
 weather = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityIDs}&APPID=e399959f6cfe8f81a75fc4def72901f6`)  
  .then(function(resp) { return resp.json() }) 
  .then(function(data) {

printWeather(data);

  })
  .catch(function() {
  });
}
window.onload = function() {
  weather();
}


 printWeather = (d) => {

   var celcius = Math.round(parseFloat(d.main.temp)-273.15);
   
   document.getElementById( 'city-name').innerHTML = 'nombre de la ciudad:<br><br>' + d.name;
   document.getElementById('weather-city').innerHTML = d.weather[0].description;
   document.getElementById('weather-temperature').innerHTML = celcius + '&deg;';
   document.getElementById('weather-speed').innerHTML = d.wind.speed; 
   document.getElementById('weather-cor').innerHTML = 'lat: <br>' + '(' + d.coord.lat + ')'; 
   document.getElementById('weather-cor-second').innerHTML = 'lon: <br>' + '(' + d.coord.lon  + ')'; 
   
   handleClick = (printWeather) => {
    displayRadioValue.addEventListener("click", function(){
      alert(printWeather.value);
   
     })
  }
  
  
  
}




//handleClick = () => {
  //var radioButton = document.getElementsByName('optradio');
  //displayRadioValue.addEventListener("click", function(){
   //alert(radioButton).value();
  //})

//}





//citySelected = (printWeather) => {
  //const radioValue = document.getElementsByName('optradio'); 
  //displayRadioValue.addEventListener("click", (radioValue) => {
  //radioValue = event.target.value;
  //const finalArrayCity = printWeather.filterData(printWeather, displayRadioValue)
  //printWeather(finalArrayCity)
//})
//}
//console.log();


//displayRadioValue.addEventListener ("click" , () => {
  //const radioValue = document.getElementById('optradio');  
  //for (let city of cityIDs) {
    //console.log(city);
//}



//})


//cityArray.map(citySelected)

//to do: 

// mostrar los datos de la ciudad seleccionada con el boton de radio al darle buscar. 



 
//handleClick = (d) => {
  //displayRadioValue.addEventListener("click", function(){
    
    //var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    
    //document.getElementById( 'city-name').innerHTML = 'nombre de la ciudad:<br><br>' + d.name;
    //document.getElementById('weather-city').innerHTML = d.weather[0].description;
    //document.getElementById('weather-temperature').innerHTML = celcius + '&deg;';
    //document.getElementById('weather-speed').innerHTML = d.wind.speed; 
    //document.getElementById('weather-cor').innerHTML = 'lat: <br>' + '(' + d.coord.lat + ')'; 
    //document.getElementById('weather-cor-second').innerHTML = 'lon: <br>' + '(' + d.coord.lon  + ')'; 
    
  //})
  //return displayRadioValue.value = printWeather();
//}