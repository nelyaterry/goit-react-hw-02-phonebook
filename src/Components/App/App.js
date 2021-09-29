import React, { Component } from "react";
import { Title } from "./App.styled";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../Contacts/Contacts";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  formSubmitHandler = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));
    console.log(this.state);
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Title>Contacts</Title>
        <Contacts contacts={this.state.contacts} />
        {/* <ul>
          {this.state.contacts.map(({ name, number, id }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button>Delete</button>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}
