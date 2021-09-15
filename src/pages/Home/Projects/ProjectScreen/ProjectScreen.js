import React from 'react';
import {ScrollView, SafeAreaView,View, Text} from "react-native";
import styles from "./ProjectScreen.styles";
import Header from "../../../../components/Header";
import ButtonBack from "../../../../components/ButtonBack";
import Map from "../../../../components/Map";
import SampleZoneItem from "../SampleZoneItem/SampleZoneItem";

const ProjectScreen = ({navigation,route}) => {
    const { paramsState,count} = route.params;

    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
            <Header/>
            <View style={styles.wrapperHeader}>
                <ButtonBack navigation={navigation}/>
                <Text style={styles.text}>{paramsState.name}</Text>
                <Text style={styles.textRegion}>{paramsState.region}</Text>
            </View>
                <Map/>
                <View style={styles.list}>
                    <SampleZoneItem navigation={navigation} state={paramsState} idToken={count+'1'}/>
                    <SampleZoneItem navigation={navigation} state={paramsState} idToken={count+'2'}/>
                    <SampleZoneItem navigation={navigation} state={paramsState} idToken={count+'3'}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProjectScreen;
