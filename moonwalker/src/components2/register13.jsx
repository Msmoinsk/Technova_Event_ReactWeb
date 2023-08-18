import React from 'react';
import './register.css';
import img from "../assets/img/poster.jpg"



export const Register13 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt=''/> 
            <div className="form"> 
                <h1>Poster Design :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol>
                        <li>Topics will be given to create a poster.</li><br />
                        <li>There will be total 3 rounds.</li><br />
                        <li>From 1 round 50% of the participants will be selected for the second and from second round maximum 4 people get selected for the final round naf there will be only one winner.</li><br />
                        <li>Using posters which is available online can lead to disqualification.</li><br />
                        <li>Multiple softwares can be used.</li><br />
                        <li>The winner will be decided on the basis of the space management, decorative works, using elements in the best way possible and attractiveness.</li><br />
                        <li>Have to send posters on time delay will not be appreciated and it'll lead to the disqualification.</li>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
