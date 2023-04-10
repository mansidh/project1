import React,{useState} from 'react'
import './Register.css'
import {Link} from 'react-router-dom';
import logo from './dealon_Png.png';
// import registerImg from './img1.jpg';
function Register() {


const[email,setemail]=useState('');
const[Fusername,setFusername]=useState('');
const[Susername,setSusername]=useState('');
const[pwd1,setpwd1]=useState('');

const[bname,setbname]=useState('');
const[pname,setpname]=useState('');
const[sname,setsname]=useState('');
const[rname,setrname]=useState('');
const[oname,setoname]=useState('');

const handelsubmit=(e)=>{
    e.preventDefault();
}
    return (
        <div className='main-Register'>
          <div className="left-side">
                   {/* <div className="image">
                        <img src={registerImg} id='reg-img' alt="" srcset="" />
                   </div>  */}
                 
            </div>
            <div className="right-side">
               <div className="top-right">
                       <p>Already have an Account?
                      
                          <Link id='Links-signin' to='/'>Sign In</Link>   
                          </p> 
            </div>
            <div className="body-right">
                        <div className="container">
                        <h1>Create Account!</h1>
                        <form onSubmit={handelsubmit}>
                            <div className="input-group">
                            <h5> Name</h5>
                              <input type="text" name="Fname" value={Fusername}
                              onChange={(e)=>{setFusername(e.target.value)}} id="fname" />
                            </div>
                            <div className="input-group">
                                <h5> Email</h5>
                                <input type="Email" name="email" value={email} 
                                onChange={(e)=>{setemail(e.target.value)}} id="email1" />
                            </div>
                            <div className="input-group">
                                <h5> Password</h5>
                                <input type="password" value={pwd1} 
                                onChange={(e)=>{setpwd1(e.target.value)}}  name="pwd" id="pwd1" />
                            </div>
                            <div className="input-group">
                                <h5> Bussiness Name</h5>
                                <input type="text" name="bname" value={bname}
                                onChange={(e)=>{setbname(e.target.value)}} id="bname1" />
                            </div>
                            <div className="input-group">
                            <h5> phone</h5>
                              <input type="number" name="pname" value={pname}
                              onChange={(e)=>{setpname(e.target.value)}} id="pname1" />
                            </div>
                            <div className="input-group">
                            <h5> Revenue</h5>
                              <input type="number" name="rname" value={rname}
                              onChange={(e)=>{setrname(e.target.value)}} id="rname1" />
                            </div>
                            <div className="input-group">
                            <h5> Sale</h5>
                              <input type="number" name="sname" value={sname}
                              onChange={(e)=>{setsname(e.target.value)}} id="sname1" />
                            </div>
                            <div className="input-group">
                            <h5> Offer</h5>
                              <input type="text" name="oname" value={oname}
                              onChange={(e)=>{setoname(e.target.value)}} id="oname1" />
                            </div>
                                <input type="submit" id='sbtn' value="Submit" />
                            </form>
                        </div>

            </div>
           
            </div>
        </div>
    )
}

export default Register;