var React = require('react');
var AppActions = require('../actions/AppActions');

var SearchApp = require('./minis/SearchApp.js');
var CreateApp = require('./minis/CreateApp.js');
var ListApp = require('./minis/ListApp.js');

var ComponentOne = React.createClass({

/*	getInitialState: function(){
        return {
            searchVisible: 'true'
        };
    }, */

	render: function() {
		 if (!this.props.visible) {
		 	//console.log("componentOne is off");
		  return false;
		}

		//alert("ComponentOne apps property: "+ this.props.apps );

		return (
			<div>
				<div className='pageTwo'>App Manager

				<br/><br/>
					<h3>{this.props.pages.id }</h3>

					<button onClick={handleBtnSearch} className="btn-hilite" id="btn1">Search Apps</button>
					<button onClick={handleBtnCreate} className="btn" id="btn2">Add Manually</button>
					<button onClick={handleBtnList} className="btn" id="btn3">Select from Current</button>
					
					<SearchApp searchMe={this.props.searchVisible} />
					<CreateApp searchMe={this.props.createVisible} />
					<ListApp searchMe={this.props.listVisible} apps={this.props.apps} />

					<div className='closeMe' onClick={ handleCloseClick.bind(this)}><center>Close</center></div>
				</div>
			</div>
			);

		// button handlers - a rare breed

		function handleBtnSearch (){
			console.log("ComponentOne.handleBtn Search - Search Apps: ");

			$('#btn1').removeClass("btn");
			$('#btn1').addClass("btn-hilite");

			$('#btn2').removeClass("btn-hilite");
			$('#btn2').addClass("btn");

			$('#btn3').removeClass("btn-hilite");
			$('#btn3').addClass("btn");

			AppActions.showSearchApp('Show Search app screen');
			AppActions.removeCreateApp('Remove create app screen');
			AppActions.removeListApp('Remove list app screen');

		}//end handleBtnSearch

		function handleBtnCreate (){
			console.log("ComponentOne.handleBtn Create - Create Apps");

			//$('#btn1').removeClass("btn-hilite");
			//$('#btn1').addClass("btn")

			$('#btn2').removeClass("btn");
			$('#btn2').addClass("btn-hilite");

			$('#btn1').removeClass("btn-hilite");
			$('#btn1').addClass("btn");

			$('#btn3').removeClass("btn-hilite");
			$('#btn3').addClass("btn");

			//this.props.searchVisible = false;
			//this.setState({searchVisible:'false'});

			AppActions.showCreateApp('Show create app screen');
			AppActions.removeSearchApp('Remove search app screen');
			AppActions.removeListApp('Remove list app screen');
		}//end handleBtnCreate

		function handleBtnList (){
			console.log("ComponentOne.handleBtn List - List Apps");

			$('#btn3').removeClass("btn");
			$('#btn3').addClass("btn-hilite");

			$('#btn1').removeClass("btn-hilite");
			$('#btn1').addClass("btn");

			$('#btn2').removeClass("btn-hilite");
			$('#btn2').addClass("btn");

			AppActions.showListApp('Show List App');
			AppActions.removeSearchApp('Remove search app screen');
			AppActions.removeCreateApp('Create create app screen');
		}// end handleBtnList

		// 	cooper - handle item click is just used for close 			
			function handleCloseClick (){
				// close up shop and check to see if we're on mobile
	
				AppActions.removeApp('Hide App Page');
			// SideBar is hidden on mobile 			
				if (screen.width <= 732 ) {
                    AppActions.showSideBar('Show Sidebar');
                }//end if
	
			}//end handleItemClick
		
	}//end render
});//end ComponentOne

module.exports = ComponentOne;