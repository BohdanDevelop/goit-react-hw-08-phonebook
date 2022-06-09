import { useCallback } from 'react';
import Contacts from './Components/Contacts';
import ContactsForm from './Components/ContactsForm';
import Filter from './Components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import actionCreators from '../../redux/contacts/actionCreators';
import selectValue from '../../redux/contacts/selectors';

const PhoneBook = () => {
  const contacts = useSelector(selectValue);

  const filter = useSelector(values => values.filter);

  const dispatch = useDispatch();
  const setFilter = data => {
    const action = actionCreators.setFilter(data);
    dispatch(action);
  };
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
      addContacts({ name, number });
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
    const newContacts = contacts.filter(({ name }) => {
      return name.toUpperCase().includes(filter.toUpperCase().trim());
    });
    return newContacts;
  };

  return (
    <>
      <ContactsForm handleSubmit={handleSubmit} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <Contacts names={filteredContacts()} onClick={onDeleteClick} />
    </>
  );
};
export default PhoneBook;
