import React from 'react';
import ArrowBack from "../../../assets/svgs/ArrowBack";
import {Pressable} from "react-native";

const ButtonBack = ({navigation}) => {
    return (
        <Pressable onPress={()=>navigation.goBack()} style={{position:'absolute',left:0,top:6,zIndex:2}}>
            <ArrowBack />
        </Pressable>
    );
};

export default ButtonBack;
