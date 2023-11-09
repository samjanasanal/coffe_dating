import React from 'react'

function Home() {
  return (
    <>
        <div>
  
  
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
</div>
    </>
  )
}

export default Home