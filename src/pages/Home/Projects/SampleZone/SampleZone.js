import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, View, Text,  ActivityIndicator} from "react-native";
import styles from "./SampleZone.styles";
import {useNetInfo} from "@react-native-community/netinfo";

import ButtonBack from "../../../../components/ButtonBack";
import AccordionWithForm from "../../../../components/AccordionWithForm";
import CustomBtn from "../../../../components/CustomBtn";
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {addLable, LabelSave, LabelSend, LoaderLabelSend} from "../Projects.lang";
import {
    baseBtnSaveStyles,
    baseBtnSendStyles,
    baseBtnTransStyles,
} from "../../../../../styles/styleSheets";
import {useIntl} from "react-intl";
import Plus from "../../../../../assets/svgs/Plus";
import {clearAll, getAllKeys, getData} from "../../../../helpers/storage";
import ErrorPopup from "../../../../components/ErrorPopup";
import {addFilesToIpfs, initIPFS} from "../../../../helpers/ipfs";
import Modal from "react-native-modal";
import PopupSuccess from "../../../../components/PopupSuccess";

const arrForItereble = ['S1_T', 'S1_T', 'S1_T', 'S1_T', 'S1_T', 'S1_T', 'S1_T', 'S1_T', 'S1_T', 'S1_T',];
const SampleZone = ({route, navigation}) => {
    const netInfo = useNetInfo();
    const [check,setCheck] = useState(false)
    const [confirm,setConfirm] = useState({accept:false,show:false})
    const [loader,setLoader] = useState(false)
    const {control, handleSubmit, setValue, reset, watch, getValues, formState: {errors}, clearErrors} = useForm({
        defaultValues: {}
    });
    const [error, setError] = useState({type:0,show:false})
    const {paramsState, name, tokenId} = route.params;
    const storageName = 'sampleZone' + tokenId;
    console.log(netInfo,'netInfo')
    const onSubmit = async (data) => {
        // console.log(sampleZoneArray, 'sss')
        // clearErrors()
        if(netInfo.isConnected) {
            setConfirm({...confirm,show:true})
        }else{
            setError({type:1,show:true})
        }

    };

    const dataConfirm = async ()=>{
        setLoader(true);
        const storageKeys = await getAllKeys();
        console.log(await getAllKeys(), 'getAllKeys')
        if (storageKeys.includes(storageName)) {
            const value = await getData(storageName);
            const modifArray = []
            // await (async () => {
            for (let item of value) {
                const valueLabel = item[Object.keys(item)[0]].treeLabel;
                const valueTree = item[Object.keys(item)[0]].treeImage;
                const valueTreeIpfs =  await addFilesToIpfs(valueTree);
                const valueLabelIpfs =  await addFilesToIpfs(valueLabel);
                // console.log(await addFilesToIpfs(valueLabel),'await addFilesToIpfs(valueLabel)')
                item[Object.keys(item)[0]].treeLabel = valueTreeIpfs.Hash
                item[Object.keys(item)[0]].treeImage = valueLabelIpfs.Hash
            }
            // })();
            const readyToSend = await addFilesToIpfs(value);
            console.log(readyToSend,'readyToSend')
            setLoader(false)
        }
    }
    const [sampleZoneArray, setSampleZoneArray] = useState([...arrForItereble].map((el, index) => {
        return {[el + (index + 1)]: {height: '', diametr: '', select: '', treeImage: {}, treeLabel: {}}}
    }));
    const intl = useIntl();
    const addNewZone = () => {
        const newZones = sampleZoneArray.slice();
        const count = +Object.keys(newZones[newZones.length - 1])[0].match(/[0-9]+(?!.*[0-9])/)[0]
        newZones.push({
            ['S1_T' + (count + 1)]: {
                height: '',
                diametr: '',
                select: '',
                treeImage: null,
                treeLabel: null
            }
        });
        setSampleZoneArray(newZones)
    }
    const deleteZone = (count) => {
        const newZones = sampleZoneArray.slice().filter((el, index) => !(index === count));
        const updObj = {...watch()}
        delete updObj[Object.keys(sampleZoneArray[count])[0]]
        reset({...updObj})
        setSampleZoneArray(newZones)
    };

        useEffect(() => {
        // console.log(netInfo, 'netInfo')
        (async () => {

        const storageKeys = await getAllKeys();
            // console.log(await getAllKeys(), 'getAllKeys')
        if (storageKeys.includes(storageName)) {
            const value = await getData(storageName);
            // setSampleZoneArray(value)
            // console.log(value,'value')
            value.map(el => {
                setValue(Object.keys(el)[0] + '.treeImage', el[Object.keys(el)[0]].treeImage)
                setValue(Object.keys(el)[0] + '.treeLabel', el[Object.keys(el)[0]].treeImage)
                setValue(Object.keys(el)[0], {...el[Object.keys(el)[0]]},)
            });
            setSampleZoneArray(value)

        }
            setCheck(true);

            ;
            // await addFilesToIpfs()
        })();
    }, []);

    useEffect(async () => {
        if(check){
            const allInputs = watch();
            const currentData = [];
            for (let elem in allInputs) {
                currentData.push({[elem]: allInputs[elem]});
            }
            console.log(currentData,'currentData')
            try {
                const value = JSON.stringify(currentData)
                await AsyncStorage.setItem(storageName, value)
            } catch (e) {
                console.log(e, 'errro')
            }
        }
    }, [watch()]);

    useEffect(()=>{
        if(confirm.accept){
            (async () => {
                await dataConfirm();
                setConfirm({...confirm,accept:false})
            })();
        }


    },[confirm])

        // console.log(sampleZoneArray,'sp')
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView style={styles.wrapperScroll}>
                <View style={styles.wrapperHeader}>
                    <ButtonBack navigation={navigation}/>
                    <Text style={styles.title}>Sampling zone 1</Text>
                </View>
                {check?<View style={styles.wrapperMain}>
                    {sampleZoneArray.map((el, index) => (
                        <View style={styles.wrapAcc} key={index + el}>
                            <AccordionWithForm title={Object.keys(el)[0]} count={index} deleteZone={deleteZone}
                                               errors={errors} control={control} state={sampleZoneArray}
                                               saveData
                                               setState={setSampleZoneArray}/>
                        </View>
                    ))}
                    <CustomBtn handleClick={() => addNewZone()} label={intl.formatMessage(addLable)}
                               customStyle={baseBtnTransStyles} icon={() => <Plus/>}/>
                </View>:<View style={styles.loader}><ActivityIndicator size={50} color='#0000ff'/></View>    }
                <View style={styles.wrapperBtns}>
                    {/*<CustomBtn handleClick={() => saveData()} label={intl.formatMessage(LabelSave)}*/}
                    {/*           customStyle={baseBtnSaveStyles}/>*/}
                    <CustomBtn handleClick={handleSubmit(onSubmit)} label={intl.formatMessage(LabelSend)}
                               customStyle={baseBtnSaveStyles} disabled={!(netInfo.isConnected)}/>
                </View>
                <ErrorPopup extend={errors}
                            setExtend={setError}/>
                <Modal isVisible={loader}>
                    <View style={styles.wrapperLoader}>
                    <ActivityIndicator size={50} color='#2EC3E9'/>
                    <Text style={styles.textLoader}>{intl.formatMessage(LoaderLabelSend)} </Text>
                    </View>
                </Modal>
                <PopupSuccess extend={confirm}  setExtend={setConfirm}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SampleZone;
