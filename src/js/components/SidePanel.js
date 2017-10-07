var React = require('react');

var ListApp = require('./ListApp.js');

var SidePanel = React.createClass({

	render: function() {
		    ///alert("SidePanel - visible property: ", this.props.visible );
			if (!this.props.visible) {
				console.log("SideBar is off");
			 return false;
		   }
		
	console.log("list of apps: ", this.props.apps);
				var items = this.props.apps;
				var num = 0;
				
				return (
					<div>
						{ items.map(function(items) {
							console.log("Item no: ", num );
							++num;
							return <ListApp num={num} key={items.id} text={items.text} image={items.image} clickHandler={ handleItemClick.bind(this) } className="item"/>
						}) }
						
					</div>
					);
		
					function handleItemClick (){
						var myItem = document.getElementsByClassName('item');
		
						alert("SidePAnel.handleItemClick - show SidePanel: ");
		
						console.log('The magic element: ', myItem[0]);
						TweenMax.to( myItem[0], 1, { opacity:0, scale:0.5 });
						//TweenMax.staggerTo(myItem[0], 1, {y:0, opacity:0, scale:0.5}, 0.1); 
		
					} 
			}//end render
});//end SidePanel

module.exports = SidePanel;