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
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
    </div>
  )
}