
/*
-	AJAX - Asynchronous JavaScript And XML, basically it allows us to asynchronously communicate with remote servers.
-	API – Application Programming interface and on a very high level, it’s basically a piece of software in order to basically allow applications to talk to each other. But the reference to web development and AJAX and server,
-	Well the API is not the server itself but it’s like part of the server. Like an application that receives requests and send back responses.

*/

function getWeather(woeid) {
    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            // console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
        })
        .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);
