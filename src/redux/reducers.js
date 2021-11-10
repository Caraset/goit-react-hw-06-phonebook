import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { combineReducers } from '@reduxjs/toolkit';

function addContact(state, { payload }) {
  const isInContacts = state.find(el => el.name === payload.name);

  if (isInContacts) {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
  return [...state, payload];
}

const contacts = createReducer([], {
  [actions.submitContact]: addContact,
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
