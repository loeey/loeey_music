//统一出口
import { recommendMusic, hotMusic } from "./Home";
import { hotSearch, searchResult } from "./Search";
import { getSongById, getLyricById } from "./Play";

export const recommendMusicAPI = recommendMusic
export const hotMusicAPI = hotMusic
export const hotSearchAPI = hotSearch
export const searchResultAPI = searchResult
export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById