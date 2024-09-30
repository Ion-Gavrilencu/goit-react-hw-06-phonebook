import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <input type="text" onChange={handleChange} placeholder="Search contacts..." />
  );
};

Filter.propTypes = {
  updateFilter: PropTypes.func,
};

export default Filter;



