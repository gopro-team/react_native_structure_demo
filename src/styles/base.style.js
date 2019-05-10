import { objToStyle } from 'utils/style';

export const size = {
  xxxxs: 2,
  xxxs: 5,
  xxs: 8,
  xs: 10,
  s: 15,
  m: 18,
  l: 20,
  xl: 25,
  xxl: 30,
  xxxl: 35,
};

export const color = {
  white: 'white',
};

export const fontSize = {
  xs: {
    fontSize: size.xs,
  },
  m: {
    fontSize: size.m,
  },
  l: {
    fontSize: size.l,
  },
  xl: {
    fontSize: size.xl,
  },
};

export const header = {
  default: {
    height: 6 * size.xs,
    paddingLeft: size.xs,
    paddingRight: size.xs,
    paddingTop: size.xxxs,
    paddingBottom: size.xxxs,
    backgroundColor: color.white,
  },
};
