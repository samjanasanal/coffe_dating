import React from 'react'
import { Helmet } from 'react-helmet'

function ProfileDetails() {
  return (
    <>
 <div>
  {/*=================================
 banner */}
  <section className="inner-intro details-page bg bg-fixed bg-overlay-black-20 position-relative" style={{backgroundImage: 'url(/assets/images/bg/inner-bg-2.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="profile-cntn text-white">
            <ul>
              <li><img src="/assets/images/profile/profile-img.png" alt /></li>
              <li><div className="profile-text"> <h2>shara blah</h2> <h5>25 Years Old USA</h5></div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 banner */}
  <section className="page-section-ptb pt-10 text-start">
    <div className="container">
      <div className="row mt-5 sm-mt-0">
        <div className="col-md-12 ">
          <h4 className="title divider-3 mb-5 sm-mb-3">Basic Details</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered text-center mb-0">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Loren</td>
                  {/* <td>Education</td>
                  <td>Diploma in Design</td> */}
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>Female</td>
                  {/* <td>Education</td>
                  <td>Diploma in Design</td> */}
                </tr>
                <tr className="tr-bg">
                  <td>Age</td>
                  <td>25 Years old</td>
                  {/* <td>Language</td>
                  <td>English, Spanish</td> */}
                </tr>
                <tr>
                  <td>Location</td>
                  <td>usa</td>
                  {/* <td>Height</td>
                  <td>168 cm</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-5 sm-mt-3">
        <div className="col-md-12 text-start">
          <h4 className="title divider-3 mb-5 sm-mb-3">About Me</h4>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. in voluptate velit esse cillum dolore eu fugiat nulla
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<Helmet>
    
{/* jquery  */}
<script type="text/javascript" src="/assets/js/jquery-3.6.0.min.js"></script>

{/* bootstrap */}
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>

{/* bootstrap */}
<script type="text/javascript" src="/assets/js/mega-menu/mega_menu.js"></script>

{/* style customizer */}
<script type="text/javascript" src="/assets/js/style-customizer.js"></script>

{/* custom */}
<script type="text/javascript" src="/assets/js/custom.js"></script>
</Helmet>

    </>
  )
}

export default ProfileDetails