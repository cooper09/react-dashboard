var React = require('react');
var AppActions = require('../../actions/AppActions');

var BannerScr = React.createClass({

    render: function () {

        if (!this.props.visible) {
            console.log(" BannerScr.render - BannerScr is off");
            return false; 
        } 

        //alert("BannerScr visible: ", this.props.searchVisible )

        return (
            <div>
                <div className='miniScrn'>
                
                <form>
                    <label>Ad Unit Name:  </label>
                        <input type="text" name="name" /><br/><br/>
                        
                        <label>Ad Type:</label><br />
                        <div className="indentLeft">
                        <label>Image</label><input type="checkbox" id="imageAd" name="image" value="image" /><br/>
                        <label>Text</label><input type="checkbox" id="textAd" name="text" value="text" />
                        </div>
                        <br/>
                        <label>Ad Size:</label><br />
                        <select name="bannerSize">
                            <option value="320x50">320x50</option>
                            <option value="320x480">320x480</option>
                            <option value="300x250">300x250</option>
                            <option value="728x30">720x30</option>
                        </select>
                        <br/><br/>
                        <input type="submit" value="Submit" className="btn btn-right"/>
                </form>

                </div>
            </div>
        );

        // button handlers - a rare breed

    }//end render
});//end SearchApp

module.exports = BannerScr;