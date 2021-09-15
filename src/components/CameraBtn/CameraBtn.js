import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, Alert, Linking, ActivityIndicator} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import Delete from "../../../assets/svgs/Delete";
import {useIntl} from "react-intl";
import {placePhoto} from "../../pages/Home/Projects/Projects.lang";
import styles from './CameraBtn.styles'
import PopupImage from "../PopupImage";
import {Controller} from "react-hook-form";
import {addFilesToIpfs, initIPFS} from "../../helpers/ipfs";

const CameraBtn = ({title,state,change,type,control,name}) => {
    const [data, setData] = useState(null);
    const [uri, setUri] = useState('');
    const intl = useIntl();
    const [showPopup, setShowPopup] = useState(false)
    const [openCameraLoader, setOpenCameraLoader] = useState(false);
    const cameraPicker = async (func) => {
        try {
            setOpenCameraLoader(true);
            await ImagePicker.openCamera({mediaType: 'photo', includeBase64: true, compressImageQuality:0.6})
                .then(image => {
                    // change(type,image)
                    console.log(image,'image')
                    setData(image);
                    func(image)
                    setUri(image.path);
                    props.onChange?.(image);
                })
        } catch (e) {
            setOpenCameraLoader(false);
            if (e.message === 'User did not grant camera permission.') {
                return Alert.alert(
                    'To upload ID',
                    'Open settings and allow "Rhino Global" to access your Camera',
                    [
                        {
                            text: 'Later',
                            style: 'cancel',
                        },
                        {
                            text: 'Open Settings',
                            onPress: async () => Linking.openSettings(),
                        },
                    ],
                    {cancelable: false},
                );
            }
        }
        setOpenCameraLoader(false);
    };

    const clearImage = (func) => {
        // change(type,'')
        func(null);
        setData(null);
        setUri('');
    }
    useEffect( ()=>{
        console.log(state,'state')
        if(state[type]){
        setData(state[type]);
        setUri(state[type].path)
            console.log(data,'stateData')

            // await createSitForImg(data)
    }
    },[state[type]])

    return (
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (

                <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            {uri ?
                <View style={styles.viewTwo}>
                    {/*<Image style={{   width: 200,*/}
                    {/*    height: 200,}} source={{*/}
                    {/*    uri: uri}}/>*/}
                    <Pressable style={styles.block} onPress={() => setShowPopup(!showPopup)}>
                        <Text style={styles.textInner}>Image_1.jpg</Text>
                    </Pressable>
                    <Pressable onPress={()=>clearImage(onChange)}>
                        <Delete/>
                    </Pressable>
                </View> :
                <Pressable onPress={()=>cameraPicker(onChange)} style={styles.view}>
                    {openCameraLoader?<ActivityIndicator/>:
                    <Text style={styles.text}>{intl.formatMessage(placePhoto)}</Text>
                    }
                    </Pressable>
            }
            <PopupImage toogle={() => setShowPopup(!showPopup)} uri={uri} show={showPopup}/>
        </View>
            )}
            name={`${name}.${type}`}
            defaultValue=''
        />
    );
};

export default CameraBtn;
