import React from 'react';
import './register.css';
import img from "../assets/img/clashroyal.jpg"



export const Register3 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt="" /> 
            <div className="form"> 
                <h1>Clash Royal :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol> <h4><b>Technical Rules</b></h4>
                        <li>Matches will be played in normal 1v1 mode.</li><br />
                        <li>Each match will be a <b>KNOCK-OUT</b> match.</li><br />
                        <li>Semi-finals will be played in "<b>best of 3</b>" format.</li><br />
                        <li>Players shall be online on the given match time or else direct win will be awarded to the opponent no rematch will be done.</li><br />
                        <li>Any type of personal disturbance during a match wont be entertained and no rematch will be given. (eg. Calls, internet issues during the match)</li><br />
                        
                        <h4><b>In-Game rules</b></h4>
                        <li>If any technical error occurs the players may inform the following incharges with proper proof (i.e screenshot , recording).</li><br />
                        <li>Players shall not quit any ongoing game if done so , the final scores will be considered ethical.</li><br />
                        <li>In best of 3,5 rounds, players cannot use the same deck in back to back 2 rounds.</li>
                    </ol>
                    
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
