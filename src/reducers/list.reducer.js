import ADD_ITEM from '../actions/action-types';
import initialStoreState from '../initialStoreState';

export default function listReducer(state = initialStoreState, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return payload;
    default:
      return state;
  }
}