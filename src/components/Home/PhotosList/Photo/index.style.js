import { objToStyle } from 'utils/style';
import { size, image } from 'styles/base.style';

const containerWidth = (size.vw - 2 * size.xs) / 3;

export default objToStyle({
  imageContainer: {
    width: containerWidth,
    padding: size.xs,
    justifyContent: 'flex-end',
  },
  image: {
    ...image.default,
    width: containerWidth - 2 * size.xs,
    height: 'auto',
  },
});
