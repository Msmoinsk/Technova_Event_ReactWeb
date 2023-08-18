import React from 'react';
import './Eve.css';
// import { Col } from 'react-bootstrap';
// import img from "../assets/img/1670258689699.png";
// import img_sec from "../assets/img/project-img1.png";
// import { BsChevronDoubleRight } from 'react-icons/bs'
// import { BsChevronDoubleLeft } from 'react-icons/bs'

import progra from "../assets/img/programi.jpg";
import debug from "../assets/img/debug.jpg";
import websit from "../assets/img/websi.jpg";
import echess from "../assets/img/echess.jpg";
import motkob from "../assets/img/motkob.jpg";
import froza from "../assets/img/froza.jpg";
import { useEffect } from 'react';



export const Eve2 = () =>{

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
            <h2>Programers Eve</h2>
            
                <ul>
                    <li className="list active" data-filter="all">All</li>
                    <li className="list" data-filter="cyber">CyberCode</li>
                    <li className="list" data-filter="website">Website</li>
                    <li className="list" data-filter="games">Fun/Console</li>
                </ul>
            
            <div className="cardBx">
                
                <div className="card" data-item="cyber">
                    <img src={progra} alt="" />
                    <div className="content">
                        <h4>CODING</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register6'>Explore</a>
                        </div>
                    </div>
                </div>
                
                
                <div className="card" data-item="cyber">
                    <img src={debug} alt="" />
                    <div className="content">
                        <h4>Debugging</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register7'>Explore</a>
                        </div>
                    </div>
                </div>
                
                
                <div className="card" data-item="website">
                    <img src={websit} alt="" />
                    <div className="content">
                        <h4>Website Build</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register8'>Explore</a>
                        </div>
                    </div>
                </div>
                
                
                <div className="card" data-item="games">
                    <img src={echess} alt="" />
                    <div className="content">
                        <h4>E-Chess</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>Free</b></span></p>
                            <a href='/components2/register9'>Explore</a>
                        </div>
                    </div>
                </div>


                <div className="card" data-item="games">
                    <img src={motkob} alt="" />
                    <div className="content">
                        <h4>Mortal Kombat</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>$10</b></span></p>
                            <a href='/components2/register10'>Explore</a>
                        </div>
                    </div>
                </div>


                <div className="card" data-item="games">
                    <img src={froza} alt="" />
                    <div className="content">
                        <h4>Forza 5</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fees<br/><span><b>$10</b></span></p>
                            <a href='/components2/register11'>Explore</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
        
}
