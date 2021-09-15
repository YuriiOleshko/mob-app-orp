import React, {useState} from 'react';
import {List, Colors, TextInput} from 'react-native-paper';
import styles from './Accordion.styles';
import {Text, View} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import color from "../../../styles/color";
import {
    deleteLable,
    inputDiameter,
    inputHeight,
    inputPlace, labelPhoto1, labelPhoto2,
    selectItem1,
    selectItem2,
    selectItem3,
    selectPlace
} from "../../pages/Home/Projects/Projects.lang";
import CameraBtn from "../CameraBtn/CameraBtn";
import CustomBtn from "../CustomBtn";
import {deleteBtnStyles} from "../../../styles/styleSheets";
import Trash from "../../../assets/svgs/Trash";
import {useIntl} from "react-intl";
import {Controller} from "react-hook-form";
import CustomAccordion from "../CustomAccordion";

const AccordionWithForm = ({title,count, deleteZone,control,errors, setState,state}) => {
    const intl = useIntl();
    // console.log(state,'state111')
    // const changeState =(type,value)=>{
    //     setState(state.map((el)=>{if(Object.keys(el).includes(title)){
    //         el[title][type]= value;
    //     }
    //         return el;
    //     }))
    // }
    return (
        <CustomAccordion
            title={title}
            style={styles.default}
            titleStyled={styles.title}
            error={errors[title]}
            >
            <View style={styles.wrapper}>
                <View style={styles.select}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <RNPickerSelect
                        style={{inputAndroid: {color: color.textBlack}}}
                        placeholder={{label: intl.formatMessage(selectPlace), value: null, color: color.blueColorIcon}}
                        onValueChange={(value) => onChange(value)}
                        placeholderTextColor={color.thinGray}
                        items={[
                            {label: intl.formatMessage(selectItem1), value: 'alive',color:color.textBlack},
                            {label: intl.formatMessage(selectItem2), value: 'damaged',color:color.textBlack},
                            {label: intl.formatMessage(selectItem3), value: 'dead',color:color.textBlack},
                        ]}
                        value={value}
                    />
                        )}
                        name={`${title}.select`}
                        defaultValue=''
                    />
                </View>
                <View style={styles.wrapperInputs}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>{intl.formatMessage(inputHeight)}</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            value={value}
                            keyboardType="numeric"
                            onChangeText={onChange}
                            placeholder={intl.formatMessage(inputPlace)}
                        /> )}
                            name={`${title}.height`}
                            defaultValue={state[count][title].height}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>{intl.formatMessage(inputDiameter)}</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder={intl.formatMessage(inputPlace)}
                        />
                            )}
                            name={`${title}.diametr`}
                            defaultValue={state[count][title].diametr}
                        />
                    </View>
                </View>
                <CameraBtn title={intl.formatMessage(labelPhoto1)} type={'treeImage'}  state={state[count][title]} control={control} name={title} />
                <CameraBtn title={intl.formatMessage(labelPhoto2)} type={'treeLabel'}  state={state[count][title]} control={control}  name={title}/>
                {count>9&&<CustomBtn handleClick={() => deleteZone(count)} label={intl.formatMessage(deleteLable)} customStyle={deleteBtnStyles} icon={()=><Trash active={true}/>}/>}

            </View>
        </CustomAccordion>
    );
};

export default AccordionWithForm;
