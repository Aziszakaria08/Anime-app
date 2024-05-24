export const AnimeList = ({ animes, onSelectedAnime }) => {
    return (
        <ul className="list list-anime">
            {animes.map((anime) => (
                <Anime
                    key={anime.mal_id}
                    animes={anime}
                    onSelectedAnime={onSelectedAnime}
                />
            ))}
        </ul>
    );
};

const Anime = ({ animes, onSelectedAnime }) => {
    return (
        <li key={animes.mal_id} onClick={() => onSelectedAnime(animes.mal_id)}>
            <img
                src={animes.images.webp.image_url}
                alt={`${animes.title} cover`}
            />
            <h3>{animes.title}</h3>
            <div>
                <p>
                    <span>{animes.year}</span>
                </p>
            </div>
        </li>
    );
};
