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
                    VideoScr goes here..
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = VideoScr;