import { createActions, createReducer } from 'reduxsauce';
import { FormatDetails } from 'util';

// Action types & creators
export const { Types, Creators } = createActions({
  fetchCharacters: [],
  failureFetchCharacters: [],
  successFetchCharacters: ['characters'],
  fetchDetails: ['information', 'key'],
  failureFetchDetails: [],
  successFetchDetails: ['details'],
  resetDetails: [],
  handleScore: ['score'],
  resetScore: [],
  loadMore: ['nextPage'],
});

// Handlers
const INITIAL_STATE = {
  loading: false,
  characters: [],
  details: {
    films: '',
    species: '',
    vehicles: '',
  },
  score: 0,
  isPlaying: false,
  error: false,
  nextPage: '',
};

// Handlers Characters
const characters = (state = INITIAL_STATE) => ({ ...state, loading: true });

const successCharacters = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: false,
  characters: action.payload.data,
  nextPage: action.payload.nextPage,
});

const failureCharacters = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
  error: true,
});

// Handlers Details
const details = (state = INITIAL_STATE) => ({ ...state, loading: true });

const successDetails = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: false,
  openDetails: action.payload.openDetail,
  details: {
    ...state.details,
    [action.payload.key]: FormatDetails(state.details, action.payload),
  },
});

const failureDetails = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
  error: true,
});

const resetDetails = (state = INITIAL_STATE) => ({
  ...state,
  details: {},
});

// Handlers Score
const score = (state = INITIAL_STATE, action) => ({
  ...state,
  score: state.score + action.payload.score,
});

const reset = (state = INITIAL_STATE) => ({
  ...state,
  score: 0,
  isPlaying: false,
});

// Handler Load More
const loadMore = (state = INITIAL_STATE) => ({
  ...state,
  characters: [],
  loading: true,
});

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.FETCH_CHARACTERS]: characters,
  [Types.SUCCESS_FETCH_CHARACTERS]: successCharacters,
  [Types.FAILURE_FETCH_CHARACTERS]: failureCharacters,
  [Types.FETCH_DETAILS]: details,
  [Types.SUCCESS_FETCH_DETAILS]: successDetails,
  [Types.FAILURE_FETCH_DETAILS]: failureDetails,
  [Types.RESET_DETAILS]: resetDetails,
  [Types.HANDLE_SCORE]: score,
  [Types.RESET_SCORE]: reset,
  [Types.LOAD_MORE]: loadMore,
});
