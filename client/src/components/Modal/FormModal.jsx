import { useState } from 'react';
import './formModal.css';

function FormModal({ onSubmit }) {
  const [ formData, setFormData ] = useState ({
    implantName: '',
    diameter: '',
    length: '',
    REF: '',
    LOT: '',
    status: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // reset form
    setFormData({ 
      implantName: '', 
      diameter: '', 
      length: '', 
      REF: '', 
      LOT: '' ,
      status: '',
    });
  };

  return (

    // TODO: validation!

    <form onSubmit={handleSubmit} className='form'>
      {Object.keys(formData).map(val => (
        <div key={val}>
          <label className='form__label'>{val}*</label>
          <input 
            type='text'
            name={val}
            value={formData[val]}
            onChange={handleChange}
            className='form__input'
          />
        </div>
      ))}
      <button 
        className='button' 
        type='submit'
      >
        Save
      </button>
    </form>
  );
}

export default FormModal;