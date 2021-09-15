import {StyleSheet} from 'react-native';
import color from '../../../styles/color'

export default StyleSheet.create({
    wrapper: {
        marginBottom: 16
    },
    title: {
        fontSize: 12,
        lineHeight: 14,
        textTransform: 'uppercase',
        color: color.grey,
        marginBottom: 10
    },
    view: {
        paddingVertical: 10,
        backgroundColor: color.lightBlue,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius:6,
        alignItems:'center',
        height:44

    },
    viewTwo: {
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: color.lightBlue,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius:6,
        height:44
    },

    text: {
        color: color.blueColorIcon,
        fontSize: 16,
        fontFamily:'Lato-Bold',
        lineHeight: 19,
    },
    textInner:{
        color:color.textBlack,
        fontSize: 12,
        lineHeight: 14,
    },
    block:{
        flexDirection: 'row',
        justifyContent: 'space-between'


}



});
