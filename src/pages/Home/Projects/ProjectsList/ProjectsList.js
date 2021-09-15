import React from 'react';
import {SafeAreaView, ScrollView, Text, FlatList} from "react-native";
import styles from "../../HomeScreen/HomeScreen.styles";
import Header from "../../../../components/Header";
import {useIntl} from "react-intl";
import {titleList} from "../Projects.lang";
import ProjectItem from "../ProjectItem";

const array = [{name: "My forest", region: "Oregon", square: "2767233.129"}, {
    name: "My forest",
    region: "Oregon",
    square: "2165233.129"
}, {name: "My forest", region: "Oregon", square: "2765273.129"}, {
    name: "My forest",
    region: "Oregon",
    square: "2265233.129"
}, {name: "My forest", region: "Oregon", square: "2765223.129"}, {
    name: "My forest",
    region: "Oregon",
    square: "2365233.129"
}, {name: "My forest", region: "Oregon", square: "2765231.129"}, {
    name: "My forest",
    region: "Oregon",
    square: "2465233.129"
},]
const ProjectsList = ({navigation}) => {
    const intl = useIntl();
    const renderItem = ({ item,index }) => (
        <ProjectItem state={item} navigation={navigation} count={index}/>
    );

    return (
        <SafeAreaView style={styles.wrapper}>
            <Header/>
            <Text style={styles.text}>{intl.formatMessage(titleList)}</Text>
                <FlatList
                    data={array}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    // keyExtractor={(item) => item.square}
                />
        </SafeAreaView>

    );
};

export default ProjectsList;
