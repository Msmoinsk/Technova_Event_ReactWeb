import React from 'react';
import './register.css';
import img from "../assets/img/valorent.jpg"



export const Register1 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt="" /> 
            <div className="form"> 
                <h1>Valorent :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ducimus incidunt eum odit corporis velit. Ea maiores accusantium temporibus. Earum, ad quasi labore nobis laudantium explicabo rerum nisi perspiciatis quam.</li><br />
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus doloremque vero, neque nostrum unde eaque blanditiis sint in obcaecati et fugiat, quae quidem ipsam. Quas maxime rerum perspiciatis veritatis!</li><br />
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit voluptatem facere fugit itaque et doloremque aliquid placeat, velit suscipit quis repellat mollitia ipsum id, eaque ipsa ab veniam? Beatae.</li><br />
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto eaque aliquid rerum natus excepturi, neque voluptatem temporibus officiis blanditiis perspiciatis praesentium repellendus. Laboriosam dicta mollitia at debitis voluptas accusamus?</li>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
