var React = require('react');
var AppActions = require('../actions/AppActions');

var CreateCampaign = require('./minis/CreateCampaign.js');
var ListCampaign = require('./minis/ListCampaign.js');

var ComponentTwo = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	//console.log("componentTwo is off");
          return false;
        }

		return (
			<div>
				<div className='pageTwo bg-wrapper center option animated zoomInUp"'>Campaign Manager
					<br/><br/>
					<h3>{this.props.pages.id }</h3>

					<button onClick={handleBtnSearch.bind(this)} className="btn-hilite" id="btn10">List Campaigns</button>
					<button onClick={handleBtnCreate.bind(this)} className="btn" id="btn11">Create Campaign</button>

					<ListCampaign visible={this.props.listCampaignVisible} />
					<CreateCampaign visible={this.props.createCampaignVisible} />

					<div className='closeMe' onClick={ handleItemClick.bind(this)}><center>Close</center></div>										
				</div>
			</div>
			);

			function handleBtnSearch() {
				//alert("Button One");
				$('#btn10').removeClass("btn");
				$('#btn10').addClass("btn-hilite");
	
				$('#btn11').removeClass("btn-hilite");
				$('#btn11').addClass("btn");

				AppActions.showCampaignList('Show list campaignm screen');
				AppActions.removeCreateCampaign('Remove create campaign screen'); 

			}
		
			function handleBtnCreate () {
				//alert("Button Two");
				$('#btn11').removeClass("btn");
				$('#btn11').addClass("btn-hilite");
	
				$('#btn10').removeClass("btn-hilite");
				$('#btn10').addClass("btn");

				AppActions.showCampaignCreate('Show create campaignm screen');
				AppActions.removeCampaignList('Remove list campaign screen'); 
			}

			function testMe (){
				alert("TaDA!!!");

			}//end handleItemClick

			function handleItemClick (){
				// close up shop and check to see if we're on mobile
				AppActions.removeCampaign('Hide Campaign Page');

				if (screen.width <= 732 ) {
                    AppActions.showSideBar('Show Sidebar');
                }//end if
	
			}//end handleItemClick
	}//end render
});//end ComponentOne

module.exports = ComponentTwo;