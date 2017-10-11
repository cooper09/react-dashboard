var React = require('react');
var AppActions = require('../../actions/AppActions');

var CreateCampaign = React.createClass({

    render: function () {
        if (!this.props.visible) {
            console.log("CreateCampaign - CreateCampaign is off");
            return false; 
        } 
        
        return (
            <div>
                <div className='miniScrn center option animated fadeIn'>
                <form>
                    <label>CampaignName:  </label>
                        <input type="text" name="name" /><br/><br/>
                    
                        <label>Platform:</label><br />
                        <select name="adPlatform">
                            <option value="RTB Auction">RTB Auction</option>
                            <option value="Server-to-Server">Server to Server</option>
                            <option value="Adtag">Adtag</option>                            
                        </select>
                        <br/><br/>
                        <input type="submit" value="Submit" className="btn btn-right"/>
                </form>
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = CreateCampaign;