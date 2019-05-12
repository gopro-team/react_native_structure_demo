import { objToStyle } from 'utils/style';
import { size, color, header } from 'styles/base.style';


export default objToStyle({
  container: {
    position: 'absolute',
    width: size.vw,
    top: header.default.height,
    height: size.vh - header.default.height,
    backgroundColor: color.white,
    zIndex: 5,
  },
  hide: {
    zIndex: -5,
  },
  show: {
    zIndex: 5,
  },
  searchBar: {
    backgroundColor: 'black',
  },
});
