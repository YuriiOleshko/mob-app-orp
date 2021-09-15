import * as React from 'react';
import styles from './CustomBtn.styles'
import {Text, Pressable,TouchableOpacity} from "react-native";

const CustomBtn = ({label, handleClick, customStyle, icon,disabled  }) => {
    const disStyle=  disabled?styles.disable:'';
    const cssStyles = [styles.default, customStyle.btn,disStyle ];
    return (
        <TouchableOpacity
            style={cssStyles}
            onPress={(e) => handleClick(e)}
            disabled={disabled}
        >
            {icon && icon()}
            <Text  style={customStyle.text}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomBtn;
