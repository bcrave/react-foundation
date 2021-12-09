import { useState, useEffect } from "react";
import ContactsList from "../components/ContactsList";
import "../styles/contacts.scss";

import { filterSearch } from "../util/functions";

const Contacts = ({ data, searchTerm }) => {
  const [filteredSearch, setFilteredSearch] = useState(data);

  useEffect(() => {
    filterSearch(data, searchTerm, setFilteredSearch);
  }, [searchTerm]);

  return (
    <section className="contacts">
      <ContactsList filteredSearch={filteredSearch} />
    </section>
  );
};

export default Contacts;
