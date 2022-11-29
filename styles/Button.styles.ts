import { StyleSheet } from "react-native"
import colorsStyles from "./colors.styles"

export default StyleSheet.create({
    default: {
        marginVertical: 8,
        width: "100%",
        height: 50,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    active: {
        backgroundColor: colorsStyles.black,
        color: colorsStyles.white,
    },
    disable: {
        borderColor: colorsStyles.black,
        borderWidth: 3,
    }
})