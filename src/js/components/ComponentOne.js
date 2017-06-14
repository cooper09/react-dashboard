var React = require('react');

var ComponentOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }
		
		dspArr = this.props.pages;

		console.log("ComponentOne - dspArr: ", dspArr[0]._id );

		const listItems = dspArr.map((dspArr) => <li key={dspArr._id}>{dspArr}</li> );

		console.log("ComponentOne - listItems array: ", listItems.length );


		var dsps = [];
		for ( var i = 0 ; i < listItems.length ; ++i ) {
				//console.log("What have we here: ", {dspArr})
				dsps.push({dspArr});
			}


// Fusion Charts

	//Line Chart for encryption
		var encrypted = [];
		var yes = 0;
		var no = 0;
	
		for (var i=0 ; i < dspArr.length ; i++ ) {	
			if ( dspArr[i].flag_encrypt == 1 ) {
				++yes;
			}
			if ( dspArr[i].flag_encrypt  == 0 ) {
				++no;
			}
		}// end for loop 

		encObj = {
			"label" : "Encrypted ",
			"value" : yes
		}
		encrypted.push(encObj);

		encObj = {
			"label" : "Non-encrypted",
			"value" : no
		}
		encrypted.push(encObj);

		//Donut chart
		var chartConfigs = {
			type: "doughnut2d",
			className: "fc-column2d", // ReactJS attribute-name for DOM classes
			dataFormat: "JSON",
			dataSource: {
				chart:{
					"caption": "Encrypted DSPs"
				},
				//data: protocols,
				data: encrypted,
				//theme: "carbon",
				theme: "zune",
				placevaluesInside: "1",
				renderAt: "product-revenue",
				labelDisplay: "auto"
			}
		};
	//Bar Chart
	//lets collect a list of currencies by DSP.

		var currencies = [];
		var USD = 0;
		var CHY = 0;

		for (var i=0 ; i < dspArr.length ; i++ ) {
			if ( dspArr[i].currency == 'USD' ) {
				++USD;
			}
			if ( dspArr[i].currency == 'CNY' ) {
				++CHY;
			}
		}// end for loop 

		currObj = {
			"label" : "USD: ",
			"value" : USD
		}
		currencies.push(currObj);

		currObj = {
			"label" : "CHY",
			"value" : CHY
		}
		currencies.push(currObj);

//show chart
		var barChartConfigs = {
			type: "column3d",
			className: "fc-column3d", // ReactJS attribute-name for DOM classes
			dataFormat: "JSON",
			dataSource: {
				chart:{
					"caption": "Currency By DSP",
					"subCaption": "mPoint",
					"xAxisName": "Curency by DSP",
					"yAxisName": "Number of DSPs",
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
				data: currencies,
				theme: "carbon",
				labelDisplay: "auto"
			}
		};

		//parse DSP protocols 
		var protocols = [];
		var rtb24 = 1;
		var rtb23 = 0;
		var other = 1;

		console.log("our current dsp list array length: ", dspArr.length );
		//scan for protocols and capture how many of each
		for (var i=0 ; i < dspArr.length-1 ; i++ ) {
			console.log("parse our protocol list: ", dspArr[i].protocol );
			if (dspArr[i].protocol == "openrtb24") ++rtb24;
			if (dspArr[i].protocol == "openrtb23") ++rtb23;
			if (dspArr[i].protocol == "custom") ++other;

		}//end protocol for loop

		protoObj = {
			"label" : "openrtb24: ",
			"value" : rtb24
		}
		protocols.push(protoObj);

		protoObj = {
			"label" : "openrtb23: ",
			"value" : rtb23
		}
		protocols.push(protoObj);

		protoObj = {
			"label" : "custom: ",
			"value" : other - 1
		}
		protocols.push(protoObj);

//

		var lineChartConfigs = {
			type: "spline",
			className: "fc-column2d", // ReactJS attribute-name for DOM classes
			dataFormat: "JSON",
			dataSource: {
				chart:{
					"caption": "DSP Protocols",
          			"yAxisName": "Number of DSPs"

				},
				//data: encrypted,
				data: protocols,
				theme: "carbon",
				placevaluesInside: "1",
				labelDisplay: "auto"
			}
		};

		return (
			<div>

				<h1 className="main-title">Currency by DSP</h1>
          		<div id="interactive-dashbaord"></div>
				  <div className="chart-row" >
					  <div className="dsplist">
						{ dspArr.map(function(object, i){
						return <div className={"row"} key={i}> 
									{[ object.DSPID + "- currency: ",
										object.currency + " protocol: ", 
										object.protocol
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
					<div id="product-revenue" className="inline-chart" className="stinky">
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