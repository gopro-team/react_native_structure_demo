import { objToStyle } from 'utils/style';
import {
  size, header, remove, button
} from 'styles/base.style';


export default objToStyle({
  view: {
    zIndex: 10,
  },
  header: {
    ...header.default,
  },
  headerNoBorder: {
    borderBottomWidth: 0,
  },
  iconDown: {
    fontSize: size.m,
    marginLeft: size.xs,
    marginBottom: -size.xxxxs,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  badge: {
    ...remove.padding,
    width: size.m,
    height: size.m,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -size.xl,
  },
  badgeText: {
    flex: 1,
    fontSize: size.xs,
    fontWeight: 'bold',
  },
  btnText: {
    ...button.text,
    fontSize: size.s,
  },
});
