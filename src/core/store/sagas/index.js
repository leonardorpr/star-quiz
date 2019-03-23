import { takeEvery, all } from 'redux-saga/effects';

import { Types as GameTypes } from 'core/store/ducks/game';

import { getCharacters, getDetails } from './game';

export default function* root() {
  yield all([
    takeEvery(GameTypes.FETCH_CHARACTERS, getCharacters),
    takeEvery(GameTypes.FETCH_DETAILS, getDetails),
  ]);
}
