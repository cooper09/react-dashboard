var React = require('react');


//var fusioncharts = require('./fusioncharts.js');
//load charts module

var ComponentOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }
		
		dspArr = this.props.pages;

		console.log("ComponentOne - dspArr: ", dspArr );

		const listItems = dspArr.map((dspArr) => <li key={dspArr.id}>{dspArr}</li> );

		//fusioncharts stuff
		var chartConfigs = {
			type: "Column2D",
			className: "fc-column2d", // ReactJS attribute-name for DOM classes
			dataFormat: "JSON",
			dataSource: {
				chart:{},
				data: [{value: 500}, {value: 600}, {value: 700}]
			}
		};


		return (
			<div>
				
				{ dspArr.map(function(object, i){
					return <div className={"row"} key={i}> 
								{[ object.DSPID,
									object.currency
								]}
							</div>
					  }) }

				<h1 className="main-title">Acme Inc. Revenue Analysis for 2015</h1>
          		<div id="interactive-dashbaord"></div>
				 <div id="interactive-dashbaord"></div>
				<div className="chart-row">
					<div id="country-revenue">
						
						<div id="chart-container">country chart goes here...</div>
						<ReactFC {...chartConfigs} />
					</div>
          		</div>

			</div>
			);
		<ReactFC {...chartConfigs} />,
		document.getElementById('chart-container')
	}//end render
});//end ComponentOne

module.exports = ComponentOne;