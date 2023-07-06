import propTypes from 'prop-types';

export const ContactFilter = ({ filter, onFilter }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <div>
        <input type="text" name="filter" value={filter} onChange={onFilter} />
      </div>
    </div>
  );
};

ContactFilter.propTypes = {
  onFilter: propTypes.func,
  filter: propTypes.string,
};
