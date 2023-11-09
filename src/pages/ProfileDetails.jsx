import React, { useState , useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Axioscall from '../services/Api'

function ProfileDetails() {
  const [data, setData] = useState({
    name: "",
    gender: "",
    age: "",
    location: "",
    bio: "",
  });

  const fetchDataFromApi = () => {
    // Define your API endpoint and data here
    const UserUrl = 'your-api-endpoint';
    const requestData = {
      // Define the data you want to send, e.g., user ID, request parameters, etc.
    };

    // Call the API using Axios or your Axioscall function
    Axioscall('get', UserUrl, requestData)
      .then((response) => {
        // Handle the API response data here
        const profileData = response.data;

        // Update the state with the profile data
        setData({
          name: profileData.name,
          gender: profileData.gender,
          age: profileData.age,
          location: profileData.location,
          bio: profileData.bio,
        });
      })
      .catch((error) => {
        // Handle API call errors here
        console.error('Error fetching profile data:', error);
      });
  };  
  return (
    <>
 <div>
      {/* Banner section */}
      <section className="inner-intro details-page bg bg-fixed bg-overlay-black-20 position-relative" style={{ backgroundImage: 'url(/assets/images/bg/inner-bg-2.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile-cntn text-white">
                <ul>
                  <li><img src="/assets/images/profile/profile-img.png" alt="Profile" /></li>
                  <li>
                    <div className="profile-text">
                      <h2>{data.name}</h2>
                      <h5>{data.age} {data.location}</h5>
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
                      <td>{data.name}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{data.gender}</td>
                    </tr>
                    <tr className="tr-bg">
                      <td>Age</td>
                      <td>{data.age}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>{data.location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mt-5 sm-mt-3">
            <div className="col-md-12 text-start">
              <h4 className="title divider-3 mb-5 sm-mb-3">About Me</h4>
              <p className="mb-0">{data.bio}</p>
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