var React = require('react');
var AppActions = require('../../actions/AppActions');

var CreateApp = React.createClass({

    render: function () {
        //alert("CreateApp - createVisible: " + this.props.searchMe );
        if (!this.props.searchMe) {
            console.log(" CreateApp.render - CreateApp is off");
            return false; 
        } 

        //console.log("SearchApp visible: ", this.props.searchVisible )

        return (
            <div>
                <div className='miniScrn'>
                <form>
                    <label>Ad Unit Name:  </label>
                        <input type="text" name="name" /><br/><br/>
                    
                        <label>Platform:</label><br />
                        <select name="adPlatform">
                            <option value="ios">IOS</option>
                            <option value="android">Android</option>
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

module.exports = CreateApp;