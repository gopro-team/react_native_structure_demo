import { objToStyle } from 'utils/style';
import { size, header } from 'styles/base.style';


export default objToStyle({
  container: {
    position: 'absolute',
    width: size.vw,
    top: header.default.height,
    height: size.vh - header.default.height,
    backgroundColor: '#ffffffee',
    zIndex: 0,
  },
});
