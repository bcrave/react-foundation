export const filterSearch = (data, searchTerm, setFilteredSearch) => {
  const list = data.map((id) => {
    return id;
  });
  const filteredList = list.filter((value) => {
    if (searchTerm === "") return value;
    const firstName = value.first_name.toLowerCase();
    const lastName = value.last_name.toLowerCase();
    const email = value.email;
    const gender = value.gender.toLowerCase();
    const ipAddress = value.ip_address;
    const result = `${firstName} ${lastName} ${email} ${gender} ${ipAddress}`;
    if (result.includes(searchTerm.toLowerCase())) return value;
  });
  setFilteredSearch(filteredList);
};
