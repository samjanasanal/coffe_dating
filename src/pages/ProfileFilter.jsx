import React from 'react'
import { Helmet } from 'react-helmet'

function ProfileFilter() {
  return (
    <>
       <section className="page-section-ptb profile-slider pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="title divider">Profiles</h2>
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

  <Helmet>
     {/* jquery  */}
     <script type="text/javascript" src="/assets/js/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="/assets/js/popper.min.js"></script>

    {/* bootstrap */}
    <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>

    {/* appear */}
    <script type="text/javascript" src="/assets/js/jquery.appear.js"></script>

    {/* Menu */}
    <script type="text/javascript" src="/assets/js/mega-menu/mega_menu.js"></script>

    {/* owl-carousel */}
    <script type="text/javascript" src="/assets/js/owl-carousel/owl.carousel.min.js"></script>

    {/* select */}
    <script type="text/javascript" src="/assets/js/select/jquery-select.js"></script>

    {/* counter */}
    <script type="text/javascript" src="/assets/js/counter/jquery.countTo.js"></script>

    {/* Magnific Popup */}
    <script type="text/javascript" src="/assets/js/magnific-popup/jquery.magnific-popup.min.js"></script>

    {/* style customizer */}
    <script type="text/javascript" src="/assets/js/style-customizer.js"></script>

    {/* custom */}
    <script type="text/javascript" src="/assets/js/custom.js"></script>
  </Helmet>
    </>
  )
}

export default ProfileFilter