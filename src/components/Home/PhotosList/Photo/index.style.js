import { objToStyle } from 'utils/style';
import { size, image } from 'styles/base.style';


export default objToStyle({
  imageContainer: {
    width: size.vw / 3,
    padding: size.xs,
    justifyContent: 'flex-end',
  },
  image: {
    ...image.default,
    width: size.vw / 3 - 2 * size.xs,
    height: 'auto',
  },
});
