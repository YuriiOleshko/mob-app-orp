import React, {useState} from 'react';
import {List, Colors} from 'react-native-paper';
import styles from './Accordion.styles';
import { View } from 'react-native';
import InfoIcon from "../../../assets/svgs/InfoIcone";

const Accordion = ({title, items}) => {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);
    return (
        <List.Accordion
            title={title}
            style={styles.default}
            expanded={expanded}
            titleStyle={styles.title}
            onPress={handlePress}>
            <View style={styles.wrapperItem}>
            {items.map((el, index) => (
                <List.Item key={el + index} style={styles.item}
                           descriptionNumberOfLines={0}
                           titleNumberOfLines={0}
                           left={() => <InfoIcon style={styles.svg}/>}
                           title={el}
                           />
            ))}
            </View>
        </List.Accordion>
    );
};

export default Accordion;
