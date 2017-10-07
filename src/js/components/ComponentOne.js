var React = require('react');
var AppActions = require('../actions/AppActions');

var ComponentOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
		}

		
		return (
			<div>
				<div className='pageTwo'>App Manager
					<h3>{this.props.pages.id }</h3>
					<button onClick={handleBtnSearch.bind(this)} className="btn-hilite" id="btn1">Search Apps</button>
					<button onClick={handleBtnCreate} className="btn" id="btn2">Add Manually</button>
					<button onClick={handleBtnList} className="btn" id="btn3">Select from Current</button>
					<form>
						<label>
						Search 2:
						<input type="text" name="name" />
						</label>
						<input type="submit" value="Submit" />
				  	</form>
					<div className='closeBtn' onClick={ handleCloseClick.bind(this)}><center>Close</center></div>
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
		}

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
		}

		function handleBtnList (){
			console.log("ComponentOne.handleBtn List - List Apps");

			$('#btn3').removeClass("btn");
			$('#btn3').addClass("btn-hilite");

			$('#btn1').removeClass("btn-hilite");
			$('#btn1').addClass("btn");

			$('#btn2').removeClass("btn-hilite");
			$('#btn2').addClass("btn");
		}

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