import { objToStyle } from 'utils/style';
import { size, header } from 'styles/base.style';


export default objToStyle({
  header: {
    ...header.default,
  },
  iconDown: {
    fontSize: size.m,
    marginLeft: size.xs,
    marginBottom: -size.xxxxs,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
