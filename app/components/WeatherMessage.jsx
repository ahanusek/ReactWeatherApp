var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return(
		<h3 className="text-center">It's it {temp}<sup>o</sup>C in {location}</h3>
	);
}


module.exports = WeatherMessage;
