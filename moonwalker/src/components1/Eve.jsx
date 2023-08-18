import React from 'react';
import './Eve.css';

import valorant from "../assets/img/valorent.jpg";
import freefire from "../assets/img/freefire.jpg";
import cod from "../assets/img/cod.jpg";
import clashroyal from "../assets/img/clashroyal.jpg";
import coming1 from "../assets/img/coming1.jpg";
import coming2 from "../assets/img/vrgame.jpg";
import pubg from "../assets/img/pubg.jpg";
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';


export const Eve = () =>{

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

            <h2>Populer Games</h2>
            
                <ul>
                    <li className="list active" data-filter="all">All</li>
                    <li className="list" data-filter="pc">PC Games</li>
                    <li className="list" data-filter="mobile">Mobile Games</li>
                    <li className="list" data-filter="soon">Coming soon</li>
                </ul>
            
            <div className="cardBx">
                
                <div className="card" data-item="pc">
                    <img src={valorant} alt="" />
                    <div className="content">
                        <h4>Valorent</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fee<br/><span><b>Free</b></span></p>
                            <a href='/components2/register1'>Explore</a>
                        </div>
                    </div>
                </div>

                
                <div className="card" data-item="mobile">
                    <img src={cod} alt="" />
                    <div className="content">
                        <h4>Cod</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fee<br/><span><b>Free</b></span></p>
                            <a href='/components2/register2'>Explore</a>
                        </div>
                    </div>
                </div>

                
                <div className="card" data-item="mobile">
                    <img src={clashroyal} alt="" />
                    <div className="content">
                        <h4>Clash Royal</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fee<br/><span><b>Free</b></span></p>
                            <a href='/components2/register3'>Explore</a>
                        </div>
                    </div>
                </div>

                
                <div className="card" data-item="mobile">
                    <img src={freefire} alt="" />
                    <div className="content">
                        <h4>Free Fire</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fee<br/><span><b>Free</b></span></p>
                            <a href='/components2/register4'>Explore</a>
                        </div>
                    </div>
                </div>

                
                <div className="card" data-item="mobile">
                    <img src={pubg} alt="" />
                    <div className="content">
                        <h4>New State</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Entry Fee<br/><span><b>Free</b></span></p>
                            <a href='/components2/register5'>Explore</a>
                        </div>
                    </div>
                </div>


                <div className="card" data-item="soon">
                    <img src={coming1} alt="" />
                    <div className="content">
                        <h4>Drone Show</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Register<br/><span><b>None</b></span></p>
                            <a href='/Day3'>2K24</a>
                        </div>
                    </div>
                </div>


                <div className="card" data-item="soon">
                    <img src={coming2} alt="" />
                    <div className="content">
                        <h4>VR Gaming</h4>
                        <div className="progress-line"><span></span></div>
                        <div className="info">
                            <p>Register<br/><span><b>None</b></span></p>
                            <a href='/Day3'>2K24</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        </>
    );
        
}
