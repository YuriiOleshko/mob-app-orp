import React,{useState} from 'react';
import { View,Easing,TouchableOpacity,Text,Animated } from 'react-native'
import ArrowAcc from "../../../assets/svgs/ArrowAcc";
import styles from './CustomAccordion.styles';
const CustomAccordion = ({title,children,style,titleStyled,change,error}) => {
    const spinValue = new Animated.Value(1);
    Animated.timing(
        spinValue,
        {
            toValue: 1,
            duration: 300,
            easing: Easing.linear, // Easing is an additional import from react-native
            useNativeDriver: true  // To make use of native driver for performance
        }
    ).start()
    const spinUp = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })
    const spinDown = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg']
    })
    const [expanded,setExpanded] = useState(false)
    const cssStyles = [styles.default, style,(error?styles.error:'')];
    return (
        <View style={cssStyles}>
            <TouchableOpacity style={styles.dropdown} onPress={()=>setExpanded(!expanded)}>
                <Text style={[styles.title,titleStyled]} >{title}</Text>
                <Animated.View style={[styles.svg,expanded?{transform: [{rotate: spinUp}]}:{transform: [{rotate: spinDown}]}]}>
                    <ArrowAcc/>
                </Animated.View>
            </TouchableOpacity>
            <Animated.View style={expanded?styles.active:styles.out}>
            {children}
            </Animated.View>
        </View>
    );
};

export default CustomAccordion;
