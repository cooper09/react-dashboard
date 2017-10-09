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
    showSideBar: function (data) {
          console.log("AppActions.showSideBar: ", data );
            AppDispatcher.handleViewAction({
              actionType: AppConstants.SIDEBAR_VISIBLE,
              data: data
              })
          },
    showSearchApp: function (data) {
      console.log("AppActions.showSearchApp: ", data );
              AppDispatcher.handleViewAction({
                actionType: AppConstants.SEARCHAPP_VISIBLE,
                data: data
                })
          },
    showCreateApp: function (data) {
      console.log("AppActions.showCreateApp: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.CREATEAPP_VISIBLE,
          data: data
          })
    },

    showCampaignCreate: function (data) {
      console.log("AppActions.showListApp: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.CREATECAMPAIGN_VISIBLE,
          data: data
          })
    },
//Remove ACtions
  removeAdUnit: function (data) {
    console.log("AppActions.removeAdUnit: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ADUNIT_REMOVE,
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
      removeSearchApp: function (data) {
          console.log("AppActions.searchApp: ", data );
            AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCHAPP_REMOVE,
            data: data
        })
      },
      removeCreateApp: function (data) {
        console.log("AppActions.removeCreateApp: ", data );
          AppDispatcher.handleViewAction({
          actionType: AppConstants.CREATEAPP_REMOVE,
          data: data
      })
    },
    removeListApp: function (data) {
      console.log("AppActions.listApp: ", data );
        AppDispatcher.handleViewAction({
        actionType: AppConstants.LISTAPP_REMOVE,
        data: data
    })
  },
    removeCampaignList: function (data) {
      console.log("AppActions.removeCampaignList: ", data );
        AppDispatcher.handleViewAction({
        actionType: AppConstants.LISTCAMPAIGN_REMOVE,
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