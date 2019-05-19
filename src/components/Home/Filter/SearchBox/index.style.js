import { objToStyle } from 'utils/style';
import { size, color } from 'styles/base.style';


export default objToStyle({
  container: {
    backgroundColor: color.transparent,
    justifyContent: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  input: {
    backgroundColor: color.lightGray,
  },
  resultContainer: {
    position: 'absolute',
    top: 56,
    marginHorizontal: size.xs,
    width: size.vw - 2 * size.xs,
    borderRadius: size.xs,
    paddingHorizontal: size.xs,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.lightGray,
    backgroundColor: color.white,
    shadowColor: color.lightGray,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  noBottomDivider: {
    borderBottomWidth: 0,
  },
  textGray: {
    color: color.gray,
  },
  divider: {
    color: color.gray,
    fontSize: size.xs,
    marginHorizontal: 5,
  },
  subText: {
    color: color.gray,
    fontSize: size.xs,
  },
  center: {
    alignItems: 'center',
  },
});
