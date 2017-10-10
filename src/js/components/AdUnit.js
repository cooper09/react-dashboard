var React = require('react');
var AppActions = require('../actions/AppActions');

var BannerScr = require('./minis/BannerScr.js');
var VideoScr = require('./minis/VideoScr.js');
var InterstitialScr = require('./minis/InterstitialScr.js');

var AdUnit = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
		}
		
		return (
			<div>
				<div className='pageTwo'>Ad Manager
					<br/><br/>
					<h3>{this.props.pages.id }</h3>
                    <button onClick={handleBtnBanner.bind(this)} className="btn-hilite">Banner</button>
					<button onClick={handleBtnVideo.bind(this)} className="btn">Video</button>
					<button onClick={handleBtnInterstitial.bind(this)} className="btn">Interstitial</button>
                    
					<BannerScr visible={this.props.bannerVisible} />
					<VideoScr visible={this.props.videoVisible} />
					<InterstitialScr visible={this.props.interstitialVisible} />

					<div className='closeMe' onClick={ handleItemClick.bind(this)}><center>Close</center></div>
				
				</div>
			</div>
			);
        
		function handleBtnBanner () {
			console.log("Heed the Banner");

			AppActions.showBannerScr('Show Banner screen');
			AppActions.removeVideoScr('Remove Video screen');
			AppActions.removeInterstitialScr('Remove Interstitial screen');
		}
		
		function handleBtnVideo () {
			console.log("Head the Viddy");

			AppActions.showVideoScr('Show Video screen');
			AppActions.removeBannerScr('Remove Banner screen');
			AppActions.removeInterstitialScr('Remove Interstitial screen');
		}
		
		function handleBtnInterstitial () {
			console.log("Head the Insty");

			AppActions.showInterstitialScr('Show Interstitial screen');
			AppActions.removeVideoScr('Remove Video screen');
			AppActions.removeBannerScr('Remove Banner screen');
		}
		
		function handleItemClick (){
            // close up shop and check to see if we're on mobile

            AppActions.removeAdUnit('Hide AdUnit');

                if (screen.width <= 732 ) {
                    AppActions.showSideBar('Show Sidebar');
                }//end if
            }//end handleItemClick
        
            
	}//end render
});//end AdUnit

module.exports = AdUnit;