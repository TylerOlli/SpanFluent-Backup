import { getDecks } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const CLEAR_DECKS = 'CLEAR_DECKS';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function clearInitialDecks() {
  return {
    type: CLEAR_DECKS,
  };
}

export function addCard(card, title) {
  return {
    type: ADD_CARD,
    card,
    title,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks({ decks }));
    });
  };
}
