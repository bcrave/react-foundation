const ContactsList = ({ filteredSearch }) => {
  return (
    <ul>
      {filteredSearch.map((value, key) => {
        return (
          <li key={key}>
            <p>{`${value.first_name} ${value.last_name}`}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
