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
    // bg: {
    //     position:'absolute',
    //
    //     backgroundColor:color.black,
    //     opacity:0.9,
    //     width:'100vw',
    //     height:'100vh',
    //     zIndex:3,
    //     top:0,
    //     left:0,
    // },
    delete: {
        zIndex:1000,
        top:0,
        right:0,
        position:'absolute',
        paddingHorizontal:10,
        paddingVertical:10
    },
    image: {
        width:'100%',
        height:'50%'
    },
    //
    //
    //

});
