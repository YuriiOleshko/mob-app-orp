import {StyleSheet} from 'react-native';
import color from '../../../../../styles/color'
export default StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal:20,
        paddingVertical:18,
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
        fontFamily:'Lato-Bold'
    },
    square:{
        fontSize: 12,
        lineHeight: 14,
        fontFamily:'Lato-Regular',
    },

});
