import { useState, useEffect } from 'react';

import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

import s from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function onSubmit(contact) {
    const isInContacts = contacts.find(el => el.name === contact.name);

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  }

  function removeContact(id) {
    const updContacts = contacts.filter(contact => contact.id !== id);

    setContacts(updContacts);
  }

  function onFilterChangeHandle({ currentTarget }) {
    const value = currentTarget.value;

    setFilter(value);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  }

  return (
    <div className={s.app}>
      <h1 className={s.app__title}>Phonebook</h1>
      <Form onSubmit={onSubmit} />
      <h2 className={s.app__title}>Contacts</h2>
      <Filter filterValue={filter} onInputChange={onFilterChangeHandle} />
      <Contacts
        contacts={contacts}
        filteredContacts={getFilteredContacts()}
        removeHandler={removeContact}
      />
    </div>
  );
}

export default App;
