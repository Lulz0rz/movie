import moment from 'moment';

const today = moment().format('YYYY-MM-DD');
const lastMonth = moment().subtract(30, 'days').format('YYYY-MM-DD');

const API_KEY = '3ce2bdc33570dc825f66bb02306749e8';
const API_BASE = 'https://api.themoviedb.org/3';

export const API_POPULAR_MOVIES = `${API_BASE}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
export const API_CINEMA_MOVIES = `${API_BASE}/discover/movie?primary_release_date.gte=${lastMonth}&primary_release_date.lte=${today}&sort_by=popularity.desc&api_key=${API_KEY}`;
export const API_SEARCH = `${API_BASE}/search/movie?include_adult=true&language=en&&api_key=${API_KEY}`;
export const API_MOVIE_INFO_BASE = `${API_BASE}/movie/`;
export const API_MOVIE_INFO_PARAMS = `?append_to_response=videos,images,credits&language=en&include_image_language=en,null&api_key=${API_KEY}`;
