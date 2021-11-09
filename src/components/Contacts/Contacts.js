import PropTypes from 'prop-types';
import s from './Contacts.module.css';

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Contacts({ contacts, filteredContacts, removeContact }) {
  return (
    <div className={s.contacts}>
      {contacts.length === 0 ? (
        <p className={s.contacts__nothingText}>No contacts added</p>
      ) : (
        <ul className={s.contacts__list}>
          {filteredContacts.length === 0 ? (
            <p className={s.contacts__nothingText}>Nothing found</p>
          ) : (
            filteredContacts.map(contact => (
              <li className={s.contacts__item} key={contact.id}>
                <p className={s.contacts__text}>
                  {contact.name}: {contact.number}
                </p>
                <button
                  className={s.contacts__btn}
                  type="button"
                  onClick={() => removeContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filteredContacts: PropTypes.arrayOf(PropTypes.object),
  removeHandler: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeContact: id => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
