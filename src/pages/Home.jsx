import React from 'react'

function Home() {
  return (
    <>
        <div>
  {/*=================================
 preloader */}
  <div id="preloader">
    <div className="clear-loading loading-effect"><img src="/assets/images/loading.gif" alt /></div>
  </div>
  {/*=================================
 preloader */}
  {/*=================================
header */}
  <header id="header" className="dark">
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="topbar-left text-start">
              <ul className="list-inline">
                <li><a href="mailto:support@website.com"><i className="fa fa-envelope-o"> </i> support@website.com </a></li>
                <li><a href="tel:(007)1234567890"><i className="fa fa-phone" /> (007) 123 456 7890 </a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="topbar-right text-end">
              <ul className="list-inline social-icons color-hover">
                <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                <li className="social-instagram"><a href="#"><i className="fa fa-instagram" /></a></li>
                <li className="social-dribbble"><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
              <ul className="list-inline text-uppercase top-menu">
                <li><a href="register.html">register</a></li>
                <li><a href="login.html">login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=================================
 mega menu */}
    <div className="menu">
      {/* menu start */}
      <nav id="menu" className="mega-menu">
        {/* menu list items container */}
        <section className="menu-list-items">
          <div className="container">
            <div className="row position-relative">
              <div className="col-md-12 position-relative">
                {/* menu logo */}
                <ul className="menu-logo">
                  <li> <a href="index-default.html"><img src="/assets/images/logo.png" alt="logo" /> </a> </li>
                </ul>
                {/* menu links */}
                <ul className="menu-links">
                  {/* active class */}
                  <li className="active"><a href="javascript:void(0)"> Home <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down multilevel  */}
                    <ul className="drop-down-multilevel left-menu">
                      <li className="active"><a href="index-default.html">Home v1</a></li>
                      <li><a href="index-2.html">Home v2</a></li>
                      <li><a href="index-3.html">Home v3</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)">Profiles <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down multilevel  */}
                    <ul className="drop-down-multilevel left-menu">
                      <li><a href="profile.html">Profiles 01</a></li>
                      <li><a href="profile-2.html">Profiles 02</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)">Stories <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down multilevel  */}
                    <ul className="drop-down-multilevel left-menu">
                      <li><a href="stories.html">Stories 01</a></li>
                      <li><a href="stories-2.html">Stories 02</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)"> Pages <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down full width */}
                    <div className="drop-down grid-col-12">
                      {/*grid row*/}
                      <div className="grid-row">
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="about-1.html">About 01</a></li>
                            <li><a href="about-2.html"> About 02 </a></li>
                            <li><a href="team-1.html"> Team 01</a></li>
                            <li><a href="team-2.html"> Team 02</a></li>
                            <li><a href="team-single.html"> Team Single</a></li>
                          </ul>
                        </div>
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="faqs-1.html"> Faqs 01</a></li>
                            <li><a href="faqs-2.html"> Faqs 02</a></li>
                            <li><a href="contact-1.html"> Contact 01</a></li>
                            <li><a href="contact-2.html"> Contact 02</a></li>
                            <li><a href="contact-3.html"> Contact 03</a></li>
                          </ul>
                        </div>
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="login.html">Login 01</a></li>
                            <li><a href="login-2.html">Login 02</a></li>
                            <li><a href="register.html">Register 01</a></li>
                            <li><a href="register-2.html">Register 02</a></li>
                            <li><a href="step.html">Step</a></li>
                          </ul>
                        </div>
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="error-404.html"> 404 Error </a></li>
                            <li><a href="coming-soon.html">Coming Soon </a></li>
                            <li><a href="terms-conditions.html"> Terms Conditions</a></li>
                            <li><a href="privacy-policy.html"> Privacy Policy</a></li>
                            <li><a href="become-a-member.html"> Become a Member</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)"> Blog <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down multilevel  */}
                    <ul className="drop-down-multilevel left-menu">
                      <li><a href="javascript:void(0)">Blog Classic <i className="fa fa-angle-right fa-indicator" /></a>
                        <ul className="drop-down-multilevel right-menu">
                          <li><a href="blog-left.html">Left Sidebar</a></li>
                          <li><a href="blog-right.html">Right Sidebar</a></li>
                          <li><a href="blog-fullwidth.html">Fullwidth</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)">Blog Masonry <i className="fa fa-angle-right fa-indicator" /></a>
                        <ul className="drop-down-multilevel right-menu">
                          <li><a href="blog-masonry-2-columns.html">2 Columns</a></li>
                          <li><a href="blog-masonry-3-columns.html">3 Columns</a></li>
                          <li><a href="blog-masonry-fullwidth.html">Fullwidth</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)">Blog Single <i className="fa fa-angle-right fa-indicator" /></a>
                        <ul className="drop-down-multilevel right-menu">
                          <li><a href="blog-singal-left.html">Single Left</a></li>
                          <li><a href="blog-singal-right.html">Single Right</a></li>
                          <li><a href="blog-singal-fullwidth.html">Single Fullwidth</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)"> Shortcodes <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down full width */}
                    <div className="drop-down grid-col-12">
                      {/*grid row*/}
                      <div className="grid-row">
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="elements-accordions.html"><i className="fa fa-list-ul" /> accordions </a></li>
                            <li><a href="elements-action-box.html"><i className="fa fa-rocket" /> action box</a></li>
                            <li><a href="elements-alerts-and-callouts.html"><i className="fa fa-info-circle" /> alerts and callouts</a></li>
                            <li><a href="elements-buttons.html"><i className="fa fa-external-link" /> buttons</a></li>
                            <li><a href="elements-carousel-slider.html"><i className="fa fa-exchange" /> carousel slider</a></li>
                          </ul>
                        </div>
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="elements-columns.html"><i className="fa fa-th" /> columns</a></li>
                            <li><a href="elements-content-box.html"><i className="fa fa-file-text-o" /> content box</a></li>
                            <li><a href="elements-counter.html"><i className="fa fa-sort-numeric-asc" /> counter</a></li>
                            <li><a href="elements-data-table.html"><i className="fa fa-table" /> data table</a></li>
                            <li><a href="elements-lists-style.html"><i className="fa fa-th-list" /> lists style</a></li>
                          </ul>
                        </div>
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="elements-post-style.html"> <i className="fa fa-photo" /> post style</a></li>
                            <li><a href="elements-timeline.html"><i className="fa fa-tasks" />Timeline</a></li>
                            <li><a href="elements-social-icon.html"><i className="fa fa-share-alt" /> social icon</a></li>
                            <li><a href="elements-testimonial.html"><i className="fa fa-quote-left" /> testimonial</a></li>
                            <li><a href="elements-tabs.html"><i className="fa fa-star" /> tabs</a></li>
                          </ul>
                        </div>
                        {/*grid column 3*/}
                        <div className="grid-col-3">
                          <ul>
                            <li><a href="elements-our-story.html"><i className="fa fa-history" /> Our Story</a></li>
                            <li><a href="elements-team.html"><i className="fa fa-users" /> team</a></li>
                            <li><a href="elements-typography.html"><i className="fa fa-italic" /> typography</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)"> Contact <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down multilevel  */}
                    <ul className="drop-down-multilevel right-menu">
                      <li><a href="contact-1.html">Contact 1</a></li>
                      <li><a href="contact-2.html">Contact 2</a></li>
                      <li><a href="contact-3.html">Contact 3</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </nav>
      {/* menu end */}
    </div>
  </header>
  {/*=================================
 header */}
  {/*=================================
 banner */}
  <section id="home-slider" className="fullscreen">
    <div id="main-slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/*/ Carousel item end */}
        <div className="carousel-item active h-100 bg-overlay-red" style={{background: 'url(/assets/images/bg/bg-1.jpg) no-repeat 0 0', backgroundSize: 'cover'}}>
          <div className="slider-content">
            <div className="container">
              <div className="row carousel-caption align-items-center h-100">
                <div className="col-md-12 text-end">
                  <div className="slider-1">
                    <h1 className="animated2 text-white">Are You <span>Waiting</span> For <span> Dating ?</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item h-100 bg-overlay-red" style={{background: 'url(/assets/images/bg/bg-2.jpg) no-repeat 0 0', backgroundSize: 'cover'}}>
          <div className="slider-content">
            <div className="container">
              <div className="row carousel-caption align-items-center h-100">
                <div className="col-md-12 text-start">
                  <div className="slider-1">
                    <h1 className="animated7 text-white">Meet big <span> and </span> beautiful love <span> here!</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Carousel item end */}
      </div>
      {/* Controls */}
      <a className="left carousel-control" href="#main-slider" data-bs-slide="prev"> <span><i className="fa fa-angle-left" /></span> </a> <a className="right carousel-control" href="#main-slider" data-bs-slide="next"> <span><i className="fa fa-angle-right" /></span> </a> </div>
  </section>
  {/*=================================
 banner */}
  {/*=================================
 Page Section */}
  <section className="form-1 py-3">
    <div className="container">
      <div className="banner-form">
        <div className="row">
          <div className="col-md-3">
            <div className="form-group row align-items-center">
              <div className="col-lg-4 col-md-12">
                <label className="control-label text-white form-label">I am a</label>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="selected-box">
                  <select className="selectpicker">
                    <option>Man </option>
                    <option>Woman</option>
                  </select>
                </div>
                {/* <select class="form-select">
          <option>Man</option>
          <option>Woman</option>
        </select> */}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group row align-items-center">
              <div className="col-lg-5 col-md-12">
                <label className="control-label text-white form-label">Seeking a</label>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="selected-box">
                  <select className="selectpicker">
                    <option>Man</option>
                    <option>Woman</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row align-items-center">
                  <div className="col-lg-4 col-md-12">
                    <label className="control-label text-white form-label">From</label>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div className="selected-box">
                      <select className="selectpicker">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row align-items-center">
                  <div className="col-lg-4 col-md-12">
                    <label className="control-label text-white ps-0 form-label">To</label>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div className="selected-box">
                      <select className="selectpicker">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"><a className="button btn-lg btn-theme full-rounded animated right-icn"><span>search <i className="glyph-icon flaticon-hearts" aria-hidden="true" /></span></a></div>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 Page Section */}
  <section className="page-section-ptb position-relative timeline-section">
    <div className="container">
      <div className="row justify-content-center mb-4 mb-md-5">
        <div className="col-md-10 text-center">
          <h2 className="title divider mb-3">Step to find your Soul Mate</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <ul className="timeline list-inline">
            <li>
              <div className="timeline-badge"><img className="img-fluid" src="/assets/images/timeline/01.png" alt /></div>
              <div className="timeline-panel">
                <div className="timeline-heading text-center">
                  <h4 className="timeline-title divider-3">CREATE PROFILE</h4>
                </div>
                <div className="timeline-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  enim ad minim veniam, quis</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge"><img className="img-fluid" src="/assets/images/timeline/02.png" alt /></div>
              <div className="timeline-panel">
                <div className="timeline-heading text-center">
                  <h4 className="timeline-title divider-3">Find match</h4>
                </div>
                <div className="timeline-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  enim ad minim veniam, quis</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge"><img className="img-fluid" src="/assets/images/timeline/03.png" alt /></div>
              <div className="timeline-panel">
                <div className="timeline-heading text-center">
                  <h4 className="timeline-title divider-3">START DATING</h4>
                </div>
                <div className="timeline-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  enim ad minim veniam, quis</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb pb-0 text-center our-app position-relative overflow-h" style={{background: 'url(images/pattern/01.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="timeline-inner" style={{background: 'url(images/app-img.png)'}}>
      <div className="container-fluid h-100">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <h2 className="title divider">Download Our App</h2>
          </div>
        </div>
        <div className="row justify-content-center justify-content-lg-start h-75">
          <div className="col-lg-8 col-md-12 align-self-center">
            <h2 className="title mb-3">Want ot find your match..!! <br />
              Get our app now.</h2>
            <a className="button btn-dark btn-lg  full-rounded"><i className="fa fa-apple" aria-hidden="true" /><span><span>available on the</span> app store</span></a> <a className="button btn-lg full-rounded white-bg text-dark"><img className="img-fluid me-2" src="/assets/images/play-icon.png" alt /><span><span>get it on</span> google play</span></a> </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb  text-white" style={{background: 'url(images/pattern/02.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row justify-content-center mb-4 mb-md-5">
        <div className="col-md-8 text-center">
          <h2 className="title divider">Animated Fun Facts</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 text-center">
          <div className="counter"> <img src="/assets/images/counter/01.png" alt /> <span className="timer" data-to={1600} data-speed={10000}>1600</span>
            <label className="form-label">Total Members</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <div className="counter"> <img src="/assets/images/counter/02.png" alt /> <span className="timer" data-to={750} data-speed={10000}>750</span>
            <label className="form-label">Online Members</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <div className="counter"> <img src="/assets/images/counter/03.png" alt /> <span className="timer" data-to={380} data-speed={10000}>380</span>
            <label className="form-label">Men Online</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <div className="counter mb-0"> <img src="/assets/images/counter/04.png" alt /> <span className="timer" data-to={370} data-speed={10000}>370</span>
            <label className="form-label">Women Online</label>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb profile-slider pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="title divider">Last Added Profiles</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel owl-theme" data-nav-arrow="true" data-items={4} data-lg-items={4} data-md-items={3} data-sm-items={3} data-xs-items={2} data-space={30}>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/01.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Bill Nelson</h5>
                  <span>23 Years Old</span> </div>
              </a> </div>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/02.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Francisco Pierce</h5>
                  <span>21 Years Old</span> </div>
              </a> </div>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/03.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Nelle Townsend</h5>
                  <span>19 Years Old</span> </div>
              </a> </div>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/04.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Glen Bell</h5>
                  <span>20 Years Old</span> </div>
              </a> </div>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/05.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Bill Nelson</h5>
                  <span>22 Years Old</span> </div>
              </a> </div>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/06.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Francisco Pierce</h5>
                  <span>23 Years Old</span> </div>
              </a> </div>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/07.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Nelle Townsend</h5>
                  <span>19 Years Old</span> </div>
              </a> </div>
            <div className="item"> <a href="profile-details.html" className="profile-item">
                <div className="profile-image clearfix"><img className="img-fluid w-100" src="/assets/images/profile/08.jpg" alt /></div>
                <div className="profile-details text-center">
                  <h5 className="title">Glen Bell</h5>
                  <span>22 Years Old</span> </div>
              </a> </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb grey-bg story-slider">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="title divider">They Found True Love</h2>
        </div>
      </div>
    </div>
    <div className="owl-carousel owl-theme" data-nav-dots="true" data-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-xs-items={2} data-space={30}>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/01.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Quinnel &amp;amp; Jonet</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/02.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Adam &amp;amp; Eve</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/03.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Bella &amp;amp; Edward</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/04.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">DEMI &amp;amp; HEAVEN</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/05.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">David &amp;amp; Bathsheba</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/06.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Eros &amp;amp; Psychi</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/07.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Hector &amp;amp; Andromache</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/08.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Bonnie &amp;amp; Clyde</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/09.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Henry &amp;amp; Clare</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/10.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Casanova &amp;amp; Francesca</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/11.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">Jack &amp;amp; Sally</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="story-item">
          <div className="story-image clearfix"><img className="img-fluid w-100" src="/assets/images/story/12.jpg" alt />
            <div className="story-link"><a href="stories-details.html"><i className="glyph-icon flaticon-add" /></a></div>
          </div>
          <div className="story-details text-center">
            <h5 className="title divider-3">James &amp;amp; Lilly</h5>
            <div className="about-des mt-3">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb text-white bg-overlay-black-70 bg text-center" style={{background: 'url(images/bg/bg-4.jpg) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="container position-relative">
      <div className="row justify-content-center mb-4 mb-md-5">
        <div className="col-md-10">
          <h2 className="title divider mb-3">Nothing say better, then a video</h2>
          <p className="lead">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h5 className="title mb-3">see video</h5>
          <div className="popup-gallery"> <a href="https://www.youtube.com/embed/8xg3vE8Ie_E" className="play-btn popup-youtube"> <span><i className="glyph-icon flaticon-play-button" /></span></a> </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb grey-bg">
    <div className="container">
      <div className="row justify-content-center mb-4 mb-md-5">
        <div className="col-md-10 text-center">
          <h2 className="title divider mb-3">Our Recent Blogs</h2>
          <p className="lead">Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
        </div>
      </div>
      <div className="row post-article mb-0 mb-lg-5">
        <div className="col-md-6">
          <div className="post post-artical">
            <div className="post-image clearfix"><img className="img-fluid" src="/assets/images/blog/01.jpg" alt /></div>
            <div className="post-details">
              <div className="post-title mt-2">
                <h5 className="title text-uppercase mt-2"><a href="blog-singal-fullwidth.html">Intentions That Energize You</a></h5>
              </div>
              <p>March, 2022 by<a href="#">John Doe</a></p>
              <div className="post-icon">
                <div className="post-content">
                  <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>
                </div>
                <a className="button" href="blog-singal-fullwidth.html">read more..</a> </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post post-artical">
            <div className="post-image clearfix"><img className="img-fluid" src="/assets/images/blog/02.jpg" alt /></div>
            <div className="post-details">
              <div className="post-title mt-2">
                <h5 className="title text-uppercase mt-2"><a href="blog-singal-fullwidth.html">A Brief History Of Creation</a></h5>
              </div>
              <p>March, 2022 by<a href="#">John Doe</a></p>
              <div className="post-icon">
                <div className="post-content">
                  <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>
                </div>
                <a className="button" href="blog-singal-fullwidth.html">read more..</a> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row post-article">
        <div className="col-lg-4 col-md-6">
          <div className="post post-artical">
            <div className="post-image clearfix"><img className="img-fluid" src="/assets/images/blog/03.jpg" alt /></div>
            <div className="post-details">
              <div className="post-title mt-2">
                <h5 className="title text-uppercase mt-2"><a href="blog-singal-fullwidth.html">A Time Travel Postcard</a></h5>
              </div>
              <p>November, 2022 by<a href="#">John Doe</a></p>
              <div className="post-icon">
                <div className="post-content">
                  <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.</p>
                </div>
                <a className="button" href="blog-singal-fullwidth.html">read more..</a> </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="post post-artical">
            <div className="post-image clearfix"><img className="img-fluid" src="/assets/images/blog/04.jpg" alt /></div>
            <div className="post-details">
              <div className="post-title mt-2">
                <h5 className="title text-uppercase mt-2"><a href="blog-singal-fullwidth.html">Major Motives Of Our Lives</a></h5>
              </div>
              <p>November, 2022 by<a href="#">John Doe</a></p>
              <div className="post-icon">
                <div className="post-content">
                  <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.</p>
                </div>
                <a className="button" href="blog-singal-fullwidth.html">read more..</a> </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="post post-artical sm-mb-0">
            <div className="post-image clearfix"><img className="img-fluid" src="/assets/images/blog/05.jpg" alt /></div>
            <div className="post-details">
              <div className="post-title mt-2">
                <h5 className="title text-uppercase mt-2"><a href="blog-singal-fullwidth.html">All Faith Needs Feet</a></h5>
              </div>
              <p>November, 2022 by<a href="#">John Doe</a></p>
              <div className="post-icon">
                <div className="post-content">
                  <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.</p>
                </div>
                <a className="button" href="blog-singal-fullwidth.html">read more..</a> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-0 mt-lg-5">
        <div className="col-sm-10 text-center"> <a className="button  btn-lg btn-theme full-rounded animated right-icn"><span>Show More<i className="glyph-icon flaticon-hearts" aria-hidden="true" /></span></a> </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb pb-2 sm-pb-0 dark-bg text-white" style={{background: 'url(images/pattern/03.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h2 className="title divider">Testimonials</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="owl-carousel owl-theme" data-nav-arrow="true" data-items={1} data-md-items={1} data-sm-items={1}>
            <div className="item">
              <div className="testimonial bottom_pos">
                <div className="testimonial-avatar"> <img alt src="/assets/images/thumbnail/thum-1.jpg" /> </div>
                <div className="testimonial-info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="author-info"> <strong>Jack Thompson - <span>Usa</span></strong> </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial bottom_pos">
                <div className="testimonial-avatar"> <img alt src="/assets/images/thumbnail/thum-2.jpg" /> </div>
                <div className="testimonial-info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="author-info"> <strong>Miss Jorina Akter - <span>Iraq</span></strong> </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial bottom_pos">
                <div className="testimonial-avatar"> <img alt src="/assets/images/thumbnail/thum-3.jpg" /> </div>
                <div className="testimonial-info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="author-info"> <strong>Adam Cooper - <span> New york</span></strong> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-section-ptb o-hidden grey-bg">
    <div className="container">
      <div className="row justify-content-center mb-4 mb-md-5">
        <div className="col-md-10 text-center">
          <h2 className="title divider mb-3">Why Choose Us</h2>
          <p className="lead">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis. Eum cu</p>
        </div>
      </div>
      <div className="row justify-content-center mb-4 mb-lg-5">
        <div className="col-md-10 text-center">
          <h4 className="title divider-3 text-uppercase">we are the one</h4>
        </div>
      </div>
      <div className="row mb-0 mb-lg-5">
        <div className="col-lg-3 col-sm-6">
          <div className="team team-1">
            <div className="team-images"> <img className="img-fluid" src="/assets/images/team/team1.png" alt /> </div>
            <div className="team-description">
              <div className="team-tilte">
                <h5 className="title"><a href="team-single.html">Bill Nelson</a></h5>
                <span>Founder</span> </div>
              <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
              <div className="team-social-icon social-icons color-hover">
                <ul>
                  <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="social-gplus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li className="social-dribbble"><a href="#"><i className="fa fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team team-1">
            <div className="team-images"> <img className="img-fluid" src="/assets/images/team/team2.png" alt /> </div>
            <div className="team-description">
              <div className="team-tilte">
                <h5 className="title"><a href="team-single.html">Francisco Pierce</a></h5>
                <span>Photographer</span> </div>
              <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
              <div className="team-social-icon social-icons color-hover">
                <ul>
                  <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="social-gplus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li className="social-dribbble"><a href="#"><i className="fa fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team team-1">
            <div className="team-images"> <img className="img-fluid" src="/assets/images/team/team3.png" alt /> </div>
            <div className="team-description">
              <div className="team-tilte">
                <h5 className="title"><a href="team-single.html">Nelle Townsend</a></h5>
                <span>Interpreter</span> </div>
              <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
              <div className="team-social-icon social-icons color-hover">
                <ul>
                  <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="social-gplus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li className="social-dribbble"><a href="#"><i className="fa fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team team-1">
            <div className="team-images"> <img className="img-fluid" src="/assets/images/team/team4.png" alt /> </div>
            <div className="team-description">
              <div className="team-tilte">
                <h5 className="title"><a href="team-single.html">Glen Bell</a></h5>
                <span>Administrator</span> </div>
              <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
              <div className="team-social-icon social-icons color-hover">
                <ul>
                  <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="social-gplus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li className="social-dribbble"><a href="#"><i className="fa fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="about-cntn">
            <h5 className="title divider-3 text-uppercase mb-3">About US</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="about-cntn">
            <h5 className="title divider-3 text-uppercase mb-3">who we are</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="about-cntn sm-mb-0">
            <h5 className="title divider-3 text-uppercase mb-3">why we do this</h5>
            <p className="sm-mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 page-section */}
  <section className="py-5 action-box-img bg text-center text-white bg-overlay-black-80" style={{backgroundImage: 'url(images/bg/bg-4.jpg)'}}>
    <div className="container">
      <div className="row justify-content-center position-relative">
        <div className="col-md-10">
          <h5 className="pb-2">Want to hear more story, subscribe for our newsletter</h5>
          <a className="button  btn-lg btn-theme full-rounded animated right-icn"><span>Subscribe<i className="glyph-icon flaticon-hearts" aria-hidden="true" /></span></a> </div>
      </div>
    </div>
  </section>
  {/*=================================
footer */}
  <footer className="page-section-pt text-white text-center" style={{background: 'url(images/pattern/04.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row mb-4 mb-md-5">
            <div className="col-md-12">
              <h2 className="title divider mb-3">Contact Us</h2>
              <p className="lead">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis. Eum cu</p>
            </div>
          </div>
          <div className="row mb-4 mb-md-5">
            <div className="col-md-4">
              <div className="address-block"> <i className="fa fa-desktop" aria-hidden="true" /> <a href="mailto:somemail@mail.com">somemail@mail.com</a> </div>
            </div>
            <div className="col-md-4">
              <div className="address-block"> <i className="fa fa-home" aria-hidden="true" />
                <address>
                  T317 Timber Oak Drive<br />
                  Sundown, TX 79372
                </address>
              </div>
            </div>
            <div className="col-md-4">
              <div className="address-block"> <i className="fa fa-phone" aria-hidden="true" /> <a href="tel:+000123456789">+000 - 123 - 456 - 789</a> </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <h4 className="title divider-3">We Love Talking</h4>
            </div>
          </div>
          <div className="row mb-0 mb-md-2 mb-lg-3 mb-xl-4">
            <div className="col-md-12 mb-0 mb-lg-2">
              <div id="formmessage" style={{display: 'none'}}>Success/Error Message Goes Here</div>
              <form id="contactform" className="main-form" method="post" action="https://themes.potenzaglobalsolutions.com/html/cupid-love-dating-website-html5-template/cupid-love/php/contact-form.php">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <input id="name" placeholder="Your name here" className="form-control" name="name" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <input placeholder="Your mail here" className="form-control" name="email" type="email" />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="input-group">
                      <textarea className="form-control input-message" placeholder="Your message here*" rows={7} name="message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12 mb-0">
                    <input type="hidden" name="action" defaultValue="sendEmail" />
                    <button id="submit" name="submit" type="submit" value="Send" className="button btn-lg btn-theme full-rounded animated right-icn mb-0"><span>Submit Now<i className="glyph-icon flaticon-hearts" aria-hidden="true" /></span></button>
                  </div>
                </div>
              </form>
              <div id="ajaxloader" style={{display: 'none'}}><img className="center-block" src="/assets/images/loading.gif" alt /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-widget mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="footer-logo mb-2"> <img className="img-center" src="/assets/images/footer-logo.png" alt /> </div>
            <div className="social-icons color-hover">
              <ul>
                <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                <li className="social-dribbble"><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li className="social-gplus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li className="social-youtube"><a href="#"><i className="fa fa-youtube" /></a></li>
              </ul>
            </div>
            <p className="text-white">© 2022  - Cupid Love All Right Reserved </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*=================================
footer */}
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
        <li className="skin-tomato" title="tomato" data-style="skin-tomato" />
        <li className="skin-ruby" title="ruby" data-style="skin-ruby" />
        <li className="skin-pelorous" title="pelorous" data-style="skin-pelorous" />
        <li className="skin-cranberry" title="cranberry" data-style="skin-cranberry" />
        <li className="skin-golden-sand" title="golden-sand" data-style="skin-golden-sand" />
        <li className="skin-deep-cerise" title="deep-cerise" data-style="skin-deep-cerise" />
        <li className="skin-la-rioja" title="la-rioja" data-style="skin-la-rioja" />
        <li className="skin-summer-sky" title="summer-sky" data-style="skin-summer-sky" />
        <li className="skin-amaranth" title="amaranth" data-style="skin-amaranth" />
        <li className="skin-light-tomato" title="light-tomato" data-style="skin-light-tomato" />
        <li className="skin-pacific-blue" title="pacific-blue" data-style="skin-pacific-blue" />
      </ul>
      <ul className="resetAll clearfix">
        <li><a target="_blank" className="button" href="#"><span>Purchase Now</span></a></li>
        <li><a className="button-reset button" href="#"><span>Reset All</span></a></li>
      </ul>
    </div>
  </div>
  <div id="back-to-top"><a className="top arrow" href="#top"><i className="fa fa-level-up" /></a></div>
</div>
    </>
  )
}

export default Home