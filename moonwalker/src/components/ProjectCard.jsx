import React from "react";
import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">                    
        <a href={link} className="stretched-link" >
          <button>
            <img src={imgUrl} alt="images"/>
          </button>
        </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
// {/*import hashlink
// <hashlink to="idname">
//   <button>
//     <img/>
//   </button>
// </hashlink>*/}
