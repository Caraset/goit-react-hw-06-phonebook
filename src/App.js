import { connect } from 'react-redux';

import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import s from './App.module.css';

function App({ contacts, filter }) {
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
      <Form />
      <h2 className={s.app__title}>Contacts</h2>
      <Filter />
      <Contacts filteredContacts={getFilteredContacts()} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(App);

// https://www.youtube.com/watch?v=5G-dG__cS0o остановился на 1:05:57
