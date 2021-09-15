import React, {useContext} from 'react';
import styles from './ProjectItem.styles'
import {TouchableWithoutFeedback, Text, View} from 'react-native'
import {metric} from "../Projects.lang";
import {useIntl} from "react-intl";

const ProjectItem = ({navigation, state,count}) => {
    const intl = useIntl();
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Project", {paramsState: state,count:count})}>
            <View style={styles.wrapper}>
                <Text style={styles.name}>{state.name}</Text>
                <Text style={styles.square}>{state.square} {intl.formatMessage(metric)}</Text>
                <Text style={styles.square}>{state.region}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ProjectItem;
