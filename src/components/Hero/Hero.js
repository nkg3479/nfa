import React from 'react'
import './Hero.css'
import  home from '../../Assets/img/home.gif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hero() {
  return (
    <Container>

        <Row>
            <Col className="col1">
                <Row className="head1">NFA Based</Row>
                <Row className='head1'>Authentication.</Row>
                <Row className='head2'>Your best and secure sign in solution</Row>
            </Col>
            <Col><img src={home} alt="home logo"/></Col>
        </Row>
    </Container>
  )
}
