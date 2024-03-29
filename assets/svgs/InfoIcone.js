import React from 'react';
import Svg, {Path} from 'react-native-svg';

const InfoIcon = ({style}) => {
    return (
        <Svg style={style} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path xmlns="http://www.w3.org/2000/svg" d="M10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 -3.91654e-07 10 -8.74228e-07C4.48 -1.3568e-06 1.3568e-06 4.48 8.74228e-07 10C3.91654e-07 15.52 4.48 20 10 20ZM10 9C10.55 9 11 9.45 11 10L11 14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14L9 10C9 9.45 9.45 9 10 9ZM9 6C9 5.44771 9.44772 5 10 5C10.5523 5 11 5.44771 11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6Z" fill="#2EC3E9"/>
        </Svg>
    );
};

export default InfoIcon;
