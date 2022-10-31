import css from './App.module.css';
import React from 'react';
import { ContactList } from './ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <div className={css.conteiner}>
        <h1>Phonebook</h1>
        <form className={css.form}>
          <p>Name</p>
          <input type={'text'} />
          <p>Number</p>
          <input type={'tel'} />
          <button type={'submit'}>Add contact</button>
        </form>
        {/* <ContactForm ... /> */}

        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type={'text'} />
        {/* <Filter ... />
  <ContactList ... /> */}
        <ContactList />
      </div>
    );
  }
}
export default App;
