import React from 'react'
import {Container, Row } from 'react-bootstrap'
import "./about.css"
import Aboutreus from '../reuseable/Aboutreus';

const About = () => {
  return (
      <Container>
        <Row>
            <Aboutreus title="tumi" para="Et vero eos et accusamus et iusto odio dignissimos"/>
            <Aboutreus title="ami" para="Et vero eos et accusamus et iusto odio "/>
            <Aboutreus title="you" para="Et vero eos et accusamus et "/>

        </Row>
      </Container>
  )
}

export default About
