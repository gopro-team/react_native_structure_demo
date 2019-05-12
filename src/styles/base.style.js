import { Dimensions } from 'react-native';
import { objToStyle } from 'utils/style';

const { height, width } = Dimensions.get('window');

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
  vw: width,
  vh: height,
};

export const color = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  gray: '#cccccc',
  lightGray: '#eeeeee',
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

export const image = {
  default: {
  },
};

export const button = {
  text: {
    color: color.black,
  },
};

export const remove = {
  padding: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  margin: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
};
