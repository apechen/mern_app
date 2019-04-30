import { FETCH_POSTS, DELETE_POST } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload];
    case DELETE_POST: {
      const newArray = state.filter(post => post._id !== action.payload);
      return [...newArray];
    }
    default:
      return state;
  }
}
