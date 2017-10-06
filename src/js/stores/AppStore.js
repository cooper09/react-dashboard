var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _pages = [];

var _oneVisible = false, _twoVisible = false, _threeVisible = false;

// Method to load product data from mock API
function loadPageData(data) {
	//console.log("AppStore.loadPageData: ", data.map[0].DSPID );

	console.log("AppStore.loadPageData: ", data );

	/*	for (i=0 ; i < data.map.length ; i++ ) {
				console.log("AppStore - our DSP map: ", data.map[i].DSPID );
				_pages.push(data.map[i].DSPID); 
			} */
  _pages = data; //data.map;
  console.log("AppStore.loadPageData: ", _pages );
}

	// Set cart visibility
function setOneVisible(visible) {
  _oneVisible = true;
	_twoVisible = false;
	_threeVisible = false;
}

function setTwoVisible(visible) {
  _twoVisible = true;
	_oneVisible = false;
	_threeVisible = false;
}

function setThreeVisible(visible) {
	_threeVisible = true;
	_twoVisible = false;
  _oneVisible = false;	
}

var AppStore = assign({}, EventEmitter.prototype, {
	getPages: function () {
	    return _pages;
	  },
	  // Return cart visibility state
	getOneVisible: function () {
		console.log('AppStore.getOneVisible: ' + _oneVisible );
		return _oneVisible;
	},
	getTwoVisible: function () {
		console.log('AppStore.getTwoVisible: ' + _twoVisible );
		return _twoVisible;
	},
	getThreeVisible: function () {
		console.log('AppStore.getThreeVisible: ' + _threeVisible );
		return _threeVisible;
	},
	  // Set cart visibility
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

	console.log("AppDispatcher: ", action.actionType );
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
	 	break


	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;