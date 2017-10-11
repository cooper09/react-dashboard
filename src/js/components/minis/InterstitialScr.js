var React = require('react');
var AppActions = require('../../actions/AppActions');

var InterStitialScr = React.createClass({

    render: function () {
        //alert("CreateApp - createVisible: " + this.props.searchMe );
        if (!this.props.visible) {
            console.log(" Inerstitial.render - Inerstitial is off");
            return false; 
        } 

        return (
            <div>
                <div className='miniScrn center option animated fadeIn'>
                <form>
                    <label>Ad Unit Name:  </label>
                        <input type="text" name="name" /><br/><br/>
                    
                        <label>Ad Type:</label><br />
                        <select name="interstitialType">
                            <option value="text">Text</option>
                            <option value="image">Image</option>
                            <option value="video">video</option>
                        </select>
                        <br/><br/>
                        <input type="submit" value="Submit" className="btn btn-right"/>
                </form>
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end InterStitialScr

module.exports = InterStitialScr;