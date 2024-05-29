import React from 'react'
import { Col} from 'react-bootstrap'
import { FaBaseballBall } from "react-icons/fa";
const Aboutreus = ({title,para}) => {
  return (
    <>
    <Col lg={4}>
                <div className="about_inner">
                    <div className="about_icon">
                        <FaBaseballBall/>
                        </div>
                    <h3>{title}</h3>
                    <p>{para}</p>
                </div>
            </Col>
    
    
    </>
   
  )
}

export default Aboutreus
