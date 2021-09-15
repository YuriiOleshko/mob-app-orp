import {StyleSheet} from 'react-native';
import color from '../../../styles/color'

export default StyleSheet.create({
    wrapper: {
        width:'100%',
        height:'100%',
        position: 'relative',
        alignItems:'center',
        justifyContent:'center'
    },
    block:{
        paddingVertical: 12,
        paddingHorizontal:10,
        display:'flex',
        width: '100%',
        backgroundColor:color.white,
        borderWidth:1,
        borderColor:'transparent',
        paddingLeft:20,
        height:'60%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10.41,
        elevation: 2,
        borderRadius: 6,
        position:'relative',
        overflow:'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize:21,
        fontFamily:'Lato-Bold'
    },
    delete: {
        zIndex:1000,
        top:0,
        right:0,
        position:'absolute',
        paddingHorizontal:10,
        paddingVertical:10
    },
    //
    //
    //

});
