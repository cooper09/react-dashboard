var React = require('react');
var AppActions = require('../../actions/AppActions');

var ListApp2 = require('../ListApp.js');

var ListApp = React.createClass({

    render: function () {
        //alert("ListApp - listVisible: " + this.props.searchMe );
        if (!this.props.searchMe) {
            console.log("ListApp - ListApp is off");
            return false; 
        } 

        //console.log("SearchApp visible: ", this.props.searchVisible )
        		
       // alert("ListApps (mini): "+ this.props.apps);
        var items = this.props.apps;
        var num = 0;

        return (
            <div>
                <div className='miniScrn'>
                    ListForm is here...
                    { items.map(function(items) {
							console.log("Item no: ", num );
							++num;
							return <ListApp2 num={num} key={items.id} text={items.text} image={items.image} clickHandler={ handleItemClick.bind(this) } className="item"/>
						}) }
                </div>
            </div>
        );

        // button handlers - a rare breed
        function handleItemClick (){
            // close up shop and check to see if we're on mobile
                alert("ListSrc - handleItemClick");
            }//end handleItemClick
    }//end render

});//end SearchApp

module.exports = ListApp;