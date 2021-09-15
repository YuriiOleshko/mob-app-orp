import React, {useState} from 'react';
import Modal from "react-native-modal";
import {Pressable, Text, View} from "react-native";
import styles from "./PopupSccess.styles";
import Delete from "../../../assets/svgs/Delete";
import CustomBtn from "../CustomBtn";
import {useIntl} from "react-intl";
import {
    popupLabelBtn1,
    popupLabelBtn2,
    popupText1,
    popupText2,
    popupText3
} from "../../pages/Home/Projects/Projects.lang";
import {baseBtnCancelStyles, baseBtnSaveStyles, baseBtnSendStyles} from "../../../styles/styleSheets";
import Atten from "../../../assets/svgs/Atten";

const PopupSuccess = ({extend,setExtend}) => {
    const intl= useIntl();
    return (
        <>
            <Modal isVisible={extend.show}>
                <View style={styles.wrapper}>
                    <View style={styles.block}>
                        <View>
                            <Atten/>
                        </View>
                        <View>
                        <Text style={styles.text}>
                            {intl.formatMessage(popupText1)}
                        </Text>
                        <Text style={styles.text}>
                            {intl.formatMessage(popupText2)}
                        </Text>
                        <Text style={styles.text}>
                            {intl.formatMessage(popupText3)}
                        </Text>
                        </View>
                        <Pressable onPress={() => setExtend({...extend,show:false})} style={styles.delete}><Delete/></Pressable>
                        <View style={styles.wrapperBlock}>
                            <View style={styles.wrapperBtn}>
                            <CustomBtn customStyle={baseBtnCancelStyles} handleClick={() => setExtend({...extend,show:false})} label={intl.formatMessage(popupLabelBtn1)}/>
                            </View>
                            <View style={styles.wrapperBtn}>
                            <CustomBtn customStyle={baseBtnSaveStyles} handleClick={() =>setExtend({...extend,accept:true,show:false})} label={intl.formatMessage(popupLabelBtn2)}/>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default PopupSuccess;
