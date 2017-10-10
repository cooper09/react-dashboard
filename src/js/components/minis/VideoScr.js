var React = require('react');
var AppActions = require('../../actions/AppActions');

var VideoScr = React.createClass({

    render: function () {
        //alert("CreateApp - createVisible: " + this.props.searchMe );
        if (!this.props.visible) {
            console.log("VideoScr.render - VideoScr is off");
            return false; 
        } 

        //console.log("SearchApp visible: ", this.props.searchVisible )

        return (
            <div>
                <div className='miniScrn'>
                <form>
                <label>Ad Unit Name:  </label>
                        <input type="text" name="name" /><br/><br/>
                    <label>Ad Unit Name:  </label>
                        <input type="text" name="name" /><br/><br/>
                    
                        <label>Ad Type:</label><br />
                        <select name="videoType">
                            <option value="regular">Regular</option>
                            <option value="reward">Reward</option>
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

module.exports = VideoScr;