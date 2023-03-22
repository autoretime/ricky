import styles from "./style.module.scss";

const Search = ({ onChange, search }) => {

  return (
    <form className={styles.search}>
      <div className={styles.search_icon}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Filter by name..."
        onChange={onChange}
        value={search}
      />
    </form>
  );
};

export default Search;
