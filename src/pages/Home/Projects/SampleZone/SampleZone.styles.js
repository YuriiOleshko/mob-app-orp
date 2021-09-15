import {StyleSheet} from 'react-native';
import color from '../../../../../styles/color'
export default StyleSheet.create({
    wrapper: {
        width: '100%',
        marginBottom: 20,
        marginTop: 20,
        paddingBottom:40,
        height: "100%",
    },
    wrapAcc:{
        marginBottom: 12,
    },
    title:{
        fontSize: 21,
        lineHeight: 25,
        fontFamily: "Lato-Bold",
        // marginBottom:20,
    },
    wrapperHeader:{
        position:'relative',
        marginHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginTop:20,
        marginBottom:20,


    },
    wrapperBtns:{
        marginTop:20,
        paddingHorizontal:20,
    },
    text:{
        fontSize:21,
        fontFamily:"Lato-Bold"
    },
    wrapperMain:{
        paddingHorizontal:20
    },
    scroll:{
        paddingHorizontal: 20,
    },
    accordion:{

    },
    active:{
        height: 'auto',

    },
    tab:{
        height: 0,
        overflow:"hidden",

    },
    loader:{
        paddingVertical:50,
    },
    wrapperLoader:{
        alignItems: 'center',
        justifyContent: "center",
    },
    textLoader:{
        color:color.white,
        fontSize:21,
        marginTop:15
    }


});
