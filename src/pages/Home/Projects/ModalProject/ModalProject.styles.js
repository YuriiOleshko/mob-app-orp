import {StyleSheet} from 'react-native';
import color from '../../../../../styles/color'
export default StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingBottom: 40,
        paddingHorizontal: 20,
        height:'100%'
    },
    block:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        height:'100%'
    },
    title:{
        textAlign:'center',
        color:color.textBlack,
        fontSize:21,
        fontFamily:'Lato-Regular',
        paddingHorizontal: 30,
        marginBottom:28
    }
});
