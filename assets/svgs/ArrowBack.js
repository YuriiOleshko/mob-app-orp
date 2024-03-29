import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowBack = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={12} viewBox="0 0 18 12" fill="none">
            <Path xmlns="http://www.w3.org/2000/svg" d="M17 5.00001H3.82998L6.70998 2.12001C7.09998 1.73001 7.09998 1.10001 6.70998 0.710011C6.31998 0.320011 5.68998 0.320011 5.29998 0.710011L0.70998 5.30001C0.31998 5.69001 0.31998 6.32001 0.70998 6.71001L5.29998 11.3C5.68998 11.69 6.31998 11.69 6.70998 11.3C7.09998 10.91 7.09998 10.28 6.70998 9.89001L3.82998 7.00001H17C17.55 7.00001 18 6.55001 18 6.00001C18 5.45001 17.55 5.00001 17 5.00001Z" fill="#323232"/>
        </Svg>
    );
};

export default ArrowBack;
