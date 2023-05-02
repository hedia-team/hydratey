import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const Profile = (props?: SvgProps) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.1319 20.0585C19.1319 24.0395 13.6725 24.4997 9.56707 24.4997L9.27329 24.4994C6.65767 24.4931 -0.00012207 24.3279 -0.00012207 20.0344C-0.00012207 16.1346 5.23986 15.6134 9.31401 15.5938L9.86085 15.5934C12.4763 15.5998 19.1319 15.7649 19.1319 20.0585ZM9.56707 17.4049C4.42052 17.4049 1.81162 18.289 1.81162 20.0344C1.81162 21.7954 4.42052 22.688 9.56707 22.688C14.7124 22.688 17.3201 21.8038 17.3201 20.0585C17.3201 18.2975 14.7124 17.4049 9.56707 17.4049ZM9.56707 0.499695C13.1036 0.499695 15.9794 3.37674 15.9794 6.91325C15.9794 10.4498 13.1036 13.3256 9.56707 13.3256H9.52842C5.99915 13.3147 3.14023 10.4365 3.15227 6.90963C3.15227 3.37674 6.02935 0.499695 9.56707 0.499695ZM9.56707 2.22447C6.98112 2.22447 4.87706 4.3273 4.87706 6.91325C4.86863 9.49076 6.95696 11.5924 9.53205 11.602L9.56707 12.4644V11.602C12.1518 11.602 14.2546 9.498 14.2546 6.91325C14.2546 4.3273 12.1518 2.22447 9.56707 2.22447Z"
      fill={props?.color}
    />
  </Svg>
);

export default Profile;