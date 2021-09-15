import { StyleSheet } from 'react-native';
import color from '../../../styles/color'
export default StyleSheet.create({
    default: {
        paddingVertical: 19,
        display:'flex',
        justifyContent:"center",
        width: '100%',
        flexDirection:'row',
        color:color.white,
        borderRadius: 6
    },
    disable:{
        backgroundColor:color.thinGray,
        color:color.white
    }

});
