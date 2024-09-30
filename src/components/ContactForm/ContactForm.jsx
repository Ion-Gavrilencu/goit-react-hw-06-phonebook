import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: Date.now().toString(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form structure */}
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};

export default ContactForm;




