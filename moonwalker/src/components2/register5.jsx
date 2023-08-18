import React from 'react';
import './register.css';
import img from "../assets/img/pubg.jpg"



export const Register5 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt="" /> 
            <div className="form"> 
                <h1>New State :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol>
                        <li>IN THE CASE OF THE SAME POINTS, THE TEAM WITH THE MOST KILLS WILL GET AN ADVANTAGE.</li><br />
                        <li>JOIN ROOM 5 MIN OTHERWISE, WE ARE NOT RESPONSIBLE IF ANY PLAYER SITS ON YOUR SLOT*.</li><br />
                        <li>IF YOU WERE KILLED BY A HACKER PROVIDE A SUITABLE DEATH CAM OR POV WITHOUT THAT WE CANNOT TAKE ANY ACTION.</li><br />
                        <li>RESULT SCREENSHOT OF MATCH IS COMPULSORY.</li><br />
                        <li>ROOM ID AND PASSWORD WILL BE SENT TO YOUR CAPTAIN 10 MINUTES BEFORE THE MATCH STARTS.</li><br />
                        <li>PLAYERS HAVING LEVEL 35 OR LESS IN-GAME MAY BE KICKED FROM THE ROOM DEPENDING UPON ADMIN TEAM'S DECISION.</li><br />
                        <li>ROOMS ARE CREATED BY THE SYSTEM. IF TEAMERS/HACKERS ARE FOUND IN THE MATCH, PLEASE REPORT THEIR ID'S OR IGN TO OUR CHAT SUPPORT WITH THE SCREENSHOT.</li><br />
                        <li>THE RESULT WILL BE ADJUSTED ACCORDING TO THE POINT TABLE.</li><br />
                        <li>THE TOTAL SCORE OF THE PLAYER (POSITION + KILL) WILL DETERMINE THEIR FINAL POSITION IN THE TOURNAMENT.</li> <br />
                        <li>TEAMING/HACKING WOULD RESULT IN A PERMANENT BAN FOR THE PLAYER FROM ALL FUTURE TOURNAMENTS. THE PLAYERS SHALL BE ALLOTTED REWARD ACCORDING TO THE FINAL POSITION AND KILLS YOU SECURE IN THE MATCH.</li><br />
                        <li>PLEASE DOWNLOAD ALL THE MAPS AND UPDATE YOUR GAME TO THE LATEST VERSION PRIOR TOURNAMENT.</li><br />
                        <li>THE DECISION OF ORGANIZERS IS FINAL AND BINDING.</li><br />
                        <li>ABUSING ADMINS IN ANY CONTEXT IS OUT OF BOUNDARIES AND CAN LEAD TO DISQUALIFICATION.</li>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
