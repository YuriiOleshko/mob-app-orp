import { StyleSheet } from 'react-native';
import color from '../../../styles/color'
export default StyleSheet.create({
    default: {
        paddingVertical: 12,
        paddingHorizontal:10,
        display:'flex',
        width: '100%',
        backgroundColor:color.white,
        borderWidth:1,
        borderColor:'transparent',
        paddingLeft:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10.41,
        elevation: 2,
        borderRadius: 6,
        overflow:'hidden'
    },
    dropdown:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    title:{
        fontSize:16,
        fontFamily:"Lato-Bold",
        color: color.textBlack,
        textTransform:'uppercase',
        width:'90%'
    },
    svg:{
    },
    active:{
        height:'auto',
        // paddingHorizontal: 10,
        marginTop:12,
        zIndex:1,
        position:'relative',
        opacity:1,



    },
    out:{
        height:0,
        zIndex:-1,
        opacity:0,
        position:'relative'
    },
    up:{
    },
    error:{
        borderColor:color.redLight,
    }

});
