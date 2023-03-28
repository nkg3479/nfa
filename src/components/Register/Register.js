import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import register from '../../Assets/img/register.png'
import vector from '../../Assets/img/Vector 2.png'
import './Register.css'
export default function Register() {
  return (
    <Container>
      <Row className='main-cont'>
          <Col className="d-flex align-items-begining flex-column m-auto">
                <Row>
                    <h1>REGISTER</h1>
                </Row>
                <Row>
                  <form className='form-val'>
                    <div className="form-group mb-4">
                      <label className='mb-3'>USER NAME</label>
                      <input type="email" className="form-control sizing1" placeholder="Name"/>
                    </div>
                  </form>
                </Row>
                <Row>
                <button className="button5" type="submit" name ="Submit"><img src={vector} alt="vector" className='p-2'/>Sign Up</button>
                </Row>
                <Row className='text'> 
                <p>Already a user?Login here</p>
                </Row>
          </Col>
          <Col className="d-flex align-items-end flex-column m-auto">
              <img src={register} alt="register image"/>
          </Col>
      </Row>
    </Container>
   
  )
}
