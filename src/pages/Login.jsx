import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import Axioscall from '../services/Api'
import { LoginUrl, UserUrl } from '../services/BaseUrl'
import { Show_Toast } from '../utils/Toast'

function Login() {
    const [userdata,SetUserdata]=useState({username:"",password:""})
    const navigate = useNavigate()
    const loginHandler=async()=>{
      try {
        let data = await Axioscall("post",LoginUrl,userdata)
        // console.log("dataaaa",data)
        if(data.data.status===200){
          
          localStorage.setItem("token-cofee",data.data.token)
          localStorage.setItem("userid-cofee",data.data.user_id)
          window.location.href="/"
          // return navigate("/")
        }else{
          Show_Toast("incorrect password or username")
        }
      } catch (error) {
        
      }
    }
  return (
    <>
    <div>
  {/*=================================
 inner-intro*/}
  <section className="inner-intro bg bg-fixed bg-overlay-black-60" style={{backgroundImage: 'url(/assets/images/bg/inner-bg-1.jpg)'}}>
    <div className="container">
      <div className="row intro-title text-center">
        <div className="col-md-12">
          <div className="section-title">
            <h1 className="position-relative divider"> <span className="sub-title">login</span></h1>
          </div>
        </div>
        <div className="col-md-12 mt-7">
          <ul className="page-breadcrumb">
            <li><a href="index-default.html"><i className="fa fa-home" /> Home</a> <i className="fa fa-angle-double-right" /></li>
            <li><a href="login.html">Pages</a> <i className="fa fa-angle-double-right" /></li>
            <li><span>Login</span> </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 inner-intro*/}
  {/*=================================
 login*/}
  <section className="login-form login-img dark-bg page-section-ptb " style={{background: 'url(/assets/images/pattern/04.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="login-1-form clearfix text-center">
            <h4 className="title divider-3 text-white">SIGN IN</h4>
            {/* <div className="login-1-social my-4 my-md-5 text-center clearfix">
              <ul className="list-inline text-capitalize">
                <li><a className="fb" href="#"><i className="fa fa-facebook" /> Facebook</a></li>
                <li><a className="gplus" href="#"><i className="fa fa-google-plus" /> google+</a></li>
              </ul>
            </div> */}
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-user" />
                <input id="" className="" onChange={(e)=>SetUserdata({...userdata,username:e.target.value})} value={userdata?.username??""} type="text" placeholder="User name" name="web" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-padlock" />
                <input id="" className="" onChange={(e)=>SetUserdata({...userdata,password:e.target.value})} value={userdata?.password??""} type="password" placeholder="Password" name="Password" />
              </div>
            </div>
            {/* <div className="section-field text-uppercase"> <a href="#" className="float-end text-white">Forgot Password?</a> </div> */}
            <div className="clearfix" />
            <div className="section-field text-uppercase text-center mt-2"> <button className="button  btn-lg btn-theme full-rounded animated right-icn" onClick={()=>loginHandler()}><span>sign in<i className="glyph-icon flaticon-hearts" aria-hidden="true" /></span></button> </div>
            <div className="clearfix" />
            <div className="section-field mt-2 text-center text-white">
              <p className="lead mb-0">Don’t have an account? <Link className="text-white" to={`/register`}><u>Register now!</u> </Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 login*/}
 
</div>

<Helmet>
{/* jquery   */}
<script type="text/javascript" src="/assets/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/assets/js/popper.min.js"></script>

 {/* bootstrap */}
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>

{/* appear */}
<script type="text/javascript" src="/assets/js/jquery.appear.js"></script>

 {/* appear */}
<script type="text/javascript" src="/assets/js/jquery.appear.js"></script>

 {/* Menu */}
<script type="text/javascript" src="/assets/js/mega-menu/mega_menu.js"></script>

 {/* style customizer  */}
<script type="text/javascript" src="/assets/js/style-customizer.js"></script>

 {/* custom */}
<script type="text/javascript" src="/assets/js/custom.js"></script>
</Helmet>

    </>
  )
}

export default Login