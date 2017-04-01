var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function(){
		return {
				isLoading: false
		}
	},
	handleSearch: function(location){
		var that = this;

		this.setState({isLoading: true})

		const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c75de935da6e48f9df16b4fada175dc5&units=metric';
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
	  fetch(requestUrl)
			.then(function(response){
				if (!response.ok) {
            throw Error(response.statusText);
        };
				return response.json();
			}).then(function(weatherObject) {
				that.setState({
					location: location,
					temp: Math.round(weatherObject.main.temp),
					isLoading: false
				});
			})
			.catch(function(err) {
			// Error :(
			console.log(err);
			that.setState({
				isLoading: false
			})
			});
	},
	render: function () {
		var {temp, location, isLoading} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && location){
				return <WeatherMessage location={location} temp={temp}/>;
			}
		};

		return (
			<div>
				<h2 className="text-center">Weather Component</h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>

		);
	}
});


module.exports = Weather;
