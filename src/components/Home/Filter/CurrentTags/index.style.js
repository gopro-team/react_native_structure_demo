import { objToStyle } from 'utils/style';
import { size, color } from 'styles/base.style';


export default objToStyle({
  view: {
    padding: size.xs,
  },
  resultContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: size.xs,
  },
  button: {
    marginRight: size.xs,
    marginBottom: size.xs,
  },
  iconClose: {
    fontSize: 20,
    width: 20,
    height: 20,
    marginRight: 5,
    color: color.whiteBlur,
  },
});
