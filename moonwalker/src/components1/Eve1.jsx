import React from 'react';
import './Eve.css';
// import { Col } from 'react-bootstrap';
// import img from "../assets/img/1670258689699.png";
// import img_sec from "../assets/img/project-img1.png";
// import { BsChevronDoubleRight } from 'react-icons/bs'
// import { BsChevronDoubleLeft } from 'react-icons/bs'

import ui from "../assets/img/uidesign.jpg";
import poster from "../assets/img/poster.jpg";
import vianime from "../assets/img/vianimate.jpg";
import quiz from "../assets/img/quiz.jpg";
import ff from "../assets/img/fifa.jpg";
import wwe from "../assets/img/wwe.jpg";
import { useEffect } from 'react';



export const Eve1 = () =>{

    useEffect(()=>{
        let list = document.querySelectorAll('.list');
        let card = document.querySelectorAll('.card');
        for(let i = 0; i<list.length; i++){
            list[i].addEventListener("click",function(){
                for (let j = 0; j<list.length; j++){
                    list[j].classList.remove('active');
                }
                this.classList.add('active');
                let datafilter = this.getAttribute('data-filter');

                for(let k = 0; k<card.length; k++){
                    card[k].classList.remove('active');
                    card[k].classList.add('hide');

                    if(card[k].getAttribute('data-item') === datafilter || datafilter === 'all'){
                        card[k].classList.remove('hide');
                        card[k].classList.add('active');
                    }
                }
            })
        }
    },[])
    
    return(
        <>
        <div className="games">
            <h2>Technical Eve</h2>
            
                <ul>
                    <li className="list active" data-filter="all">All</li>
                    <li className="list" data-filter="animate">Animation</li>
                    <li className="list" data-filter="mind">Mind Freak</li>
                    <li className="list" data-filter="games">Fun/Console</li>
                </ul>
            
            <div className="cardBx">
                
                <div className="card" data-item="animate">
                    <img src={ui} alt="" />
                    <div className="content">
                        <h4>UI DESIGN</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register12'>Explore</a>
                        </div>
                    </div>
                </div>
                
                
                <div className="card" data-item="animate">
                    <img src={poster} alt="" />
                    <div className="content">
                        <h4>Poster Design</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register13'>Explore</a>
                        </div>
                    </div>
                </div>


                <div className="card" data-item="animate">
                    <img src={vianime} alt="" />
                    <div className="content">
                        <h4>VI Animation</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register14'>Explore</a>
                        </div>
                    </div>
                </div>
                
                
                <div className="card" data-item="mind">
                    <img src={quiz} alt="" />
                    <div className="content">
                        <h4>QUIZ RIVALS</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register15'>Explore</a>
                        </div>
                    </div>
                </div>
                
                
                <div className="card" data-item="games">
                    <img src={ff} alt="" />
                    <div className="content">
                        <h4>FIFA 22</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>$10</b></span></p>
                            <a href='/components2/register16'>Explore</a>
                        </div>
                    </div>
                </div>


                <div className="card" data-item="games">
                    <img src={wwe} alt="" />
                    <div className="content">
                        <h4>WWE 2K22</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>$10</b></span></p>
                            <a href='/components2/register17'>Explore</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
        
}
