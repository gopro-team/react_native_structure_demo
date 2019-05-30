import { objToStyle } from 'utils/style';
import { size, color } from 'styles/base.style';

const containerWidth = size.vw;

export default objToStyle({
  container: {
    paddingBottom: size.xs,
  },
  imageContainer: {
    width: containerWidth,
    justifyContent: 'flex-end',
  },
  image: {
    width: containerWidth,
    height: 'auto',
  },
  imageFooterContainer: {
    height: size.xxxxl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: size.xs,
  },
  imageNameContainer: {
    width: 'auto',
  },
  imageName: {
    fontSize: size.m,
  },
  iconsFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFooter: {
    fontSize: size.xxl,
    marginHorizontal: size.xxs,
  },
});
