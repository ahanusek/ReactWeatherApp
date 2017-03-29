// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c75de935da6e48f9df16b4fada175dc5&units=metric';
//
// module.exports = {
// 	getTemp: function(location){
// 		var encodedLocation = encodeURIComponent(location);
// 		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
//
// 		return fetch(requestUrl)
// 			.then(function(response){
// 				var response = response.json()
// 				if(response.data.cod && res.data.message){
// 					throw new Error(res.data.message);
// 				} else {
// 					return response.data.main.temp;
// 				}
// 			}, function(err){
// 					throw new Error(err.data.message);
// 			});
// 	}
// }
