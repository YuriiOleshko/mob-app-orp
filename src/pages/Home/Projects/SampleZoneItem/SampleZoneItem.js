import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from "react-native";
import styles from "./SampleZoneItem.style";
import { useFocusEffect } from '@react-navigation/native';
import {getAllKeys, getData} from "../../../../helpers/storage";
import color from "../../../../../styles/color";

const SampleZoneItem = ({navigation,state,idToken}) => {

    const [status, setStatus] = useState(color.red)
    const storageName = 'sampleZone' + idToken;
    // useEffect(async ()=>{
    //     const storageKeys = await getAllKeys();
    //     if (storageKeys.includes(storageName)) {
    //         const value = await getData(storageName);
    //
    //         setStatus(chooseColor(value))
    //     }else setStatus(color.red)
    //
    //
    // },[status])
    useFocusEffect(() =>{
        (async () => {
        const storageKeys = await getAllKeys();
        if (storageKeys.includes(storageName)) {
            const value = await getData(storageName);

            setStatus(chooseColor(value))
        }else setStatus(color.red)
        })()
    });


    const chooseColor = (arr) =>{
        if(arr.length>0) {
            const revArr = arr.map((el) => {
                const obj = el[Object.keys(el)[0]];
                const newArr = []
                Object.values(obj).forEach(item => {
                    if (typeof item === "object") {
                        if (Object.keys(item).length > 0) {
                            newArr.push(true)
                        } else {
                            newArr.push(false)
                        }
                    } else if (item) {
                        newArr.push(true);
                    } else {
                        newArr.push(false);
                    }
                })
                return newArr;
            })
            const allIsValues = revArr.flat();
            if (allIsValues.every(el => el)) {
                return color.green
            } else if (allIsValues.some(el => el)) {
                return color.orange
            } else return color.red
        }else return color.red
    }
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("SampleZone",{paramsState: state,name:'Sampling Zone',tokenId:idToken})}>
            <View style={styles.wrapper}>
                <View style={styles.block}>
                    <View style={[styles.point,{backgroundColor:status}]}/>
                <Text style={styles.name}>Sampling Zone</Text>
                </View>
                <View style={styles.location}>
                    <Text style={styles.coord}>12.182.45.245.89 </Text>
                    <Text style={styles.coord}>11.122.45.345.35</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default SampleZoneItem;
