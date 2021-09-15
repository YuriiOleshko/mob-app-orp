import React from 'react';
import { View } from "react-native";
import Logo from '../../../assets/svgs/Logo';
import styles from './Header.styles';
const Header = () => {
    return (
        <View style={styles.wrapper}>
            <Logo style={styles.logo}/>
        </View>
    );
};

export default Header;
