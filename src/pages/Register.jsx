import React from 'react'
import { Helmet } from 'react-helmet'

function Register() {
  return (
    <>
   <div>
  {/*=================================
 inner-intro*/}
  <section className="inner-intro bg bg-fixed bg-overlay-black-60" style={{backgroundImage: 'url(/assets/images/bg/inner-bg-1.jpg)'}}>
    <div className="container">
      <div className="row intro-title text-center">
        <div className="col-md-12">
          <div className="section-title">
            <h1 className="position-relative divider">register 1<span className="sub-title w-100">register 1</span></h1>
          </div>
        </div>
        <div className="col-md-12 mt-7">
          <ul className="page-breadcrumb">
            <li><a href="index-default.html"><i className="fa fa-home" /> Home</a> <i className="fa fa-angle-double-right" /></li>
            <li><a href="register.html">Pages</a> <i className="fa fa-angle-double-right" /></li>
            <li><span>register 1</span> </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 inner-intro*/} 
  {/*=================================
 login*/}
  <section className="login-form register-img dark-bg page-section-ptb" style={{background: 'url(/assets/images/pattern/04.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-lg-6">
          <div className="login-1-form register-1-form clearfix text-center">
            <h4 className="title divider-3 text-white mb-3">sign up</h4>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-user" />
                <input id="Firstname" type="text" placeholder="First name" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-user" />
                <input id="Lastname" type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="fa fa-envelope-o" aria-hidden="true" />
                <input id="email" className="email" type="email" placeholder="Email" name="email" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-padlock" />
                <input id="Password" className="Password" type="password" placeholder="Password" name="Password" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-padlock" />
                <input id="ConfirmPassword" className="Password" type="password" placeholder="Confirm Password" name="Password" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="fa fa-graduation-cap" aria-hidden="true" />
                <input id="Collagename" type="text" placeholder="Collage name" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="fa fa-briefcase" aria-hidden="true" />
                <input id="Proffesionname" type="text" placeholder="Proffesion" />
              </div>
            </div>
            <div className="clearfix" />
            <div className="section-field text-uppercase text-center mt-2"> <a className="button  btn-lg btn-theme full-rounded animated right-icn" href="step.html"><span>next<i className="glyph-icon flaticon-hearts" aria-hidden="true" /></span></a> </div>
            <div className="clearfix" />
            <div className="section-field mt-2 text-center text-white">
              <p className="lead mb-0">Have an account? <a className="text-white" href="login.html"><u>Sign In!</u> </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 login*/}
</div>

<Helmet>
    {/* jquery   */}
    <script type="text/javascript" src="/assets/js/jquery-3.6.0.min.js"></script> 
    <script type="text/javascript" src="/assets/js/popper.min.js"></script> 

    {/* bootstrap  */}
    <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script> 

    {/* appear  */}
    <script type="text/javascript" src="/assets/js/jquery.appear.js"></script> 

    {/* appear  */}
    <script type="text/javascript" src="/assets/js/jquery.appear.js"></script> 

    {/* Menu  */}
    <script type="text/javascript" src="/assets/js/mega-menu/mega_menu.js"></script> 

    {/* style customizer */}
    <script type="text/javascript" src="/assets/js/style-customizer.js"></script> 

    {/* custom  */}
    <script type="text/javascript" src="/assets/js/custom.js"></script>
</Helmet>

    </>
  )
}

export default Register