import React from 'react'
import Modal from 'react-modal';
import './login.css'

const customStyles = {
  overlay:{
    position: 'fixed',
    backgroundColor:'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)'
  },
  content: {
    position:'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    color:"white",
    backgroundColor:'rgb(38, 37, 37)',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'350px',
    height:'480px',
    border:'none',
    display:'flex',
    flexDirection:'column',
    borderRadius:'15px',
    paddingLeft:'50px',
    paddingTop:'30px'
  },
};

Modal.setAppElement(document.getElementsByClassName('App'));

export default function Index({showPop,setPop,login}) {
    const [data,setData]=React.useState({
        email:'',
        password:''
    })
    function handelSubmmit(e) {
        e.preventDefault()
        console.log(data)
    }
  return (
    <div>
    <Modal
      isOpen={showPop}
      onRequestClose={()=>(setPop(false))}
      style={customStyles}
      contentLabel="Login"
    >
      <h2 >Login IN</h2>
      <form className='signt' onSubmit={handelSubmmit}>
        <label className='signt' for="uname">Username</label><br/>
        <input type="text" name="uname" required onChange={(e)=>{setData({...data,email:e.target.value})}}/><br/>
        <label className='signt' for="pass" >Password</label><br/>
        <input type="password" name='pass' required onChange={(e)=>{setData({...data,password:e.target.value})}}/><br/>
        <button className="button1" type="submit" name ="Submit">Login</button>
        <p className='text'>Don't have an account? <span onClick={()=>{setPop(false)}}>Sign Up</span></p>
      </form>
     
    </Modal>
    </div>
  )
}