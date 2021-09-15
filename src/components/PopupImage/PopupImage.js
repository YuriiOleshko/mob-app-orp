import React from 'react';
import {View, Image} from 'react-native'
import Delete from "../../../assets/svgs/Delete";
import styles from './PopupImage.styles'
import {Pressable} from "react-native";
import Modal from 'react-native-modal';

const PopupImage = ({uri, toogle, show}) => {
    return (
        <>
            <Modal isVisible={show}
            >
                <View style={styles.wrapper}>
                    <Pressable style={styles.delete} onPress={toogle}><Delete/></Pressable>
                    <Image style={styles.image} source={{
                        uri: uri
                    }}/>
                </View>
            </Modal>

        </>
    );
};


export default PopupImage;
