'use strict'

const view = document.getElementById('view');
const api_url = 'https://api.openweathermap.org/data/2.5/weather?';
const lat = document.getElementById('lat');;
const lon = document.getElementById('lon');
const appid = '7a0b654c530be664fd77cf116ebd6626';

function setTemplate(json) {
    let obj = JSON.parse(json); // String vom Server
    // console.log(obj.weather[0].icon);
    let tpl = '<img src="https://openweathermap.org/img/w/' + obj.weather[0].icon + '.png">';
    let temp = (obj.main.temp - 273.15);
    tpl = temp.toFixed(2) + '&deg;C';
    view.innerHTML = tpl;
}

function getWeather() {
    // Ajax Programmierung
    let instance = new XMLHttpRequest(); // Ajax Objekt

    // Methode des Ajax Objekts heißt 'open', asynchron
    instance.open('get', api_url + 'lat=' + lat.innerHTML + '&lon=' + lon.innerHTML + '&appid=' + appid, true);

    // Kommunikation mit Browser <-> Server Prüfung
    instance.onreadystatechange = function() {
        if(instance.status == 200 && instance.readyState == 4) {
            //Prozess Datenübertragung Server <-> Client fertig
            setTemplate(instance.responseText); // Antwort vom Server
        };
    }

    instance.send(); // Ajax Prozess starten
}

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(p) {
        lat.innerHTML = p.coords.latitude;
        lon.innerHTML = p.coords.longitude;

        getWeather();
    });
    
}


