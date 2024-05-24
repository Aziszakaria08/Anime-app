export const AnimeDetail = ({ selectedAnime }) => {
    if (selectedAnime) {
        // console.log(selectedAnime);
        const { title, score, synopsis, images } = selectedAnime;
        return (
            <div className="details">
                <header>
                    <img
                        src={`${images.webp.image_url}`}
                        alt={`${title} cover`}
                    />
                    <div className="details-overview">
                        <h2>{title}</h2>
                        <p>
                            {title} &bull; {score}
                        </p>
                    </div>
                </header>
                <section>
                    <p>
                        <em>{synopsis}</em>
                    </p>
                </section>
            </div>
        );
    }
};
