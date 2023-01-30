import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import email from '../../Assets/img/email.gif'
import './contact.css'

export default function Contact() {
  return (
    <Container>
      <Row className='main-cont'>
          <Col className="d-flex align-items-begining flex-column m-auto">
                <Row>
                    <h1>Contact Us</h1>
                </Row>
                <Row>
                  <form className='form-val'>
                    <div className="form-group mb-4">
                      <label className='mb-3'>Email</label>
                      <input type="email" className="form-control sizing1" placeholder="someone@gmail.com"/>
                    </div>

                   <div className="form-group mb-4">
                      <label className='mb-3'>Message</label>
                      <textarea className="form-control sizing2" rows="9" placeholder='Write to us!'></textarea>
                    </div>
                  </form>
                </Row>
          </Col>
          <Col className="d-flex align-items-end flex-column m-auto">
              <img src={email} alt="email"/>
          </Col>
      </Row>
    </Container>
   
  )
}
