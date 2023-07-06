import { Component } from 'react';
import Container from './Container/Container';
import { ContactForm } from './Form/Form';
import { ContactFilter } from './Filter/Filter';
import { ContactList } from './List/List';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onformSubmit = ({ id, name, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onDeleteHandler = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filteredContacts] };
    });
  };

  onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.onformSubmit} contacts={contacts} />
        <h2>Contacts</h2>
        <ContactFilter onFilter={this.onFilter} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.onDeleteHandler}
          filterContacts={this.onFilterContacts}
        />
      </Container>
    );
  }
}
