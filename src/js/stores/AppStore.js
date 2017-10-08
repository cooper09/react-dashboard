var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _pages = [];

var _oneVisible = false, _twoVisible = false, _threeVisible = false;
//cooper OK, lets get some cool stuff
var _adUnitVisible = false, _sideBarVisible = true, _campaignVisible=false;

// mini screens
var _searchAppVisible = true, _listAppVisible=false, _createAppVisible=false, _listCampaignVisible= true, _createCampaignVisible=false; 

// Method to load product data from mock API
function loadPageData(data) {
	//console.log("AppStore.loadPageData: ", data.map[0].DSPID );

	///console.log("AppStore.loadPageData: ", data );
  _pages = data; //data.map;
  console.log("AppStore.loadPageData: ", _pages );
}

	// Set cart visibility
function setOneVisible(visible) {
  _oneVisible = true;
	_twoVisible = false;
	_threeVisible = false;
	_adUnitVisible = false;
}

function hideAppForm(visible) {
	_oneVisible = false;
}

function setTwoVisible(visible) {
  _twoVisible = true;
	_oneVisible = false;
	_threeVisible = false;
	_adUnitVisible = false;
}

function setThreeVisible(visible) {
	_threeVisible = true;
	_twoVisible = false;
	_oneVisible = false;
	_adUnitVisible = false;	
}

function setAdUnitVisible(visible) {
	_adUnitVisible = true;
	_threeVisible = false;
	_twoVisible = false;
  _oneVisible = false;	
}

function hideAdUnitVisible(visible) {
	_adUnitVisible = false;
	_threeVisible = false;
	_twoVisible = false;
  _oneVisible = false;	
}

function hideSideBarVisible(visible) {
	_sideBarVisible = false;
}

function setSideBarVisible(visible) {
		_sideBarVisible = true;
		_adUnitVisible = false;
}//end setSideBarVisible

function hideCampaign(visible) {
	_twoVisible = false;
}
function hideAnalytics(visible) {
	_threeVisible = false;
}

// mini screens - ADDS

function setSearchAppVisible(visible) {
	_searchAppVisible = true;
}

function showSearchApp(visible) {
	console.log("open CreateApp");
	_searchAppVisible = true;
}

function showCreateApp(visible) {
	console.log("open CreateApp");
	_createAppVisible = true;
}

function showListApp(visible) {
	console.log("open ListApp");
	_listAppVisible = true;
}

function showSearchApp(visible) {
	console.log("open SearchApp");
	_searchAppVisible = true;
}
// mini screens - REMOVE
function hideSearchApp(visible) {
	console.log("close SearchApp");
	_searchAppVisible = false;
}
function hideCreateApp(visible) {
	console.log("close CreateApp");
	_createAppVisible = false;
}
function hideListApp(visible) {
	console.log("close ListApp");
	_listAppVisible = false;
}

var AppStore = assign({}, EventEmitter.prototype, {
	getPages: function () {
	    return _pages;
	  },
	  // Return cart visibility state
	getOneVisible: function () {
		//console.log('AppStore.getOneVisible: ' + _oneVisible );
		return _oneVisible;
	},
	getTwoVisible: function () {
		//console.log('AppStore.getTwoVisible: ' + _twoVisible );
		return _twoVisible;
	},
	getThreeVisible: function () {
		//console.log('AppStore.getThreeVisible: ' + _threeVisible );
		return _threeVisible;
	},
	getAdUnitVisible: function () {
		//console.log('AppStore.adUnitVisible: ' + _adUnitVisible );
		return _adUnitVisible;
	},
	getCampaignVisible: function () {
		//console.log('AppStore.campaignVisible: ' + _campaignVisible );
		return _campaignVisible;
	},
	getSideBarVisible: function () {
		//console.log('AppStore.campaignVisible: ' + _campaignVisible );
		return _sideBarVisible;
	},
	getSearchAppVisible: function () {
		//console.log('AppStore.campaignVisible: ' + _campaignVisible );
		return _searchAppVisible;
	},
	getCreateAppVisible: function () {
		//console.log('AppStore.campaignVisible: ' + _campaignVisible );
		return _createAppVisible;
	},
	getListAppVisible: function () {
		//console.log('AppStore.campaignVisible: ' + _campaignVisible );
		return _listAppVisible;
	},
	getListCampaignVisible: function () {
		//console.log('AppStore.campaignVisible: ' + _campaignVisible );
		return _listCampaignVisible;
	},
	getCreateCampaignVisible: function () {
		//console.log('AppStore.campaignVisible: ' + _campaignVisible );
		return _createCampaignVisible;
	},
	  // Set cart visibility - The TRUE Control
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	console.log("AppStore - AppDispatcher: ", action.actionType );
	switch(action.actionType){

		// Respond to RECEIVE_DATA action
	    case 'RECEIVE_DATA':
			console.log("AppStore - RECEIVE_DATA: ", action.data );	    
	      	loadPageData(action.data);
	      break;

		case 'MY_EVENT':
	  	  console.log("OK we have my own personal event. About now I should be changing some state: ", payload );
	      _visible=true;
	      setOneVisible(_visible);
	 	break;
	 	case 'TWO_VISIBLE':
	  	  console.log("Show page two: ", payload );
	      _visible=true;
	      setTwoVisible(_visible);
	 	break;
	 	case 'THREE_VISIBLE':
	  	  console.log("Show page three: ", payload );
	      _visible=true;
	      setThreeVisible(_visible);
		 break;
		 case 'ADUNIT_VISIBLE':
				console.log("Show AdUnits ", payload );
				_visible=true;
				setAdUnitVisible(_visible);
			break;
			case 'ADUNIT_REMOVE':
			console.log("Hide AdUnits ", payload );
			_visible=false;
			hideAdUnitVisible(_visible);
		break;
		case 'SIDEBAR_VISIBLE':
			console.log("Show SideBar ", payload );
			_visible=true;
			setSideBarVisible(_visible);
		break;
		case 'SIDEBAR_REMOVE':
			console.log("Remove App Sidebar (mobile only): ", payload );
			_visible=false;
			hideSideBarVisible(_visible);
		break;
		case 'APP_REMOVE':
			_visible=false;
			hideAppForm(_visible);
		break;
		case 'CAMPAIGN_REMOVE':
			_visible=false;
			hideCampaign(_visible);
		break;
		case 'ANALYTICS_REMOVE':
			_visible=false;
			hideAnalytics(_visible);
		break;
		case 'SEARCHAPP_REMOVE':
			_visible=false;
			hideSearchApp(_visible);
		break;
		// mini-screen goodies -ADDS
		case 'SEARCHAPP_VISIBLE':
			_visible=true;
			showSearchApp(_visible);
		break;
		case 'CREATEAPP_VISIBLE':
			_visible=true;
			showCreateApp(_visible);
		break;
		case 'LISTAPP_VISIBLE':
			_visible=true;
			showListApp(_visible);
		break;
		// mini-screem - REMOVES
		case 'CREATEAPP_REMOVE':
			_visible=false;
			hideCreateApp(_visible);
		break;
		case 'LISTAPP_REMOVE':
			_visible=false;
			hideListApp(_visible);
		break;
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;