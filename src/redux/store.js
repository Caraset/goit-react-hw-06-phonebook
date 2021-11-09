import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'form/submit':
      const isInContacts = state.contacts.find(el => el.name === payload.name);

      if (isInContacts) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }

      return { ...state, contacts: [...state.contacts, payload] };

    case 'contacts/delete':
      const filteredContacts = state.contacts.filter(
        contact => contact.id !== payload,
      );

      return { ...state, contacts: filteredContacts };

    case 'filter/input_change':
      return { ...state, filter: payload };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
