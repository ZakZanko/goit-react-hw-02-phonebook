import propTypes from 'prop-types';
import { ContactItem } from 'components/Item/Item';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ol>
      {filterContacts().map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ol>
  );
};

ContactList.propTypes = {
  filterContacts: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
