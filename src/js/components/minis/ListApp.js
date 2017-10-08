var React = require('react');
var AppActions = require('../../actions/AppActions');

var ListApp = React.createClass({

    render: function () {
        //alert("ListApp - listVisible: " + this.props.searchMe );
        if (!this.props.searchMe) {
            console.log("ListApp - ListApp is off");
            return false; 
        } 

        //console.log("SearchApp visible: ", this.props.searchVisible )

        return (
            <div>
                <div className='miniScrn'>
                    ListForm is here...
                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = ListApp;