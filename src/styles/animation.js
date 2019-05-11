import { size } from 'styles/base.style';

export const filterDropdown = (initialHeight = 0) => ({
  0: {
    opacity: 0,
    height: initialHeight,
  },
  1: {
    opacity: 1,
    height: size.vh,
  },
});
