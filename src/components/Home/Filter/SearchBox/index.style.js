import { objToStyle } from 'utils/style';
import { size, color } from 'styles/base.style';


export default objToStyle({
  container: {
    backgroundColor: color.transparent,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: color.lightGray,
  },
});
