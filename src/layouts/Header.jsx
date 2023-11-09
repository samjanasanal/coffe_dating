import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const logoutHandler=()=>{
    localStorage.clear()
    navigate("/login")
  }
  let  pathurl = window.location.pathname
  console.log("pathurl",pathurl)
  return (
    <>
       {/*=================================
header */}
  <header id="header" className="dark">
    {/* <div className="topbar">
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
    </div> */}
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
                {localStorage.getItem("token-cofee")?
                <ul className="menu-links">
                  {/* active class */}
                  <li className="active"><Link to={`/`}> Home </Link>
                    {/* drop down multilevel  */}
                  </li>
                  <li><a href="javascript:void(0)">Requests <i className="fa fa-angle-down fa-indicator" /></a>
                    {/* drop down multilevel  */}
                    <ul className="drop-down-multilevel left-menu">
                      <li><a href="stories.html">Send Requests</a></li>
                      <li><a href="stories-2.html">Received Requests</a></li>
                    </ul>
                  </li>
                  <li><Link to={`/profileDetails/${localStorage.getItem("userid-cofee")}`}>My Profile</Link>
                  </li>    
                  <li className='d-flex justify-content-center align-items-center'><a className=' text-danger ' style={{cursor:"pointer"}} onClick={()=>logoutHandler()}>LogOut</a>
                  </li>    
                </ul>
                :""}
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