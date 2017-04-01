var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function(){
		return {
				isLoading: false,
				errorMessage: undefined
		}
	},
	handleSearch: function(location){
		var that = this;

		this.setState({isLoading: true, errorMessage: undefined})

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
			that.setState({
				isLoading: false,
				errorMessage: err.message
			})
			});
	},
	render: function () {
		var {temp, location, isLoading, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && location){
				return <WeatherMessage location={location} temp={temp}/>;
			}
		};

		function renderError(){
			if(typeof errorMessage === "string"){
				return <ErrorModal message={errorMessage}/>
			}
		};

		return (
			<div>
				<h2 className="text-center page-title">Get Weather</h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>

		);
	}
});


module.exports = Weather;
