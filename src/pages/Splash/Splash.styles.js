import {StyleSheet} from 'react-native';
import color from '../../../styles/color'

export default StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 40,
        justifyContent: 'space-between',
        alignItems:"center",
        height:'100%',
        backgroundColor: color.white
    },
    introWrapper:{
        justifyContent: 'space-between',
        flex:0.7
    },
    intro: {
        color: color.textBlack,
    },
    introTitle: {
        textAlign: "center",
        fontSize: 36,
        fontFamily: "Lato-Regular",

        lineHeight: 43,
        color: color.textBlack,
    },
    introSubTitle: {
        color: color.textBlack,
        textAlign: "center",
        fontFamily: "Lato-Bold",
        fontSize: 18,
        fontWeight:'bold',
        lineHeight: 22,
        marginTop:14,
    },
});
