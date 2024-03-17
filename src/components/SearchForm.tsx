import search from "./../assets/icons/search.svg";
const SearchForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button type="submit">
        <img src={search} />
      </button>
      <input type="text" />
    </form>
  );
};

export default SearchForm;
