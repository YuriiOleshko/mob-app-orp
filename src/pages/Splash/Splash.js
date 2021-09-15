import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import Header from "../../components/Header";
import Forest from "../../../assets/svgs/Forest";
import {useIntl} from "react-intl";
import {labelBtn, title, titleTwo} from "./Splash.lang";
import styles from './Splash.styles';
import CustomBtn from "../../components/CustomBtn";
import {baseBtnStyles} from "../../../styles/styleSheets";


const Splash = ({navigation}) => {
    const intl = useIntl()
    return (
        <SafeAreaView style={styles.wrapper}>
            <Header/>
            <View style={styles.introWrapper}>
                <View style={styles.intro}>
                    <Text style={styles.introTitle}>{intl.formatMessage(title)}</Text>
                    <Text style={styles.introSubTitle}>{intl.formatMessage(titleTwo)}</Text>
                </View>
                <View style={styles.img}>
                    <Forest/>
                </View>
            </View>
            <CustomBtn customStyle={baseBtnStyles} label={intl.formatMessage(labelBtn)} handleClick={() => navigation.navigate("Home")}/>
        </SafeAreaView>
    );
};

export default Splash;
