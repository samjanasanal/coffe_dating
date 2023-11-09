import React from 'react'

function Footer() {
  return (
    <>
       {/*=================================
footer */}
  <footer className=" text-white text-center" style={{background: 'url(images/pattern/04.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    {/* <div className="container">
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
    </div> */}
    <div className="footer-widget">
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
    </>
  )
}

export default Footer