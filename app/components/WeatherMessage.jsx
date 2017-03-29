var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return(
		<h1>It's it {temp}<sup>o</sup>C in {location}</h1>
	);
}


module.exports = WeatherMessage;
