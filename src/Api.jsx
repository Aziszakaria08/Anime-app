import axios from "axios";

const baseurl = import.meta.env.VITE_REACT_APP_BASEURL;

export const getAnimesList = async () => {
    const anime = await axios.get(`${baseurl}/top/anime`);
    return anime.data;
};

export const animeSearch = async (q) => {
    const search = await axios.get(`${baseurl}/anime?q=${q}`);
    return search.data;
};
