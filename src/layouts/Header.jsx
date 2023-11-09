import React from 'react'

function Header() {
  return (
    <>
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
    </>
  )
}

export default Header