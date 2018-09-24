import ADD_ITEM from './action-types';

export default function addItem({ listId, taskName, isCompleted = false }) {
  return {
    type: ADD_ITEM,
    payload: { listId, taskName, isCompleted }
  };
}