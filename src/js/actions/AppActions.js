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
    showListApp: function (data) {
      console.log("AppActions.showListApp: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.LISTAPP_VISIBLE,
          data: data
          })
    },
    showCampaignCreate: function (data) {
      console.log("AppActions.showListCampaign: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.CREATECAMPAIGN_VISIBLE,
          data: data
          })
    },
    showCampaignList: function (data) {
      console.log("AppActions.showCampaignList: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.LISTCAMPAIGN_VISIBLE,
          data: data
          })
    },
    showBannerScr: function (data) {
      console.log("AppStore.showBannerScr - show: ", data);
      AppDispatcher.handleViewAction({
        actionType: AppConstants.BANNER_VISIBLE,
        data: data
        })
    },
    showVideoScr: function (data) {
      console.log("AppStore.showVideoScr - show: ", data);
      AppDispatcher.handleViewAction({
        actionType: AppConstants.VIDEO_VISIBLE,
        data: data
        })
    },
    showInterstitialScr: function (data) {
      console.log("AppStore.showItnerstitialScr - show: ", data);
      AppDispatcher.handleViewAction({
        actionType: AppConstants.INTY_VISIBLE,
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
  removeCreateCampaign: function (data) {
    console.log("AppActions.removeCampaignCreate: ", data );
      AppDispatcher.handleViewAction({
      actionType: AppConstants.CREATECAMPAIGN_REMOVE,
      data: data
  })
},
  removeBannerScr: function (data) {
    console.log("AppActions.removeBannerScr: ", data );
      AppDispatcher.handleViewAction({
      actionType: AppConstants.BANNER_REMOVE,
      data: data
  })
},
removeVideoScr: function (data) {
  console.log("AppActions.removeVideoScr: ", data );
    AppDispatcher.handleViewAction({
    actionType: AppConstants.VIDEO_REMOVE,
    data: data
})
},
removeInterstitialScr: function (data) {
  console.log("AppActions.removeInterstitialScr: ", data );
    AppDispatcher.handleViewAction({
    actionType: AppConstants.INTY_REMOVE,
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