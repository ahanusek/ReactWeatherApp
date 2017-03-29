var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
	return (
		<div>
			<h2>Nav component</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{color: '#f0f'}} >Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{color: '#f0f'}} >About</Link>
				<Link to="/examples"activeClassName="active" activeStyle={{color: '#f0f'}} >Examples</Link>
		</div>
	);
}

module.exports = Nav;
