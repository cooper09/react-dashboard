var React = require('react');
var AppActions = require('../actions/AppActions');

var AdUnit = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
		}
		
		return (
			<div>
				<div className='pageTwo'>Ad Unit goes here...
					<h3>{this.props.pages.id }</h3>
                    <button onClick={this.handleBtnBanner} className="btn-lite">Banner</button>
					<button onClick={this.handleBtnVideo} className="btn">Video</button>
					<button onClick={this.handleBtnInterstitial} className="btn">Interstitial</button>
                    <div className='closeBtn' onClick={ handleItemClick.bind(this)}>Close</div>
				</div>
			</div>
			);
        
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