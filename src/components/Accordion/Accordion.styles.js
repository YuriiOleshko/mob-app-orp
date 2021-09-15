import { StyleSheet } from 'react-native';
import color from '../../../styles/color'
export default StyleSheet.create({
    default: {
        paddingVertical: 19,
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
        elevation: 1,
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
        // top:-5

    },
    title:{
        fontFamily:'Lato-Regular',
        fontSize:18,
        color: color.textBlack,
    },
    svg:{
      marginTop:10,
      marginRight:22
    },
    wrapperItem:{
        top:-5,
        left:-1,
        width: "100%",
        position:'relative'

    }

});
