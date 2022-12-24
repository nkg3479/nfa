import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import lock from '../../Assets/img/lock.gif'
import transfer from '../../Assets/img/transfer.gif'
import Col from 'react-bootstrap/Col';
import './Features.css'

export default function Features() {
  return (
    <Container className="contain">
      <Row className='page1'>
        <Col><img className="secondimg" src={lock}></img></Col>
        <Col className="d-flex align-items-end flex-column m-auto">
        <Row className='heading text-right'>Safe and <br/>Secure</Row>
        <Row className='text-right line'>There's no one other than you who has <br/>access to your account. No third party, <br/>that's right not even us control your <br/>account credentials.</Row>
        </Col>
      </Row>

      <Row className='page1'>
        <Col className="d-flex align-items-begining flex-column m-auto"> 
        <Row className='heading text-left'>Transfer <br/>Your account?</Row>
        <Row className='text-left line'>Possible through NFA.<br/>Hassle free and with a single click.</Row>
        </Col>
        <Col><img className="secondimg" src={transfer}></img></Col>
      </Row>
    </Container>
   
  )
}
