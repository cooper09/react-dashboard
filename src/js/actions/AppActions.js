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
removeApp: function (data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.APP_REMOVE,
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
  removeOne: function (data) {
    console.log("AppActions.removeOne: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ONE_REMOVE,
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
      removeCampaign: function (data) {
        console.log("AppActions.hideCampaign: ", data );
          AppDispatcher.handleViewAction({
            actionType: AppConstants.CAMPAIGN_REMOVE,
            data: data
            })
        },
        removeAnalytics: function (data) {
          console.log("AppActions.hideAnalytcs: ", data );
            AppDispatcher.handleViewAction({
              actionType: AppConstants.ANALYTICS_REMOVE,
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