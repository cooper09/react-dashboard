var React = require('react');

var ComponentTwo = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentTwo is off");
          return false;
        }

		return (
			<div>
				<div className='pageTwo'>Server-To-Server Fields Goes here..
					<h3>{this.props.pages.id }</h3>
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentTwo;