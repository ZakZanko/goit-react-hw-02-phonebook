import propTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
