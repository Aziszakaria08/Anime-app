import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import "./App.css";
import { Search, NumResult, SearchResult } from "./Search";
import { getAnimesList, animeSearch } from "./Api";
import { AnimeList } from "./AnimeList";
import { AnimeDetail } from "./AnimeDetail";
import { Main } from "./MainMenu";
import { Box } from "./Box";

export function App() {
    const [animes, setAnimes] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(animes[0]);
    useEffect(() => {
        getAnimesList().then((result) => {
            setAnimes(result.data);
        });
    }, []);
    function handleSelectedAnime(id) {
        const filteredAnime = animes.filter((anime) => anime.mal_id === id)[0];
        if (filteredAnime) {
            setSelectedAnime(filteredAnime);
        }
    }
    //Handle Search
    const handleSearch = async (q) => {
        if (q.length > 3) {
            const query = await animeSearch(q);
            setAnimes(query.data);
            return;
        }

        if (q.length == 0) {
            getAnimesList().then((result) => {
                // console.log(result.data);
                setAnimes(result.data);
            });
        }
    };
    return (
        <>
            <Navbar>
                <Search>
                    <SearchResult onSearch={handleSearch} />
                </Search>
                <Search>
                    <NumResult animes={animes} />
                </Search>
            </Navbar>
            <Main>
                <Box>
                    <AnimeList
                        animes={animes}
                        onSelectedAnime={handleSelectedAnime}
                    />
                </Box>
                <Box>
                    <AnimeDetail selectedAnime={selectedAnime}></AnimeDetail>
                </Box>
            </Main>
        </>
    );
}