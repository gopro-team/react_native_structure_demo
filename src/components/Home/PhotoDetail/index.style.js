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
  likeNumberContainer: {
    marginLeft: size.xxs,
    width: 'auto',
  },
  likes: {
    fontSize: size.m,
    fontWeight: '600',
  },
  likeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFooter: {
    fontSize: size.xxl,
    marginHorizontal: size.xxs,
  },
  detailContainer: {
    padding: size.xs,
  },
  button: {
    marginRight: size.xs,
    marginBottom: size.xs,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detail: {

  },
  row: {
    flexDirection: 'row',
    padding: size.xxxs,
  },
  label: {
    fontSize: size.s,
    width: size.s * 7,
  },
  text: {
    fontSize: size.s,
  },
});
