import { appAction } from 'consts/actions';

export const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appAction.TEST_ACTION:
      console.log(action.payload);
      return {
        ...state,
      };

    default:
      break;
  }
  return state;
};
