import React from 'react';
import './register.css';
import img from "../assets/img/quiz.jpg"



export const Register15 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt='' /> 
            <div className="form"> 
                <h1>Quiz :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol>
                        <li>Participants will be judged on the basis of points.</li><br />
                        <li>5 different sets of questions will be there.</li><br />
                        <li>Each set will consist of 10 questions.</li><br />
                        <li>First Participants to answer in WhatsApp will get a point.</li><br />
                        <li>If any rule violate by any Participant strict action will be taken like direct elimination.</li><br />
                        <li>Participants with most points and follow up will be awarded with winner and runner ups.</li><br />
                        <li>Winner will be awarded with a Certificate.</li>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
