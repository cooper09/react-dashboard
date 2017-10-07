var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getPageData: function () {
  	console.log("appAPI.getPageData...");
  	// Performing a GET request
	//axios.get('http://digitest-authorize.rhcloud.com/mega-data')
	//axios.get('http://hkex01.mpointx.com/D_worker_request/rtb24/mpointrtb')
	axios.get('https://tyrionapi.herokuapp.com')
	//	axios.get('http://hkex01.mpointx.com/D_worker_request/rtb24/smartyads')
	  .then(function(response){
	    console.log("appAPI.getPageData: " ,response.data[0]); // ex.: { user: 'Your User'}
	  

	    var data = response.data;
    	AppActions.loadPages(data);
	  });

    //var data = JSON.parse(localStorage.getItem('page'));
    //AppActions.loadPages(data);
  }

}; //end exports