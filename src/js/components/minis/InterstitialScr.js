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
                <div className='miniScrn'>
                    InterStitial Screen goes here..
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end InterStitialScr

module.exports = InterStitialScr;