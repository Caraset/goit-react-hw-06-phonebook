import PropTypes from 'prop-types';
import s from './Filter.module.css';
import * as actions from '../../redux/actions';

import { connect } from 'react-redux';

function Filter({ setFilter, filterValue }) {
  const inputChangeHandler = ({ currentTarget }) => {
    const value = currentTarget.value;
    setFilter(value);
  };

  return (
    <div className={s.filter}>
      <p className={s.filter__title}>Find contacts by name</p>
      <input
        className={s.filter__input}
        type="text"
        name="filter"
        onChange={inputChangeHandler}
        value={filterValue}
      />
    </div>
  );
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  filterValue: PropTypes.string,
};

const mapStateToProps = ({ filter }) => {
  return {
    filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => dispatch(actions.changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
