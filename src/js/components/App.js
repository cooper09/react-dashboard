var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//cooper s - add subcomponents here

var SidePanel = require('./SidePanel.js');
var ComponentOne = require('./ComponentOne.js');
var ComponentTwo = require('./ComponentTwo.js');
var ComponentThree = require('./ComponentThree.js');
// Now lets get down to business
var AdUnit = require('./AdUnit.js');

function getAppState(){
	console.log("App.getAppState 2: ", AppStore.getCreateCampaignVisible());
	return {
		//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible(),
		threeVisible: AppStore.getThreeVisible(), 
		adUnitVisible: AppStore.getAdUnitVisible(), 
		sideBarVisible: AppStore.getSideBarVisible(),
		searchAppVisible: AppStore.getSearchAppVisible(),
		createAppVisible: AppStore.getCreateAppVisible(),
		listAppVisible: AppStore.getListAppVisible(),
		listCampaignVisible: AppStore.getListCampaignVisible(),
		createCampaignVisible: AppStore.getCreateCampaignVisible(),
		bannerScrVisible: AppStore.getBannerScrVisible(),
		videoScrVisible: AppStore.getVideoScrVisible(),
		interstitialScrVisible: AppStore.getInterstitialScrVisible()
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
	  if (screen.width <= 732 ) {
		  AppActions.hideSideBar('Hide Sidebar');
	  }
    },
    handleBtnClick2: function() {
      console.log('APP - Handle my button click 2 ');
	  AppActions.showTwo('Button Two click');
	  if (screen.width <= 732 ) {
		AppActions.hideSideBar('Hide Sidebar');
	  }
	},
	handleBtnClick3: function() {
		console.log('APP - Handle my button click 3');
		AppActions.showThree('Button Three click');
		if (screen.width <= 732 ) {
			AppActions.hideSideBar('Hide Sidebar');
		}
	  },
	render: function(){
		
		var listOfApps = [{
			"id": 1,
			"image": "img/generic.png",
			"text" : "This is App One"
		},{
		"id": 2,
		"image": "img/generic.png",
		"text" : "This is App Two"
		},{
		"id": 3,
		"image": "img/generic.png",
		"text" : "And this is App Three"
		}];

		var num = 0

		//var dsps = this.state.pages.map()

		return(
			<div>
				<img src="img/mpoint-logo-5.png" /><p className="header-font">mPoint AdXchange</p>
				 <div className="sidePanel">
				Current Apps:
				<br/><br/>
				<SidePanel apps={listOfApps} numItems={num} visible={this.state.sideBarVisible}/>
				 </div>
				 <button onClick={this.handleBtnClick} className="btn">Apps</button>
				 <button onClick={this.handleBtnClick2} className="btn">Campaigns</button>
				 <button onClick={this.handleBtnClick3} className="btn">Analytics</button>
				<ComponentOne  visible={this.state.oneVisible} searchVisible={this.state.searchAppVisible} createVisible={this.state.createAppVisible} listVisible={this.state.listAppVisible} apps={listOfApps} pages={this.state.pages }/>
				<ComponentTwo  visible={this.state.twoVisible} listCampaignVisible={this.state.listCampaignVisible} createCampaignVisible={this.state.createCampaignVisible}  pages={this.state.pages }/>
				<ComponentThree  visible={this.state.threeVisible} pages={this.state.pages }/>
				<AdUnit  visible={this.state.adUnitVisible} bannerVisible={this.state.bannerScrVisible} videoVisible={this.state.videoScrVisible} interstitialVisible={this.state.interstitialScrVisible}  pages={this.state.pages }/>
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