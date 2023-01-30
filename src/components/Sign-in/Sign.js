import React from 'react'
import Modal from 'react-modal';
import '../Sign-in/sign.css'
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
export default function Sign({showPop,setPop}) {
  let subtitle;
  console.log(showPop)

  function afterOpenModal() {
    subtitle.style.color = '#fff'; 
  }

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
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign Up</h2>
      <form className='signt'>
        <label className='signt' for="uname">Username</label><br/>
        <input type="text" name="uname" required/><br/>
        <label className='signt' for="pass" >Password</label><br/>
        <input type="password" name='pass' required/><br/>
        <label className='signt' for="re_pass" >Re-enter Password</label><br/>
        <input type="password" name="re_pass" required/><br/>
        <button className="button1" type="submit" name ="Submit">sign up</button>
        <p className='text'>Already a user?<a href='#'>Login</a></p>
      </form>
     
    </Modal>
    </div>
  )
}