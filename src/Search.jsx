export const Search = ({ children }) => {
    return <div className="search-container">{children}</div>;
};

export const SearchResult = ({ onSearch }) => {
    return (
        <input
            className="search"
            type="text"
            placeholder="Search anime..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export const NumResult = ({ animes }) => {
    return (
        <p className="search-results">
            Found <strong>{animes.length}</strong> results
        </p>
    );
};
