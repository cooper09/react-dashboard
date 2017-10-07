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
					<button onClick={this.handleBtnSearch} className="btn">Search Apps</button>
					<button onClick={this.handleBtnCreate} className="btn">Add Manually</button>
					<button onClick={this.handleBtnInterstitial} className="btn">Select from Current</button>
					<form>
						<label>
						Name:
						<input type="text" name="name" />
						</label>
						<input type="submit" value="Submit" />
				  	</form>
					<div className='closeBtn' onClick={ handleItemClick.bind(this)}>Close</div>
				</div>
			</div>
			);

			function handleItemClick (){
				// close up shop and check to see if we're on mobile
	
				AppActions.removeApp('Hide App Page');
	
			}//end handleItemClick
		
	}//end render
});//end ComponentOne

module.exports = ComponentOne;