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
});
