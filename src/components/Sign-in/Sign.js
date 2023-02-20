import React from 'react'
import Modal from 'react-modal';
import './sign.css'
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
export default function Sign({showPop,setPop,setLogin,login}) {
  let subtitle;
  console.log(showPop)

  function afterOpenModal() {
    subtitle.style.color = '#fff'; 
  }
 let ref = React.useRef(null);
  function closeModal() {
    setPop(false);
  }
  return (
    <div>
    <Modal
      isOpen={showPop}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Sign in"
    >
      <h2>Sign Up</h2>
      <form className='signt1'>
        <label className='signt1' for="uname">Username</label><br/>
        <input type="text" name="uname" required/><br/>
        <label className='signt1' for="pass" >Password</label><br/>
        <input type="password" name='pass' required/><br/>
        <label className='signt1' for="re_pass" >Re-enter Password</label><br/>
        <input type="password" name="re_pass" required/><br/>
        <button className="button1" type="submit" name ="Submit">sign up</button>
        <p className='text1'>Already a user?<span onClick={()=>{setLogin(!login)}}>Login</span></p>
      </form>
     
    </Modal>
    </div>
  )
}