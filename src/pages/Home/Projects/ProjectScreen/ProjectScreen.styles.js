import {StyleSheet} from 'react-native';
import color from '../../../../../styles/color'
export default StyleSheet.create({
    wrapper: {
        width: '100%',
        marginBottom: 40,
        height: "100%",
        zIndex:1,
        position: 'relative'
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
    text:{
        fontSize:21,
        fontFamily:"Lato-Bold"
    },
    textRegion:{
        fontSize:12,
        fontFamily:"Lato-Regular",
        marginTop: 10
    },
    list:{
        marginTop: 20,
        paddingHorizontal:20

    }
});
