
import './Hero.css'
import  home from '../../Assets/img/home.gif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Block} from '../block/Block';

export default function Hero() {
  // const [pop,setPop]=useState(false);
  // const [login,setLogin]=useState(true);
  return (
    <Container className='cont'>
        <Row>
            <Col className="m-auto">
              
                <Row className="head1">NFA Based</Row>
                <Row className='head1'>Authentication.</Row>
                <Row className='head2'>Your best and secure sign in solution</Row>
                <Row ><Button className='but' href="#" onClick={()=>Block()}>Get Started</Button></Row>
                
            </Col>
            <Col className='m-right'><img src={home} alt="home logo"/></Col>
        </Row>
        {/* {pop ? !login?<Sign showPop={pop} setPop={setPop} setLogin={setLogin} login={login}/>:<Login showPop={login} setPop={setLogin} />:null} */}
    </Container>
  )
}
