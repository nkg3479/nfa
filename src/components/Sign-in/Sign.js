import React from 'react'
import Modal from 'react-modal';
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
    backgroundColor:"#000",
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
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
      <button onClick={closeModal}>close</button>
      <form>
        <label for="uname">Username</label><br/>
        <input type="text" name="uname" required/><br/>
        <label for="pass" >Password</label><br/>
        <input type="text" name='pass' required/><br/>
        <label for="re_pass" >Re-enter Password</label><br/>
        <input type="text" name="re_pass" required/><br/>
      </form>
    </Modal>
    </div>
  )
}