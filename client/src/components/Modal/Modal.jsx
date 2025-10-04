import './modal.css';


function Modal({ onClose, children }) {
  return (
    <div className='modal__backdrop' onClick={onClose}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
          <button 
            onClick={onClose} 
            className='modal__close-button'
          >
            ✕
          </button>
          {children}
      </div>
    </div>
  )
}

export default Modal;