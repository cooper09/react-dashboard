var React = require('react');
var AppActions = require('../../actions/AppActions');

var CreateCampaign = React.createClass({

    render: function () {
        //alert("CreateCampaign: " + this.props.createCampaignVisible );
        if (!this.props.createCampaignVisible) {
            console.log("CreateCampaign - CreateCampaign is off");
            return false; 
        } 


        return (
            <div>
                <div className='miniScrn'>
                    Create Campaign here...
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = CreateCampaign;