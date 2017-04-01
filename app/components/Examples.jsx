var React = require('react');
var {Link} = require('react-router');


var Examples = props => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are few locations to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Boston">Boston, USA</Link>
				</li>
				<li>
					<Link to="/?location=Warsaw">Warsaw, Poland</Link>
				</li>
				<li>
					<Link to="/?location=Berlin">Berlin, Germany</Link>
				</li>
				<li>
					<Link to="/?location=London">London, UK</Link>
				</li>
				<li>
					<Link to="/?location=Paris">Paris, France</Link>
				</li>
			</ol>
		</div>
	)};

module.exports = Examples;
