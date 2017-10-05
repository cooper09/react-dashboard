var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//cooper s - add subcomponents here

var ComponentOne = require('./ComponentOne.js');
var ComponentTwo = require('./ComponentTwo.js');
var ComponentThree = require('./ComponentThree.js');

function getAppState(){
	console.log("App.getAppState: ", AppStore.getOneVisible());
	return {
		//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible()
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAppState();

	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},
	handleBtnClick: function() {
      console.log('APP - Handle my button click 1 ');
      AppActions.myEvent('Button One click');
    },
    handleBtnClick2: function() {
      console.log('APP - Handle my button click 2 ');
      AppActions.showTwo('Button Two click');
	},
	handleBtnClick3: function() {
		console.log('APP - Handle my button click 3');
		AppActions.showThree('Button Three click');
	  },
	render: function(){

		//var dsps = this.state.pages.map()

		return(
			<div>
				<img src="img/mpoint-logo-5.png" /><p className="header-font">mPoint AdXchange Dashboard</p>
				 <br/><br/>
				 <div className="sidePanel">Side Panel Goes Here</div>
				 <button onClick={this.handleBtnClick} className="btn">RTB Auction</button>
				 <button onClick={this.handleBtnClick2} className="btn">Server To Server</button>
				 <button onClick={this.handleBtnClick3} className="btn">Ad Tag</button>
				<ComponentOne  visible={this.state.oneVisible} pages={this.state.pages }/>
				<ComponentTwo  visible={this.state.twoVisible} pages={this.state.pages }/>
				<ComponentThree  visible={this.state.threeVisible} pages={this.state.pages }/>
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		console.log("A change has occured....")
		this.setState(getAppState());
	}
});

module.exports = App;