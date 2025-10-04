import { useNavigate } from 'react-router-dom';
import { LuScan } from 'react-icons/lu';
import './scanButton.css';

function ScanButton() {
  const navigate = useNavigate();

  const goToScanner = () => {
    navigate('/Scanner');
  }

  return (
    <button
      onClick={goToScanner}
      className='scan__button'
    >
      <LuScan 
        size={35}
        color='#fff'
      />
    </button>
  )
}

export default ScanButton;