var React = require('react');
var AppActions = require('../actions/AppActions');

var ComponentTwo = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentTwo is off");
          return false;
        }

		return (
			<div>
				<div className='pageTwo'>Campaign Manager
					<h3>{this.props.pages.id }</h3>
					<button onClick={this.handleBtnSearch} className="btn">List Campaigns</button>
					<button onClick={this.handleBtnCreate} className="btn">Create Campaign</button>
					<button onClick={this.handleBtnInterstitial} className="btn">Delete Campaign</button>
					<div className='closeBtn' onClick={ handleItemClick.bind(this)}>Close</div>										
				</div>
			</div>
			);

		
			function handleItemClick (){
				// close up shop and check to see if we're on mobile
	
				AppActions.removeCampaign('Hide Campaign Page');
	
			}//end handleItemClick
	}//end render
});//end ComponentOne

module.exports = ComponentTwo;