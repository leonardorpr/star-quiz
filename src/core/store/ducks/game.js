import { createActions, createReducer } from 'reduxsauce';

// Action types & creators
export const { Types, Creators } = createActions({
  fetchCharacters: [],
  failureFetchCharacters: [],
  successFetchCharacters: ['characters'],
  fetchDetails: ['url'],
  failureFetchDetails: [],
  successFetchDetails: ['details'],
  handleScore: ['score'],
  resetScore: [],
});

// Handlers
const INITIAL_STATE = {
  loading: false,
  characters: [],
  details: {},
  score: 0,
  isPlaying: false,
  error: false,
};

// Handlers Characters
const characters = (state = INITIAL_STATE) => ({ ...state, loading: true });

const successCharacters = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: false,
  characters: [...action.payload.data],
});

const failureCharacters = () => ({ loading: false, error: true });

// Handlers Details
const details = (state = INITIAL_STATE) => ({ ...state, loading: true });

const successDetails = action => ({
  loading: false,
  error: false,
  details: [...action.payload],
});

const failureDetails = () => ({ loading: false, error: true });

// Handlers Score
const score = (state = INITIAL_STATE, action) => ({
  ...state,
  score: state.score + action.payload.score,
});

const reset = (state = INITIAL_STATE) => ({ ...state, score: 0, isPlaying: false });

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.FETCH_CHARACTERS]: characters,
  [Types.SUCCESS_FETCH_CHARACTERS]: successCharacters,
  [Types.FAILURE_FETCH_CHARACTERS]: failureCharacters,
  [Types.FETCH_DETAILS]: details,
  [Types.SUCCESS_FETCH_DETAILS]: successDetails,
  [Types.FAILURE_FETCH_DETAILS]: failureDetails,
  [Types.HANDLE_SCORE]: score,
  [Types.RESET_SCORE]: reset,
});
