import {StyleSheet} from 'react-native';
import color from '../../../../styles/color'
export default StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 20,
        height: "100%"
    },

    scrollWrapper:{
        minHeight:'100%',
        justifyContent: 'space-between',

    },
    info:{
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
        width:'100%',
        marginBottom: 28
    },
    infoText:{
        fontSize:18,
        fontFamily: 'Roboto-Regular',
        color: color.blueColorIcon,
        marginLeft:10,
    },
    wrapAcc:{
        marginBottom:20

    },
    wrapperMain: {
        width: '100%',
        paddingBottom: 40,

        // justifyContent: 'space-between',
        minHeight:'100%',
       // flex:1,
       //  height:'100%',
       //  flexDirection: "column",
       //  justifyContent:'space-between'
    },
    wrapperBlock:{
        justifyContent: 'space-between',
        flex:1,
         height:'100%',
        display:"flex",
    },
    flexWrapper:{

    },
    title: {
        color: color.textBlack,
        fontSize:21,
        fontFamily:'Lato-Bold',
        textAlign:'center',
        marginTop: 40,
        marginBottom:20
    },
    introTitle: {
        textAlign: "center",
        fontSize: 21,
        fontFamily: "Lato-Regular",
        lineHeight: 25,
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
    text:{
        fontSize: 21,
        lineHeight: 25,
        textAlign:'center',
        marginTop:20,
        marginBottom:28,
    }
});
