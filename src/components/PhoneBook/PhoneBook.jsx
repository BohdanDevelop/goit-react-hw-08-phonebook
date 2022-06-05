import { useState, useCallback, useRef } from 'react';
import Contacts from './Components/Contacts';
import ContactsForm from './Components/ContactsForm';
import Filter from './Components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import actionCreators from '../../redux/contacts/actionCreators';

import { nanoid } from 'nanoid';

const PhoneBook = () => {
  const contacts = useSelector(values => {
    return values.contacts;
  });

  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const addContacts = data => {
    const action = actionCreators.addContact(data);
    dispatch(action);
  };
  const deleteContacts = useCallback(
    data => {
      const action = actionCreators.removeContact(data);
      dispatch(action);
    },
    [dispatch]
  );
  const handleSubmit = (name, number) => {
    const allTheName = contacts.map(elem => elem.name.toUpperCase());
    if (allTheName.includes(name.toUpperCase())) {
      alert(`${name} is already in contacts`);
    } else {
      addContacts({ name, number, id: `id-${nanoid()}` });
    }
  };
  const onDeleteClick = useCallback(
    evt => {
      if (evt.target.nodeName === 'BUTTON') {
        const deleteName = evt.target.name.toLowerCase();
        deleteContacts(deleteName);
      }
    },
    [deleteContacts]
  );
  const handleFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };
  const filteredContacts = () => {
    const newContacts = contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase().trim())
    );
    return newContacts;
  };
  // useEffect(() => {
  //   const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
  //   if (savedContacts?.length) {
  //     setContacts([...savedContacts]);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (!isFirstRender.current) {
  //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }

  //   isFirstRender.current = false;
  // }, [contacts]);
  return (
    <>
      <ContactsForm handleSubmit={handleSubmit} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <Contacts names={filteredContacts()} onClick={onDeleteClick} />
    </>
  );
};
export default PhoneBook;
