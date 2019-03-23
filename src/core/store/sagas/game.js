import { put, call } from 'redux-saga/effects';

import { Types } from 'core/store/ducks/game';

import { GameRepository } from 'core/repository';

export function* getCharacters() {
  try {
    const response = yield call(GameRepository.list);

    yield put({
      type: Types.SUCCESS_FETCH_CHARACTERS,
      payload: { data: response.data, nextPage: response.page },
    });
  } catch (err) {
    yield put({ type: Types.FAILURE_FETCH_CHARACTERS });
  }
}

export function* getDetails(action) {
  try {
    const response = yield call(GameRepository.details, action.information);

    yield put({
      type: Types.SUCCESS_FETCH_DETAILS,
      payload: { openDetail: true, key: action.key, data: response },
    });
  } catch (err) {
    yield put({ type: Types.FAILURE_FETCH_DETAILS });
  }
}

export function* loadMore(action) {
  try {
    const response = yield call(GameRepository.more, action.nextPage);

    yield put({
      type: Types.SUCCESS_FETCH_CHARACTERS,
      payload: { data: response.data, nextPage: response.page },
    });
  } catch (err) {
    yield put({ type: Types.FAILURE_FETCH_CHARACTERS });
  }
}
