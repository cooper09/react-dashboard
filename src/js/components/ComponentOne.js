var React = require('react');

var ComponentOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
		}
		
		return (
			<div>
				<div className='pageOne'>RTB Fields Go here..
					<h3>{this.props.pages.id }</h3>
				</div>
			</div>
			);
		
	}//end render
});//end ComponentOne

module.exports = ComponentOne;