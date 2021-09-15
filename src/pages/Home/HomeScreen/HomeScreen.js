import React from 'react';
import {ScrollView, View, Dimensions, PixelRatio, Text, SafeAreaView} from "react-native";
import Accordion from "../../../components/Accordion";
import styles from './HomeScreen.styles';
import Header from "../../../components/Header";
import CustomBtn from "../../../components/CustomBtn";
import AnswerIcon from '../../../../assets/svgs/AnswerIcon'
import {
    acc1Item2, labelBtn, title, acc1Item1, titleAcc1, titleAcc2,
    acc2Item1,
    acc2Item2,
    acc2Item3, info
} from "./HomeScreen.lang";
import {baseBtnStyles} from "../../../../styles/styleSheets";
import {useIntl} from "react-intl";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CustomAccordion from "../../../components/CustomAccordion";

const HomeScreen = ({navigation}) => {
    const DEVICE_HEIGHT = Dimensions.get('window').height;
    const intl = useIntl();
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView contentContainerStyle={[styles.wrapperMain]}>
                <Header/>
                <View style={styles.wrapperBlock}>
                    <View style={styles.flexWrapper}>
                        <Text style={styles.title}>{intl.formatMessage(title)}</Text>
                        <View style={styles.wrapAcc}>
                            <Accordion title={intl.formatMessage(titleAcc1)}
                                       items={[intl.formatMessage(acc1Item1), intl.formatMessage(acc1Item2)]}/>
                        </View>
                        <View style={styles.wrapAcc}>
                            <Accordion title={intl.formatMessage(titleAcc2)}
                                       items={[intl.formatMessage(acc2Item1), intl.formatMessage(acc2Item2), intl.formatMessage(acc2Item3)]}/></View>
                    </View>
                    <View>
                        <Pressable onPress={() => navigation.navigate("Faq")} style={styles.info}>
                            <AnswerIcon active={true}/>
                            <Text style={styles.infoText}>{intl.formatMessage(info)}</Text>
                        </Pressable>
                        <CustomBtn customStyle={baseBtnStyles} label={intl.formatMessage(labelBtn)}
                                   handleClick={() => navigation.navigate("Projects")}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
