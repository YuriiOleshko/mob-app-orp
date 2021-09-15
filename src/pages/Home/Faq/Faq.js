import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import {
    title,
    acc1Title,
    acc1Desc,
    acc2Title,
    acc2Desc,
    acc3Title,
    acc3Desc,
    acc4Title,
    acc4Desc,
    acc5Title,
    acc5Desc,
    acc6Title,
    acc6Desc,
    acc7Title,
    acc7Desc,
    acc8Title,
    acc8Desc,
    acc9Title,
    acc9Desc,
    acc10Title,
    acc10Desc,
    acc11Title,
    acc11Desc,
    acc12Desc,
    acc12Title,
    acc13Title,
    acc13Desc,
} from './Faq.lang'
import styles from "./Faq.styles";
import Header from "../../../components/Header";
import {useIntl} from "react-intl";
import CustomAccordion from "../../../components/CustomAccordion";

const Faq = () => {
    const intl = useIntl();
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView contentContainerStyle={[styles.wrapperMain]}>
                <Header/>
                <View style={styles.wrapperBlock}>
                    <View style={styles.flexWrapper}>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc1Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc1Desc)}</Text>
                                </View>
                            </CustomAccordion>
                        </View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc2Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc2Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc3Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc3Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc4Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc4Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc5Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc5Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc12Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc12Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc6Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc6Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc7Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc7Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc8Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc8Desc)}</Text>
                                </View>
                            </CustomAccordion>
                        </View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc13Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc13Desc)}</Text>
                                </View>
                            </CustomAccordion>
                        </View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc9Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc9Desc)}</Text>
                                </View>
                            </CustomAccordion></View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc10Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc10Desc)}</Text>
                                </View>
                            </CustomAccordion>
                        </View>
                        <View style={styles.wrapAcc}>
                            <CustomAccordion titleStyled={styles.title} title={intl.formatMessage(acc11Title)}>
                                <View>
                                    <Text style={styles.block}>{intl.formatMessage(acc11Desc)}</Text>
                                </View>
                            </CustomAccordion>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Faq;
