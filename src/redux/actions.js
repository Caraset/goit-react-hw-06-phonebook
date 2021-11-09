export const submitContact = value => ({
  type: 'form/submit',
  payload: value,
});

export const deleteContact = id => ({
  type: 'contacts/delete',
  payload: id,
});

export const changeFilter = value => ({
  type: 'filter/input_change',
  payload: value,
});
