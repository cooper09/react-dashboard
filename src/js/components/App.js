var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//cooper s - add subcomponents here

var ComponentOne = require('./ComponentOne.js');
var ComponentTwo = require('./ComponentTwo.js');

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
      console.log('APP - Handle my button click: ');
      AppActions.myEvent('Button One click');
    },
    handleBtnClick2: function() {
      console.log('APP - Handle my button click: ');
      AppActions.showTwo('Button Two click');
    },
	render: function(){

		//var dsps = this.state.pages.map()

		return(
			<div>
				<img src="img/mpoint-logo-5.png" /><p className="header-font">mPoint Data Dashboard</p>
				 <button onClick={this.handleBtnClick} className="btn">Currency by DSP</button>
				 <button onClick={this.handleBtnClick2} className="btn">Dashboard Two</button>
				<ComponentOne  visible={this.state.oneVisible} pages={this.state.pages }/>
				<ComponentTwo  visible={this.state.twoVisible} pages={this.state.pages }/>
				
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