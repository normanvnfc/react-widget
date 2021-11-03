import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {
  const [showModal, setShowModal] = useState();

  const addBookingHandler = (bookingData) => {
    fetch(
      'https://my-react-4a419-default-rtdb.firebaseio.com/bookings.json',
      {
        method: 'POST',
        body: JSON.stringify(bookingData),
        header: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      setShowModal(false);
    });
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Book now
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Are you sure?' onAddBooking={addBookingHandler} onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;