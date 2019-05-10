import { StyleSheet } from 'react-native';

export const objToStyle = object => StyleSheet.create(object);

export const arrayToStyles = (...array) => array.map(object => objToStyle(object));

export default {
  objToStyle,
  arrayToStyles,
};
