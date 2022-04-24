import * as actions from "./actionType";
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});
export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
export const bugDeleted = (id) => ({
  type: actions.BUG_DELETED,
  payload: {
    id,
  },
});
