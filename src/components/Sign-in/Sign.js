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
export default function Sign(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(props.showPop);
  console.log(modalIsOpen)
  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#fff'; 
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
    <Modal
      isOpen={modalIsOpen}
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