import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Trash = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={18} viewBox="0 0 14 18" fill="none" style={{marginRight:9}}>
            <Path xmlns="http://www.w3.org/2000/svg" d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V6C13 4.9 12.1 4 11 4H3C1.9 4 1 4.9 1 6V16ZM13 1H10.5L9.79 0.29C9.61 0.11 9.35 0 9.09 0H4.91C4.65 0 4.39 0.11 4.21 0.29L3.5 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H13C13.55 3 14 2.55 14 2C14 1.45 13.55 1 13 1Z" fill="#CECECE"/></Svg>
    );
};

export default Trash;
