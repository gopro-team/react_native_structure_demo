import { size, image, color } from 'styles/base.style';
import { TYPE_NAME } from 'consts/photo';

export default (type = TYPE_NAME.DEFAULT) => {
  let containerWidth;
  switch (type) {
    case (TYPE_NAME.DEFAULT): {
      containerWidth = (size.vw - 2 * size.xs) / 3;
      break;
    }
    case (TYPE_NAME.GRID_2): {
      containerWidth = (size.vw - 2 * size.xs) / 2;
      break;
    }
    case (TYPE_NAME.SINGLE): {
      containerWidth = (size.vw - 2 * size.xs);
      break;
    }
    default: {
      containerWidth = (size.vw - 2 * size.xs) / 3;
    }
  }
  return ({
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
    placeholder: {
      backgroundColor: color.lightGray,
    },
  });
};
