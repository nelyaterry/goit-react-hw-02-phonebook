import PropTypes from "prop-types";

import {
  ContacstList,
  Contact,
  ContactName,
  ContactPhone,
  Button,
  MessageNotFound,
} from "./Contacts.styled";

const Contacts = ({ contacts, handleDeleteContact }) => {
  return (
    // <p>helloWorld {contacts[0]}</p>
    contacts.length > 0 ? (
      <ContacstList>
        {contacts.map(({ name, number, id }) => (
          <Contact key={id}>
            <ContactName>{name}</ContactName>
            <ContactPhone>{number}</ContactPhone>
            <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
          </Contact>
        ))}
      </ContacstList>
    ) : (
      <MessageNotFound>Contact not found</MessageNotFound>
    )
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
