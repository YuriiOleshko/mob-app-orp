import {StyleSheet} from 'react-native';
import color from '../../../../../styles/color'
export default StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal:8,
        paddingVertical:8,
        backgroundColor:color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10.41,
        elevation: 2,
        borderRadius: 6,
        marginBottom:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    name:{
        fontSize: 12,
        lineHeight: 14,
        fontFamily:'Lato-Bold',
        marginLeft:10
    },
    coord:{
        fontSize: 11,
        lineHeight: 13,
        fontFamily:'Lato-Bold',
    },
    location:{
        paddingHorizontal:4,
        paddingVertical:4,
        backgroundColor:color.lightBlue,
        borderRadius: 6,
    },
    block:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex',

    },
    point:{
        width: 16,
        height: 16,
        borderRadius: 90,
    }

});
