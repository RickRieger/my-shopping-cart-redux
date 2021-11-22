import { GET_USER, USER_ERROR } from '../actions/types';

const initialState = {
  user: null,
  hobbies: 'coding',
  friends: [],
  popular: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case USER_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
