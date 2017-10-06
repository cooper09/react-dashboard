var React = require('react');

var ComponentThree = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentThree is off");
          return false;
        }

		return (
			<div>
				<div className='pageOne'>Add your adtag..
					<h3>{this.props.pages.id }</h3>
				</div>
			</div>
			);
	}//end render
});//end ComponentThree

module.exports = ComponentThree;