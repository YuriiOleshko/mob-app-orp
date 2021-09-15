import React from 'react';
import { View, Text} from "react-native";
import Header from "../../../../components/Header";
import styles from './ModalProject.styles'
import CustomBtn from "../../../../components/CustomBtn";
import {baseBtnTransStyles} from "../../../../../styles/styleSheets";
import {labelBtn,title} from "../../Projects/Projects.lang";
import {useIntl} from "react-intl";
import AnswerIcon from "../../../../../assets/svgs/AnswerIcon";
const ModalProject = ({navigation}) => {
    const intl = useIntl()
    return (
        <View style={styles.wrapper}>
            <Header/>
            <View style={styles.block}>
            <Text style={styles.title}>{intl.formatMessage(title)}</Text>
            <CustomBtn customStyle={baseBtnTransStyles} label={intl.formatMessage(labelBtn)}
                       handleClick={() => navigation.navigate("Home")}
                       icon={()=><AnswerIcon active={true}/> }/>
        </View>
        </View>
    );
};

export default ModalProject;
