var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
// Receive inital product data
myEvent: function (data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.MY_EVENT,
      data: data
    	})
	},
showTwo: function (data) {
	console.log("AppActions.showTwo: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.TWO_VISIBLE,
      data: data
    	})
  },
  showThree: function (data) {
    console.log("AppActions.showThree: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.THREE_VISIBLE,
        data: data
        })
    },    
    showAdUnit: function (data) {
      console.log("AppActions.showAdUnit: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.ADUNIT_VISIBLE,
          data: data
          })
      },
      removeAdUnit: function (data) {
        console.log("AppActions.removeAdUnit: ", data );
          AppDispatcher.handleViewAction({
            actionType: AppConstants.ADUNIT_REMOVE,
            data: data
            })
        },
        showSideBar: function (data) {
          console.log("AppActions.showSideBar: ", data );
            AppDispatcher.handleViewAction({
              actionType: AppConstants.SIDEBAR_VISIBLE,
              data: data
              })
          },
    hideSideBar: function (data) {
      console.log("AppActions.hideSideBar: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.SIDEBAR_REMOVE,
          data: data
          })
      },
loadPages: function (data) {
	console.log("AppActions.loadPages: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_DATA,
      data: data
    	})
	}

}//end AppActions
module.exports = AppActions;