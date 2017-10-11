var React = require('react');
var AppActions = require('../actions/AppActions');

var ComponentThree = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	//console.log("componentThree is off");
          return false;
        }

		return (
			<div>
				<div className='pageOne center option animated lightSpeedIn'>Analytics/Dashboard..
					<h3>{this.props.pages.id }</h3>
					<div className='closeMe' onClick={ handleItemClick.bind(this)}><center>Close</center></div>
				</div>
			</div>
			);	
			
			function handleItemClick (){
				// close up shop and check to see if we're on mobile

				AppActions.removeAnalytics('Hide Analytics Page');

				if (screen.width <= 732 ) {
                    AppActions.showSideBar('Show Sidebar');
                }//end if

			}//end handleItemClick
	}//end render

});//end ComponentThree

module.exports = ComponentThree;