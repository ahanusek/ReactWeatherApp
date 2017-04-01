var React = require('react');


var ErrorModal = React.createClass({
	getDefaultProps: function(){
		return {
			title: 'Error'
		};
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function(){
		var myModal = new Foundation.Reveal($('#error-modal'));
		myModal.open();
	},
	render: function(){
		var {title, message} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>Error message: {message}</p>
				<p>
					<button className="button hollow" data-close="">OK</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;
