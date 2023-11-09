import React from 'react'

function ColourCustomizer() {
  return (
    <>
         {/*=================================
Color Customizer */}
  <div className="style-customizer closed">
    <div className="buy-button"> <a className="opener" href="#"><i className="fa fa-cog fa-spin" /></a> </div>
    <div className="clearfix content-chooser">
      <div className="section-title">
        <h4 className="title">Color Schemes</h4>
      </div>
      <p>Which theme color you want to use? Here are some predefined colors.</p>
      <ul className="styleChange clearfix">
        <li className="skin-default selected" title="Default" data-style="skin-default" />
        <li className="skin-green" title="Green" data-style="skin-green" />
        <li className="skin-red" title="Red" data-style="skin-red" />
        <li className="skin-yellow" title="Yellow" data-style="skin-yellow" />
        <li className="skin-lightgreen" title="Light Green" data-style="skin-lightgreen" />
        <li className="skin-blue" title="Blue" data-style="skin-blue" />
        <li className="skin-orange" title="Orange" data-style="skin-orange" />
        <li className="skin-darkblue" title="Dark Blue" data-style="skin-darkblue" />
        <li className="skin-cyan" title="cyan" data-style="skin-cyan" />
        <li className="skin-gold" title="Gold" data-style="skin-gold" />
      </ul>
      <ul className="resetAll clearfix">
        <li><a target="_blank" className="button" href="#"><span>Purchase Now</span></a></li>
        <li><a className="button-reset button" href="#"><span>Reset All</span></a></li>
      </ul>
    </div>
  </div>
  <div id="back-to-top"><a className="top arrow" href="#top"><i className="fa fa-level-up" /></a></div>
    </>
  )
}

export default ColourCustomizer