import "../styles/Searchbar.scss";

const Searchbar = ({ setSearchTerm }) => {
  return (
    <form className="searchbar">
      <label className="search-field">
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <span className="placeholder">Search...</span>
      </label>
    </form>
  );
};

export default Searchbar;
