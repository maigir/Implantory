import FormModal from './FormModal';
import './modal.css';


function Modal({ onClose, children }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
          <button 
            onClick={onClose} 
            className="modal-x-button"
          >
            ✕
          </button>
          {children}
      </div>
    </div>
  )
}

export default Modal;