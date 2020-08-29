import { RECEIVE_DECKS, CLEAR_DECKS, ADD_CARD } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case CLEAR_DECKS:
      return {
        ...state,
        decks: {},
      };
    case ADD_CARD:
      const { card, title } = action;
      return {
        ...state,
        decks: {
          ...state.decks,
          [title]: {
            title: title,
            questions: state.decks[title].questions.concat([card]),
          },
        },
      };
    default:
      return state;
  }
}

export default decks;
