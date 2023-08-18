import React from 'react';
import './register.css';
import img from "../assets/img/motkob.jpg"



export const Register10 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt="" /> 
            <div className="form"> 
                <h1>Mortal Kombat :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol> <h4><b>TECHNICAL RULES</b></h4>
                        <li>This Event will be offline at the venue <b>No Online Mode</b>.</li><br />
                        <li>Match duration will be of 4 mins per half.</li><br />
                        <li>Only finals will be played in "<b>best of 3</b>" mode.</li><br />
                        <li>All matches will be played in knock-out mode.</li><br />
                        <li>Players should not harm any gadget/device , if done so, he/she will be responsible for the penalty cost.</li><br />
                        <li>If any player noticies any technical or device issue, he/she should immediately inform the following incharges of the competition.</li><br />
                        <h4><b>IN GAME RULES</b></h4>
                        <li>Backpassing for more than 5 secs is strictly prohibited.</li><br />
                        <li>Continuous throughball samming from defender is not allowed.</li><br />
                        <li>After scoring a goal players shall skip the celebration.</li><br />
                        <li>Any type of slangs, misusing of words is prohibited.</li><br />
                        <li>A toss will be done and the winner will have the advantage to choose his team first.</li><br />
                        <li>Any decision taken by incharges will be stated as Final decision.</li>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
