import { StyleSheet } from 'react-native';
import color from '../../../styles/color'
export default StyleSheet.create({
    default: {
        paddingVertical: 15,
        display:'flex',
        width: '100%',
        backgroundColor:color.white,
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

    },
    item:{
        width: '100%',
        backgroundColor:color.white,
        flexDirection:'row',
        display:'flex',
        alignItems:'center',
        paddingBottom:27,
        fontFamily:'Roboto-Regular',
        fontSize:16,
        color: color.textBlack,
        paddingVertical: 0,
        paddingLeft:25,
        paddingRight:36,
        top:-5
    },
    title:{
        fontSize:12,
        fontFamily:"Lato-Bold",
        color: color.textBlack,
        textTransform:'uppercase'
    },
    svg:{
      marginTop:10,
      marginRight:22
    },
    wrapper: {
        paddingBottom: 8,
        zIndex:1,
        backgroundColor:color.white,
        shadowColor: "#000",

    },
    form:{
        paddingVertical: 20,
        display:'flex',
        width: '100%',
        backgroundColor:color.white,
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
    },
    select:{
        color:color.textBlack,
        borderWidth:1,
        marginBottom: 12,
        borderColor:color.thinGray,
        borderRadius: 6
    },
    selectItem:{
        color:color.black,
        backgroundColor: color.white,

    },
    wrapperInputs:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:12,
        width:'100%'
    },
    input:{
        backgroundColor: color.bgInput,
        borderRadius:6,
    },
    inputWrapper:{
        flexBasis:'47%'
    },
    label:{
        fontSize: 12,
        color:color.grey,
        lineHeight: 14,
        fontFamily:'Lato-Bold',
        marginBottom:10,
        textTransform:'uppercase',
    },

});
