import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';

export const INITIAL_STATE = {
  isShowFilter: false,
  filters: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appAction.TEST_ACTION:
      return {
        ...state,
      };

    case appAction.TOGGLE_FILTER: {
      const { type } = action.payload;
      let { isShowFilter } = state;
      if (type === toggleType.TOGGLE) {
        isShowFilter = !state.isShowFilter;
      } else if (type === toggleType.OPEN) {
        isShowFilter = true;
      } else if (type === toggleType.CLOSE) {
        isShowFilter = false;
      }
      return {
        ...state,
        isShowFilter,
      };
    }

    default:
      break;
  }
  return state;
};
