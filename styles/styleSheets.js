import {StyleSheet} from "react-native";
import color from "./color";

const baseBtnStyles = StyleSheet.create({
    btn: {
        backgroundColor: color.blue,
    },
    text: {
        fontFamily: "Roboto-Bold",
        color: color.white,
        fontSize: 18,
    }
})
const deleteBtnStyles = StyleSheet.create({
    btn: {
        backgroundColor: 'transparent',
        borderWidth: 3,
        alignItems: 'center',
        borderColor: color.greyColorIcon,
        paddingVertical: 10
    },
    text: {
        fontFamily: "Lato-Bold",
        color: color.greyColorIcon,
        fontSize: 16,
    }
})
const baseBtnTransStyles = StyleSheet.create({
    btn: {
        backgroundColor: 'transparent',
        borderRadius: 6,
        borderColor: color.blueColorIcon,
        borderWidth: 3,
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        fontFamily: "Lato-Bold",
        color: color.blueColorIcon,
        fontSize: 18,
        marginLeft: 10,
        flexDirection: "row",
        alignItems: 'center'
    }
})
const baseBtnSendStyles = StyleSheet.create({
    btn: {
        marginTop: 12,
        backgroundColor: color.lightGreen,
        borderRadius: 6,
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        fontFamily: "Roboto-Bold",
        color: color.white,
        fontSize: 18,
        flexDirection: "row",
        alignItems: 'center'
    }
})

const baseBtnSaveStyles = StyleSheet.create({
    btn: {
        backgroundColor: color.blueColorIcon,
        borderRadius: 6,
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        fontFamily: "Roboto-Bold",
        color: color.white,
        fontSize: 18,
        flexDirection: "row",
        alignItems: 'center'
    }
})
const baseBtnCancelStyles = StyleSheet.create({
    btn: {
        backgroundColor: color.grey,
        borderRadius: 6,
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        fontFamily: "Roboto-Bold",
        color: color.white,
        fontSize: 18,
        flexDirection: "row",
        alignItems: 'center'
    }
})

export {
    baseBtnStyles, baseBtnTransStyles, deleteBtnStyles, baseBtnSendStyles,
    baseBtnSaveStyles, baseBtnCancelStyles
}
