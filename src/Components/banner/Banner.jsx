import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { container } from 'react-bootstrap'
// import { Container, Row , } from 'react-bootstrap'
// import { FaBell } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import BannerImg from "../../assets/banner.png"
import "./banner.css"

const Banner = () => {
  return (
    <section>

       
        <Container>
            <Row>
                <Col lg={8}>
                    <div className="banner_text">
                        <div className="icon"> 
                         <FaBell className='bell'/> <span>Startup Business</span> 
                        </div>

                        <h3>Empowering startups to fuel their business growth </h3>
                        <p>  Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,<br />
                             velit                     
                             nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                        <a href="#">Get started now </a>                                
                        
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="banner_img" > 
                    <img src={BannerImg} alt="banner" />
                    
                    </div>
                </Col>
            </Row>


        </Container>

    </section>
  )
}

export default Banner