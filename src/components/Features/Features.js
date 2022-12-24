import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import lock from '../../Assets/img/lock.gif'
import Col from 'react-bootstrap/Col';
import './Features.css'

export default function Features() {
  return (
    <Container>
      <Row >
        <Col><img src={lock}></img></Col>
        <Col className="d-flex align-items-end flex-column m-auto">
        <Row className='heading text-right'>Safe and <br/>Secure</Row>
        <Row className='text-right line'>There's no one other than you who has <br/>access to your account. No third party, <br/>that's right not even us control your <br/>account credentials.</Row>
        </Col>
      </Row>
    </Container>
  )
}
