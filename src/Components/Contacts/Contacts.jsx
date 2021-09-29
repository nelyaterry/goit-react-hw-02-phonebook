const Contacts = ({ contacts }) => {
  console.log(contacts);
  return (
    // <p>helloWorld {contacts[0]}</p>

    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
