import React,{useState,useEffect,useRef} from "react";
import './Login.css';
import {Link} from 'react-router-dom';
import logo from './dealon_Png.png';
import imgs from './image.png';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Login() {
    // const state = useSelector(state => state.UserReducer);
    // const dispatch = useDispatch();
    // const initialValue = useRef(true);
    
    // let history=useHistory();
    
    // useEffect(() => {
    
    
    //     if(!initialValue.current){
    //         console.log(state);
            
    //     }else{
    //         initialValue.current=false;
    //     }
    
    //     return()=>{
    //         history.push('/');
    //     }
    // }, [state,history])

    const [emailval,setemailval]=useState("");
    const [passwordval,setpasswordval]=useState("");

    const handlesubmit=(event)=>{
        event.preventDefault();
    }

    return (

        
        <div className='main-login'>
   
        <div className="login-contain">
            
        <div className="left-side">
        
   
           
         <nav class="navbar">
     <ul>
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#investor">Investor</a></li>
         <li><a href="#businesses">Businesses</a></li>
         <li><a href="#join us">Join Us</a></li>

     </ul>
    </nav>


    <div className="home">
     <div className="main">
     <div className="img-class">
         <img src={logo} id="img-id" alt="" />
         </div>

 </div>
</div>

        <form onSubmit={handlesubmit}>

            
                <label for="email1">email</label>
                <input placeholder="enter your email" type="email" value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id="email1"/>
                <label for="pwd1">password</label>
                <input placeholder="enter your password" type="password"  value={passwordval} onChange={(e)=>{setpasswordval(e.target.value)}}id="pwd1"/>

                <button type="submit" id="sub_butt">Login</button>

            </form>
            <div className="footer">
                             <h4>If you don't have an Account?</h4>

                                <h4>regiter as an investor<Link className='link' to='/investor'>investor</Link></h4>

                                <h4>regiter as a startup<Link className='link' to='/register'>startup</Link></h4>

                                
                             
                             
                         </div>
        </div>
        
        <div className="right-side">
        <div className="welcomeNote">
            
            </div>
            <div className="welcomeImg">
                        <img src={imgs} id='wel-img-id' alt=""  />
                    </div>
        </div>
</div>
</div>

)
    }
    

export default Login
