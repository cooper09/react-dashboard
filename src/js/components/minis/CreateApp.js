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
                    CreateApp goes here..
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = CreateApp;