import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import lock from '../../Assets/img/lock.gif'
import Col from 'react-bootstrap/Col';

export default function Features() {
  return (
    <Container>
      <Row>
        <Col><img src={lock}></img></Col>
        <Col>
        <Row>Safe and <br/>Secure</Row>
        <Row>There's no one other than you who has access to your account. No third party, that's right not even us control your account credentials.</Row>
        </Col>
      </Row>
    </Container>
  )
}
