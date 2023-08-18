import React from 'react';
import './register.css';
import img from "../assets/img/echess.jpg"



export const Register9 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt="" /> 
            <div className="form"> 
                <h1>E-Chess :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol>
                        <li>The game will be in <b>Online Mode</b></li><br />
                        <li>Its a <b>Time limited</b> Game. </li><br />
                        <li>The platform for the chess tournament will be in <a href='https://www.chess.com/'><b>Chess.com </b></a> which is available in Web Browsers.</li><br />
                        <li>Abusing the Organizer or the volunteers will lead you to Disqualifications.</li><br />
                        <li>The winner will be determined in terms of the points earned and time consumed by the player.</li><br />
                        <li></li>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
