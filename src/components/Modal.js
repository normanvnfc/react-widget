import { useRef } from "react";

const Modal = (props) => {
  const titleInputRef = useRef()
  const nameInputRef = useRef()
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredName = nameInputRef.current.value;

    const bookingData = {
      title: enteredTitle,
      name: enteredName,
    }
    console.log(bookingData);
    
    props.onAddBooking(bookingData);    
  }
  
  return (
    <div className='modal'>
      <form onSubmit={submitHandler}>
        <div className="input-field">
          <label className="label-input">Title</label>
          <input type="text" className="input" ref={titleInputRef} />
        </div>        
        <div className="input-field">
          <label className="label-input">Name</label>
          <input type="text" className="input" ref={nameInputRef}/>
        </div>
        <button>submit</button>
      </form>
      <p>{props.text}</p>
      <button className='btn btn--alt' onClick={props.onClose}>
        Cancel
      </button>
      <button className='btn' onClick={props.onClose}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;