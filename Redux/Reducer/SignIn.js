const BRANDNAME = 'BRANDNAME';

const initialState = {
  brandName: '',
  trueBrand: true,
};

export const SignIn = (state = initialState, action) => {
  switch (action.type) {
    case BRANDNAME:
      return {
        ...state,
        trueBrand: action.payload,
      };

    default:
      return state;
  }
};
