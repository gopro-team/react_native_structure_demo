import * as Animatable from 'react-native-animatable';
import { size, header } from 'styles/base.style';

const filterFadeInDown = {
  0: {
    opacity: 0,
    translateY: header.default.height - size.vh,
  },
  1: {
    opacity: 1,
    translateY: 0,
  },
};

const filterFadeOutUp = {
  0: {
    opacity: 1,
    translateY: 0,
  },
  1: {
    opacity: 0,
    translateY: header.default.height - size.vh,
  },
};

Animatable.initializeRegistryWithDefinitions({
  filterFadeInDown,
  filterFadeOutUp,
});
