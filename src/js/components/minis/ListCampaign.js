var React = require('react');
var AppActions = require('../../actions/AppActions');

var ListCampaign = React.createClass({

    render: function () {
        if (!this.props.visible) {
            console.log("ListCampaign - ListCampaign is off");
            return false; 
        } 

        //console.log("SearchApp visible: ", this.props.searchVisible )

        return (
            <div>
                <div className='miniScrn center option animated fadeIn'>
                    List Campaigns here...
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = ListCampaign;