import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native'
import Delete from "../../../assets/svgs/Delete";
import Modal from "react-native-modal";
import styles from './ErrorPopup.styles'
import {useIntl} from "react-intl";
import {text1Error, text2Error} from "../../pages/Home/Projects/Projects.lang";

const ErrorPopup = ({extend, setExtend}) => {
    const [error, setError] = useState('');
    const intl = useIntl()
    useEffect(() => {
        switch (extend.type) {
            case 1:
                setError(intl.formatMessage(text1Error))
                break;
            case 2: {
                setError(intl.formatMessage(
                    text2Error
                ))
                break;

            }
        }
    }, [extend])
    return (
        <>
            <Modal isVisible={extend.show}>
                <View style={styles.wrapper}>
                    <View style={styles.block}>
                        <Text style={styles.text}>
                            {error}
                        </Text>
                        <Pressable onPress={() => setExtend(!extend)} style={styles.delete}><Delete/></Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default ErrorPopup;
