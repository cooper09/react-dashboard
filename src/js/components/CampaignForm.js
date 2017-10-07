var React = require('react');

var CampaignForm = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
		}
		
		return (
			<div>
				<div className='campaign'>Campaign<h3>{this.props.pages.id }</h3>
				</div>
			</div>
			);
		
	}//end render
});//end CampaignForm

module.exports = CampaignForm;