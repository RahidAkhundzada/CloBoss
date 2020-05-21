const DRAWER = 'DRAWER';

const initialState = {
  drawer: true,
};

export const DrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER:
      return {
        ...state,
        drawer: action.payload,
      };

    default:
      return state;
  }
};
