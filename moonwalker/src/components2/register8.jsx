import React from 'react';
import './register.css';
import img from "../assets/img/websi.jpg"



export const Register8 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt="" /> 
            <div className="form"> 
                <h1>Website Build :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol>
                        <li>By Participating in our events, all participants already agree that they vow to respect the fellow participants and team behind this event.</li><br />
                        <li>The design should be suitable for computer screens, tablets and mobile phones.</li><br />
                        <li>Give a feel that the page is made for the specific user, in the sense that all relevant information is available upfront.</li><br />
                        <li>Ensure that the submission does not use any copyright-infringing material or any logo without permission by the entity which holds the rights for its use.</li><br />
                        <li>Home page must be named” index” in its URL. (Example: index.html)</li><br />
                        <li>At least one external link is required and it must:</li>
                        <ol type='a' className='ol2'>
                            <li>Clearly be a link, as evidenced by its appearance or by a mouse hover.</li>
                            <li>Open in a new window,</li>
                            <li>support or enhance the content of your site.This link may be a social media link, as long as it is non-personal.</li>
                        </ol>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
