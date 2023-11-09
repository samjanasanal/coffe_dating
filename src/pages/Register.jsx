import React , {useState} from 'react'
import { Helmet } from 'react-helmet'
import * as filestack from "filestack-js";
import { Form } from 'react-bootstrap'
import Axioscall from '../services/Api';
import { UserUrl } from '../services/BaseUrl';
import { Show_Toast } from '../utils/Toast';
import { Link, useNavigate } from 'react-router-dom';
function Register() {
  const [validated1,setvalidated1]=useState(false)
  const [ userdata,SetUserdata] = useState({sex:"male"})
  const navigate = useNavigate()

  console.log("userdata",userdata)
    const clients = filestack.init("AVg0GNiqZTK2dSviLe3YHz");
    const openFilePicker = () => {
      const options = {
        fromSources: ["local_file_system", "instagram", "facebook"],
        accept: ["image/*"],
        transformations: {
          crop: {
            aspectRatio: 2 / 2,
            force: true,
          },
        },
        maxFiles: 3, // Adjust the maximum number of files allowed
        minFiles: 1,
        uploadInBackground: false,
        onUploadDone: (res) => {
          const uploadedImages = res.filesUploaded.map((file) => file.url);
          SetUserdata({ ...userdata, iphotourlmage: uploadedImages });
        },
      };
      clients.picker(options).open();
    };  
    const isValid = (event, fun_name, setstate) => {
      const form = event.currentTarget;
        event.preventDefault();
        setstate(true);
        if (form.checkValidity() === false) {
          event.stopPropagation();
          return false;
        } else {
          fun_name();
          return true;
        }
      };
    const RegisterHandler=async()=>{
      try {
        let data = await Axioscall("post",UserUrl,userdata)
        console.log("data",data)
        if(data.status===200){
          Show_Toast(data.data.message,true)
          return navigate("/login")
        }
      } catch (error) {
        console.error(error)
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
            <h1 className="position-relative divider"><span className="sub-title w-100">Register</span></h1>
          </div>
        </div>
        <div className="col-md-12 mt-7">
          <ul className="page-breadcrumb">
            <li><a href="index-default.html"><i className="fa fa-home" /> Home</a> <i className="fa fa-angle-double-right" /></li>
            <li><a href="register.html">Pages</a> <i className="fa fa-angle-double-right" /></li>
            <li><span>register</span> </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=================================
 inner-intro*/} 
  {/*=================================
 login*/}
  <section className="login-form register-img dark-bg page-section-ptb" style={{background: 'url(/assets/images/pattern/04.png) no-repeat 0 0', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-lg-6">
        <Form noValidate validated={validated1}  onSubmit={(e)=>isValid(e,RegisterHandler,setvalidated1)} >
          <div className="login-1-form register-1-form clearfix text-center">
            <h4 className="title divider-3 text-white mb-3">sign up</h4>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-user" />
                <input id="Firstname" type="text" required onChange={(e)=>SetUserdata({...userdata,username:e.target.value})} value={userdata?.username??""} placeholder="User name" />
                <Form.Control.Feedback type="invalid">Please provide a Username </Form.Control.Feedback>
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-user" />
                <input id="Lastname" type="text" required onChange={(e)=>SetUserdata({...userdata,mobile:e.target.value})} value={userdata?.mobile??""} placeholder="Mobile" />
                <Form.Control.Feedback type="invalid">Please provide a mobile</Form.Control.Feedback>
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="fa fa-envelope-o" aria-hidden="true" />
                <input id="email" className="email" type="number" required onChange={(e)=>SetUserdata({...userdata,age:e.target.value})} value={userdata?.age??""} placeholder="Age" name="email" />
                <Form.Control.Feedback type="invalid">Please provide Age</Form.Control.Feedback>
              </div>
            </div>
            <div className="section-field mb-3 ">
                    <div className="field-widgets my-3 ">
                      <i class="fa-solid fa-genderless " />
                      <label className=" fontlarge">Male</label>&nbsp;
                      <input
                        id="number"
                        className="small-radio"
                        type="radio"
                        placeholder="Male"
                        name="male"
                        value={userdata.sex}
                        checked={userdata.sex==="male"}
                        onChange={(e) =>
                          SetUserdata({ ...userdata, sex: "male"})
                        }
                      />&nbsp;
                      <label className="label fontlarge" >Female</label>&nbsp;
                      <input
                        id="number"
                        className="small-radio"
                        type="radio"
                        placeholder="Female"
                        name="female"
                        checked={userdata.sex==="female"}
                        value={userdata.sex}
                        onChange={(e) =>
                          SetUserdata({ ...userdata, sex: "female"})
                        }
                      />&nbsp;
                      <label className="label fontlarge">Others</label>&nbsp;
                      <input
                        id="number"
                        className="small-radio"
                        type="radio"
                        placeholder="others"
                        name="others" 
                        checked={userdata.sex==="others"}
                        value={userdata.sex}
                        onChange={(e) =>
                          SetUserdata({ ...userdata, sex: "others" })
                        }
                      />&nbsp;
                    </div>
                  </div>
                  <div className="section-field  ">
                    <div className="field-widget mrgbottom text-start ">
                      <button className="btn btn-danger mb-3" type='button' onClick={openFilePicker}>
                        Upload Picture
                      </button>
                    </div>
                  </div>
            <div className="section-field mb-2">
              <div className="field-widget mrgbottom"> 
              
                <select className="form-select" onChange={(e)=>SetUserdata({...userdata,location:e.target.value})}>
                <option defaultValue="" selected value="">
                            -- Select Place --
                </option>
                <option value="ernakulam">Ernakulam</option>
                <option value="kannur">Kannur</option>
                <option value="kollam">Kollam</option>
                <option value="kozhikode">Kozhikode</option>
                <option value="palakkad">Palakkad</option>
                <option value="thiruvananthapuram">Thiruvananthapuram</option>
                <option value="wayanad">Wayanad</option>
                <option value="alappuzha">Alappuzha</option>
                <option value="idukki">Idukki</option>
                <option value="kasaragod">Kasaragod</option>
                <option value="kottayam">Kottayam</option>
                <option value="malappuram">Malappuram</option>
                <option value="pathanamthitta">Pathanamthitta</option>
                <option value="thrissur">Thrissur</option>
                </select>
                <Form.Control.Feedback type="invalid">Please provide sex</Form.Control.Feedback>
              </div>
            </div>
            
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="fa fa-briefcase" aria-hidden="true" />
                <input id="Proffesionname" onChange={(e)=>SetUserdata({...userdata,bio:e.target.value})} value={userdata?.bio??""} type="text" placeholder="Bio" />
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-padlock" />
                <input id="Password"  onChange={(e)=>SetUserdata({...userdata,password:e.target.value})} value={userdata?.password??""} className="Password" type="password" placeholder="Password" name="Password" />
                <Form.Control.Feedback type="invalid">Please provide Password</Form.Control.Feedback>
              </div>
            </div>
            <div className="section-field mb-3">
              <div className="field-widget"> <i className="glyph-icon flaticon-padlock" />
                <input id="ConfirmPassword"  onChange={(e)=>SetUserdata({...userdata,repassword:e.target.value})} value={userdata?.repassword??""} className="Password" type="password" placeholder="Confirm Password" name="Password" />
                <Form.Control.Feedback type="invalid">Please provide confirm password</Form.Control.Feedback>
              </div>
            </div>
            
            
           
            <div className="clearfix" />
            <div className="section-field text-uppercase text-center mt-2"> <button className="button  btn-lg btn-theme full-rounded animated right-icn" type='submit'><span>next<i className="glyph-icon flaticon-hearts" aria-hidden="true" /></span></button> </div>
            <div className="clearfix" />
            <div className="section-field mt-2 text-center text-white">
              <p className="lead mb-0">Have an account? <Link className="text-white" to={"/login"}><u>Sign In!</u> </Link></p>
            </div>
          </div>
          </Form>
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

    {/* bootstrap  */}
    <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script> 

    {/* appear  */}
    <script type="text/javascript" src="/assets/js/jquery.appear.js"></script> 

    {/* appear  */}
    <script type="text/javascript" src="/assets/js/jquery.appear.js"></script> 

    {/* Menu  */}
    <script type="text/javascript" src="/assets/js/mega-menu/mega_menu.js"></script> 

    {/* style customizer */}
    <script type="text/javascript" src="/assets/js/style-customizer.js"></script> 

    {/* custom  */}
    <script type="text/javascript" src="/assets/js/custom.js"></script>
</Helmet>

    </>
  )
}

export default Register