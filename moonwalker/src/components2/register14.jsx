import React from 'react';
import './register.css';
import img from "../assets/img/vianimate.jpg"



export const Register14 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt='' /> 
            <div className="form"> 
                <h1>VI Animation :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol>
                        <li>All the participants will be provided with the same topic and the participant must create an animation based on that topic using any Application/Software.</li><br />
                        <li>The Minimum and maximum length of the created animation should be 20 Sec and 60 sec respectively.</li><br />
                        <li>Topics will be provided 48 hours prior to the submission date.</li><br />
                        <li>Participants who failed to submit their videos on the given date and time will not be entertained.</li><br />
                        <li>Use of templates is strictly not allowed.</li>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
