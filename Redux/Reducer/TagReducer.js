const SHOW_TAG = 'SHOW_TAG';

const initialState = {
  tag: false,
};

export const TagReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TAG:
      return {
        ...state,
        tag: action.payload,
      };

    default:
      return state;
  }
};
