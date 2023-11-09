import React, { useState , useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Axioscall from '../services/Api'
import { UserUrl } from '../services/BaseUrl';
import { useParams } from 'react-router-dom';

function ProfileDetails() {
  const {id}=useParams();
  useEffect(() => {   
    getUser()
  }, [])
  
  
  const [userdata,SetUserdata]=useState("")
  const getUser =async()=>{
    try {
      let data = await Axioscall("get",UserUrl,{id:id})
      if(data.status===200){
        SetUserdata(data.data[0])
      }

    } catch (error) {
      console.log(error)
    }
  }
  console.log("data",userdata)
  return (
    <>
 <div>
      {/* Banner section */}
      <section className="inner-intro details-page bg bg-fixed bg-overlay-black-20  position-relative" style={{ backgroundImage: 'url(/assets/images/bg/inner-bg-2.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile-cntn text-white">
                <ul>
                  <li><img src={userdata?.photourl??"/assets/images/profile/profile-img.png"} alt="Profile" /></li>
                  <li>
                    <div className="profile-text">
                      <h2>name</h2>
                      <h5>{userdata?.username??""}</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details section */}
      <section className="page-section-ptb pt-10 text-start">
        <div className="container">
          <div className="row mt-5 sm-mt-0">
            <div className="col-md-12">
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
                      <td>{userdata?.username??""}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{userdata?.sex??""}</td>
                    </tr>
                    <tr className="tr-bg">
                      <td>Age</td>
                      <td>{userdata?.age??""}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>{userdata?.location??""}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mt-5 sm-mt-3">
            <div className="col-md-12 text-start">
              <h4 className="title divider-3 mb-5 sm-mb-3">About Me</h4>
              <p className="mb-0">{userdata?.bio??""}</p>
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