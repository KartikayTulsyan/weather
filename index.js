const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '372203aaaemshe41cacb5d093ff7p157bafjsn16d2eefe7e6a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};






const getWeather = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

                cityname.innerHTML = city;

                cloud_pct.innerHTML = response.cloud_pct;
                temp.innerHTML = response.temp;
                min_temp.innerHTML = response.min_temp;
                max_temp.innerHTML = response.max_temp;
                feels_like.innerHTML = response.feels_like;
                humidity.innerHTML = response.humidity;
                wind_speed.innerHTML = (response.wind_speed * 3.6).toFixed(1);
                // wind_degrees.innerHTML = response.wind_degrees;

                wind_directions = ["North", "North-North-East", "North-East", "East-North-East", "East", "East-South-East", "South-East", "South-South-East", "South", "South-South-West", "South-West", "West-South-West", "West", "West-North-West", "North-West", "North-Norht-West"];
                wind_degree = response.wind_degrees;
                index = Math.round(wind_degree / 22.5) % 16;
                wind_direction = wind_directions[index];
                wind_degrees.innerHTML = wind_direction;

                sunset.innerHTML = response.sunset;

                const sunriseTimestamp = response.sunrise; // Get the sunrise time in Unix timestamp format
                const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert to JavaScript Date object
                const utcTime = sunriseDate.toUTCString(); // Convert to UTC time string
                const istTime = new Date(utcTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
                sunrise.innerHTML = istTime;

                const sunriseTimestamp2 = response.sunset; // Get the sunrise time in Unix timestamp format
                const sunriseDate2 = new Date(sunriseTimestamp2 * 1000); // Convert to JavaScript Date object
                const utcTime2 = sunriseDate2.toUTCString(); // Convert to UTC time string
                const istTime2 = new Date(utcTime2).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
                sunset.innerHTML = istTime2;
            
        })
        .catch(err => console.error(err));
}







//bangalore
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        bangcloud_pct.innerHTML = response.cloud_pct + '%';
        bangtemp.innerHTML = response.temp + '\u00B0C';
        bangmin_temp.innerHTML = response.min_temp + '\u00B0C';
        bangmax_temp.innerHTML = response.max_temp + '\u00B0C';
        bangfeels_like.innerHTML = response.feels_like + '\u00B0C';
        banghumidity.innerHTML = response.humidity + '%';
        bangwind_speed.innerHTML = (response.wind_speed * 3.6).toFixed(1) + 'km/hr';

        wind_directions = ["North", "North-North-East", "North-East", "East-North-East", "East", "East-South-East", "South-East", "South-South-East", "South", "South-South-West", "South-West", "West-South-West", "West", "West-North-West", "North-West", "North-Norht-West"];
        wind_degree = response.wind_degrees;
        index = Math.round(wind_degree / 22.5) % 16;
        wind_direction = wind_directions[index];
        bangwind_degrees.innerHTML = wind_direction;

        const sunriseTimestamp = response.sunrise; // Get the sunrise time in Unix timestamp format
        const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert to JavaScript Date object
        const utcTime = sunriseDate.toUTCString(); // Convert to UTC time string
        const istTime = new Date(utcTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        bangsunrise.innerHTML = istTime;

        const sunriseTimestamp2 = response.sunset; // Get the sunrise time in Unix timestamp format
        const sunriseDate2 = new Date(sunriseTimestamp2 * 1000); // Convert to JavaScript Date object
        const utcTime2 = sunriseDate2.toUTCString(); // Convert to UTC time string
        const istTime2 = new Date(utcTime2).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        bangsunset.innerHTML = istTime2;
    })
    .catch(err => console.error(err));






// Shanghai 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        shangcloud_pct.innerHTML = response.cloud_pct + '%'
        shangtemp.innerHTML = response.temp + '\u00B0C';
        shangmin_temp.innerHTML = response.min_temp + '\u00B0C';
        shangmax_temp.innerHTML = response.max_temp + '\u00B0C';
        shangfeels_like.innerHTML = response.feels_like + '\u00B0C';
        shanghumidity.innerHTML = response.humidity + '%'
        shangwind_speed.innerHTML = (response.wind_speed * 3.6).toFixed(1) + 'km/hr'

        wind_directions = ["North", "North-North-East", "North-East", "East-North-East", "East", "East-South-East", "South-East", "South-South-East", "South", "South-South-West", "South-West", "West-South-West", "West", "West-North-West", "North-West", "North-Norht-West"];
        wind_degree = response.wind_degrees;
        index = Math.round(wind_degree / 22.5) % 16;
        wind_direction = wind_directions[index];
        shangwind_degrees.innerHTML = wind_direction;

        const sunriseTimestamp = response.sunrise; // Get the sunrise time in Unix timestamp format
        const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert to JavaScript Date object
        const utcTime = sunriseDate.toUTCString(); // Convert to UTC time string
        const istTime = new Date(utcTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        shangsunrise.innerHTML = istTime;

        const sunriseTimestamp2 = response.sunset; // Get the sunrise time in Unix timestamp format
        const sunriseDate2 = new Date(sunriseTimestamp2 * 1000); // Convert to JavaScript Date object
        const utcTime2 = sunriseDate2.toUTCString(); // Convert to UTC time string
        const istTime2 = new Date(utcTime2).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        shangsunset.innerHTML = istTime2;
    })
    .catch(err => console.error(err));




// delhi
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        delhicloud_pct.innerHTML = response.cloud_pct + '%'
        delhitemp.innerHTML = response.temp + '\u00B0C';
        delhimin_temp.innerHTML = response.min_temp + '\u00B0C';
        delhimax_temp.innerHTML = response.max_temp + '\u00B0C';
        delhifeels_like.innerHTML = response.feels_like + '\u00B0C';
        delhihumidity.innerHTML = response.humidity + '%'
        delhiwind_speed.innerHTML = (response.wind_speed * 3.6).toFixed(1) + 'km/hr'

        wind_directions = ["North", "North-North-East", "North-East", "East-North-East", "East", "East-South-East", "South-East", "South-South-East", "South", "South-South-West", "South-West", "West-South-West", "West", "West-North-West", "North-West", "North-Norht-West"];
        wind_degree = response.wind_degrees;
        index = Math.round(wind_degree / 22.5) % 16;
        wind_direction = wind_directions[index];
        delhiwind_degrees.innerHTML = wind_direction;

        const sunriseTimestamp = response.sunrise; // Get the sunrise time in Unix timestamp format
        const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert to JavaScript Date object
        const utcTime = sunriseDate.toUTCString(); // Convert to UTC time string
        const istTime = new Date(utcTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        delhisunrise.innerHTML = istTime;

        const sunriseTimestamp2 = response.sunset; // Get the sunrise time in Unix timestamp format
        const sunriseDate2 = new Date(sunriseTimestamp2 * 1000); // Convert to JavaScript Date object
        const utcTime2 = sunriseDate2.toUTCString(); // Convert to UTC time string
        const istTime2 = new Date(utcTime2).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        delhisunset.innerHTML = istTime2;
    })
    .catch(err => console.error(err));



//boston
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        bostoncloud_pct.innerHTML = response.cloud_pct + '%'
        bostontemp.innerHTML = response.temp + '\u00B0C';
        bostonmin_temp.innerHTML = response.min_temp + '\u00B0C';
        bostonmax_temp.innerHTML = response.max_temp + '\u00B0C';
        bostonfeels_like.innerHTML = response.feels_like + '\u00B0C';
        bostonhumidity.innerHTML = response.humidity + '%'
        bostonwind_speed.innerHTML = (response.wind_speed * 3.6).toFixed(1) + 'km/hr'

        wind_directions = ["North", "North-North-East", "North-East", "East-North-East", "East", "East-South-East", "South-East", "South-South-East", "South", "South-South-West", "South-West", "West-South-West", "West", "West-North-West", "North-West", "North-Norht-West"];
        wind_degree = response.wind_degrees;
        index = Math.round(wind_degree / 22.5) % 16;
        wind_direction = wind_directions[index];
        bostonwind_degrees.innerHTML = wind_direction;

        const sunriseTimestamp = response.sunrise; // Get the sunrise time in Unix timestamp format
        const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert to JavaScript Date object
        const utcTime = sunriseDate.toUTCString(); // Convert to UTC time string
        const istTime = new Date(utcTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        bostonsunrise.innerHTML = istTime;

        const sunriseTimestamp2 = response.sunset; // Get the sunrise time in Unix timestamp format
        const sunriseDate2 = new Date(sunriseTimestamp2 * 1000); // Convert to JavaScript Date object
        const utcTime2 = sunriseDate2.toUTCString(); // Convert to UTC time string
        const istTime2 = new Date(utcTime2).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        bostonsunset.innerHTML = istTime2;
    })
    .catch(err => console.error(err));


//san francisco
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=san francisco', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        sancloud_pct.innerHTML = response.cloud_pct + '%'
        santemp.innerHTML = response.temp + '\u00B0C';
        sanmin_temp.innerHTML = response.min_temp + '\u00B0C';
        sanmax_temp.innerHTML = response.max_temp + '\u00B0C';
        sanfeels_like.innerHTML = response.feels_like + '\u00B0C';
        sanhumidity.innerHTML = response.humidity + '%'
        sanwind_speed.innerHTML = (response.wind_speed * 3.6).toFixed(1) + 'km/hr'

        wind_directions = ["North", "North-North-East", "North-East", "East-North-East", "East", "East-South-East", "South-East", "South-South-East", "South", "South-South-West", "South-West", "West-South-West", "West", "West-North-West", "North-West", "North-Norht-West"];
        wind_degree = response.wind_degrees;
        index = Math.round(wind_degree / 22.5) % 16;
        wind_direction = wind_directions[index];
        sanwind_degrees.innerHTML = wind_direction;

        const sunriseTimestamp = response.sunrise; // Get the sunrise time in Unix timestamp format
        const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert to JavaScript Date object
        const utcTime = sunriseDate.toUTCString(); // Convert to UTC time string
        const istTime = new Date(utcTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        sansunrise.innerHTML = istTime;

        const sunriseTimestamp2 = response.sunset; // Get the sunrise time in Unix timestamp format
        const sunriseDate2 = new Date(sunriseTimestamp2 * 1000); // Convert to JavaScript Date object
        const utcTime2 = sunriseDate2.toUTCString(); // Convert to UTC time string
        const istTime2 = new Date(utcTime2).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); // Convert to IST time string    
        sansunset.innerHTML = istTime2;
    })
    .catch(err => console.error(err));



getWeather("Delhi");

document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
document.getElementById('submit2').addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city2.value);
});


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Get the latitude and longitude from the position object
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log(position)
        // // Display the latitude and longitude
        // alert("Your location: " + latitude + ", " + longitude);
    }, function (error) {
        if (error.code === error.PERMISSION_DENIED) {
            alert("You have denied permission to access your location. Some features of this site may not work correctly.");
        } else {
            alert("Unable to retrieve your location.");
        }
    });
}
     else {
            alert("Geolocation is not supported by this browser.");
        }
