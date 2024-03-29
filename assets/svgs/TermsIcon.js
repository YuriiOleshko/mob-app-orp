import React from 'react';
import Svg, {Path} from 'react-native-svg';
import color from "../../styles/color";

const TermsIcon = ({active}) => {
    const cssColor = active?color.blueColorIcon:color.greyColorIcon ;
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
            <Path xmlns="http://www.w3.org/2000/svg" d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM16 16H2V4H16V16ZM13 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7H13C13.55 7 14 7.45 14 8C14 8.55 13.55 9 13 9ZM9 13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H9C9.55 11 10 11.45 10 12C10 12.55 9.55 13 9 13Z" fill={cssColor}/>
        </Svg>
    );
};

export default TermsIcon;
