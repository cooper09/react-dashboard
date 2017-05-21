var React = require('react');

var ComponentOne = React.createClass({


	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }
		
		dspArr = this.props.pages;

		console.log("ComponentOne - dspArr: ", dspArr );

		const listItems = dspArr.map((dspArr) => <li key={dspArr.id}>{dspArr}</li> );

		return (
			<div>
				
				{ dspArr.map(function(object, i){
					return <div className={"row"} key={i}> 
								{[ object.DSPID,
									object.currency
								]}
							</div>
					  }) }

			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;