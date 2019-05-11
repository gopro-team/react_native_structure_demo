import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';

export const INITIAL_STATE = {
  isShowFilter: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appAction.TEST_ACTION:
      console.log(action.payload);
      return {
        ...state,
      };

    case appAction.TOGGLE_FILTER: {
      const { type } = action.payload;
      if (type === toggleType.TOGGLE) {
        return {
          ...state,
          isShowFilter: !state.isShowFilter,
        };
      } if (type === toggleType.OPEN) {
        return {
          ...state,
          isShowFilter: true,
        };
      } if (type === toggleType.CLOSE) {
        return {
          ...state,
          isShowFilter: false,
        };
      }
      return state;
    }

    default:
      break;
  }
  return state;
};
