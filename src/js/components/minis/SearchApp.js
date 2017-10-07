var React = require('react');
var AppActions = require('../../actions/AppActions');

var SearchApp = React.createClass({

    render: function () {
        alert("SearchApp - searchVisible: " + this.props.searchMe );
        if (!this.props.searchMe) {
            console.log("SearchApp is off");
            return false; 
        } 

        //console.log("SearchApp visible: ", this.props.searchVisible )

        return (
            <div>
                <div className='miniScrn'>
                    <form>
                        <label>
                        Search for App 2:
                        <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = SearchApp;