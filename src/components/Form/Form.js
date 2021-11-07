import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import s from './Form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function onInputChange({ currentTarget }) {
    const name = currentTarget.name;
    const value = currentTarget.value;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();

    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;

    onSubmit({ name, number, id: uuidv4() });

    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.form__label}>
        Name
        <input
          className={s.form__input}
          onChange={onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
        />
        <label className={s.form__label}>
          Number
          <input
            className={s.form__input}
            onChange={onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
          />
        </label>
      </label>
      <button className={s.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
