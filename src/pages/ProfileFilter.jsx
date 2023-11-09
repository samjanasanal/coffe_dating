import React, {  useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { ContextDatas } from '../services/Context'
import { Link, useNavigate } from 'react-router-dom'
import Axioscall from '../services/Api'
import { UserUrl } from '../services/BaseUrl'
import { Show_Toast } from '../utils/Toast'

function ProfileFilter() {
  const {SetFilterusers,filterusers,filterdata,SetFilterData}= useContext(ContextDatas)
  const navigate = useNavigate();
  useEffect(() => {
    
      filterHandlers()
    
  }, [])
  const filterHandlers=async()=>{
    try {
        let body= filterdata 
        if(!body.lat){
            let storedBodyString = localStorage.getItem("searchfilterdata");
            body = JSON.parse(storedBodyString)
            SetFilterData(body)
        }
        console.log("body",body)
        localStorage.setItem("searchfilterdata",JSON.stringify(body))
        let data = await Axioscall("get",UserUrl,body)
        console.log("datafiltered",data)
        if(data.status===200){
            SetFilterusers(data.data)
        }else{
            Show_Toast(data.data.message)
        }
    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
    <section className="page-section-ptb">
  <div className="container">
    <div className="row justify-content-center mb-5">
      
    </div>
    <div className="row">
    {filterusers.length?filterusers.map((itm,k)=>(
      itm.id===localStorage.getItem("userid-cofee")?"":
      <div className="col-lg-3 col-sm-6">
        <div className="team team-1 sm-mb-3">
          <div className="team-images"> <img className="img-fluid" src={itm?.photourl??"/assets/images/profile/01.jpg"} alt /> </div>
          <div className="team-description">
            <div className="team-tilte">
              <h5 className="title"><Link to={`/profileDetails/${itm.id}`}>{itm.username}</Link></h5>
              <span>{itm.age} Years Old </span> </div>
            {/* <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p> */}
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
      ))
      :""}
    </div>
  </div>
</section>


       {/* <section className="page-section-ptb profile-slider pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="title divider">Profiles</h2>
        </div>
      </div>
      <div className="row">
        
          
            {filterusers.length?filterusers.map((itm,k)=>(
              <div className="col-md-4">
              <div key={k} className="item"> <a href="profile-details.html" className="profile-item">
              <div className="profile-image clearfix"><img className="img-fluid w-100" src={itm?.photourl??"/assets/images/profile/01.jpg"} alt /></div>
              <div className="profile-details text-center">
                <h5 className="title">{itm?.username??""}</h5>
                <span>{itm?.age??""} Years Old</span> </div>
            </a> </div>
            </div>
            ))
            :""}
            
            
          
        
      </div>
    </div>
  </section>  */}

  <Helmet>
  <link href="assets/css/owl-carousel/owl.carousel.css" rel="stylesheet" type="text/css" />
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