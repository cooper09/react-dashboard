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

// Fusion Charts
//lets collect a list of currencies by DSP.
		var currencyUSD = 0;
		var currencyCHY = 0;

		var dsps = [];
		var dspObj = {};

		for (var i=0 ; i < dspArr.length ; i++ ) {
			console.log("Currency for " + dspArr[i].DSPID + " is " + dspArr[i].currency );
			
			if ( dspArr[i].currency == 'USD' ) {
				++currencyUSD;
				dspObj = {
					"dspid":  dspArr[i].DSPID, 
					"currency": dspArr[i].currency
				}
				dsps.push(dspObj);
			}

			if ( dspArr[i].currency == 'CNY' ) {
				++currencyCHY;
				dspObj = {
					"dspid":  dspArr[i].DSPID, 
					"currency": dspArr[i].currency
				}
				dsps.push(dspObj);
			}
			

	}

		var label1 = dspArr[0].DSPID;
		var label2 = dspArr[1].DSPID;
		var label3 = dspArr[2].DSPID;

		console.log("How does our currency look: ", dspArr[0].currency );
		console.log("How many DSPS use $: " , currencyUSD );
		console.log("Our new Dsp Array: " , dsps );

		var currency1 = dspArr[0].currency;
		var currency2 = dspArr[1].currency;
		var currency3 = dspArr[2].currency;

		//fusioncharts stuff
		var chartConfigs = {
			type: "Doughnut2D",
			className: "fc-column2d", // ReactJS attribute-name for DOM classes
			dataFormat: "JSON",
			dataSource: {
				chart:{},
				data: [{label: currency1 , value: currencyUSD }, {label: currency2, value: currencyCHY }],
				//data: [{label: label1, value: currency1 }, {label: label2, value: currency2}, {label: label3, value: currency3}]
				theme: "carbon",
				placevaluesInside: "1",
				labelDisplay: "auto"
			}
		};

		var barChartConfigs = {
			type: "column3d",
			className: "fc-column3d", // ReactJS attribute-name for DOM classes
			dataFormat: "JSON",
			dataSource: {
				chart:{
					"caption": "Currency By DSP",
					"subCaption": "mPoint",
					"xAxisName": "Currency",
					"yAxisName": "Curency by DSP",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"placeValuesInside": "1",
					"showShadow": "0",
					"divlineColor": "#999999",               
					"divLineIsDashed": "1",
					"divlineThickness": "1",
					"divLineDashLen": "1",
					"divLineGapLen": "1",
					"canvasBgColor": "#ffffff"
				},
				data: [{label: currency1 , value: currencyUSD }, {label: currency2, value: currencyCHY }],
				//data: [{label: label1, value: currency1 }, {label: label2, value: currency2}, {label: label3, value: currency3}]
				theme: "carbon",
				labelDisplay: "auto"
			}
		};
		var lineChartConfigs = {
			type: "spline",
			className: "fc-column2d", // ReactJS attribute-name for DOM classes
			dataFormat: "JSON",
			dataSource: {
				chart:{},
				data: [{label: currency1 , value: currencyUSD }, {label: currency2, value: currencyCHY }],
				//data: [{label: label1, value: currency1 }, {label: label2, value: currency2}, {label: label3, value: currency3}]
				theme: "carbon",
				placevaluesInside: "1",
				labelDisplay: "auto"
			}
		};

		return (
			<div>

				<h1 className="main-title">Currency by DSP</h1>
          		<div id="interactive-dashbaord"></div>
				  <div className="chart-row">
					  <div className="dsplist">
						{ dspArr.map(function(object, i){
						return <div className={"row"} key={i}> 
									{[ object.DSPID + ": ",
										object.currency
									]}
								</div>
						}) }
					</div>
				</div>
				<div className="chart-row">
					<div id="country-revenue">		
						<ReactFC {...barChartConfigs} />
					</div>
					
          		</div>
				  <div className="chart-row">
					<div id="monthly-revenue" className="inline-chart">
					<ReactFC {...lineChartConfigs} />
					</div>
					<div id="product-revenue" className="inline-chart">
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