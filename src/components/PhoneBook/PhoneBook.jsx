import { useCallback, useEffect } from 'react';
import Contacts from './Components/Contacts';
import ContactsForm from './Components/ContactsForm';
import Filter from './Components/Filter';
import { useSelector, useDispatch } from 'react-redux';

import selectors from '../../redux/contacts/selectors';
import operations from '../../redux/contacts/contactsOperation';
import filterAct from '../../redux/contacts/filterSlice';

const PhoneBook = () => {
  const contacts = useSelector(value => selectors.selectValue(value));
  const filter = useSelector(value => selectors.selectFilter(value));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchNumbers());
  }, [dispatch]);

  const handleSubmit = (name, number) => {
    dispatch(operations.addNumber({ name, phone: number }));
  };
  const onDeleteClick = useCallback(
    (evt, id) => {
      if (evt.target.nodeName === 'BUTTON') {
        dispatch(operations.deleteNumber(id));
      }
    },
    [dispatch]
  );
  const handleFilter = evt => {
    const { value } = evt.target;
    dispatch(filterAct.action.set(value));
  };
  const filteredContacts = () => {
    const newContacts = contacts.items.filter(({ name }) => {
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
