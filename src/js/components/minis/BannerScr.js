var React = require('react');
var AppActions = require('../../actions/AppActions');

var BannerScr = React.createClass({

    render: function () {

        if (!this.props.visible) {
            console.log(" BannerScr.render - BannerScr is off");
            return false; 
        } 

        //alert("BannerScr visible: ", this.props.searchVisible )

        return (
            <div>
                <div className='miniScrn'>
                    BannerScr goes here..
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = BannerScr;