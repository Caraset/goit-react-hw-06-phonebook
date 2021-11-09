import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.app__title}>Phonebook</h1>
      <Form />
      <h2 className={s.app__title}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}

export default App;
