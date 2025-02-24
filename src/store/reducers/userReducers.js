import { ERROR, GET_DATA, LOADING, POST_DATA } from "../actions/userAction";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
      return { ...state, loading: false, error: null };
    }
    case POST_DATA: {
      return {
        ...state,
        loading: false,
        error: null,
        posts: [...state.posts, action.payload],
      };
    }

    case LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}