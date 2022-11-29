import { StyleSheet } from "react-native";
import colorsStyles from "./colors.styles";

export default StyleSheet.create({
    default: {
        color: colorsStyles.black
    },

    white: {
        color: colorsStyles.white
    },
    blue: {
        color: colorsStyles.blue
    },
    green: {
        color: colorsStyles.green
    },

    body: {
        fontWeight: "400",
        fontSize: 20,
    },
    title: {
        fontWeight: "600",
        fontSize: 30,
    },
    subtitle: {
        fontWeight: "500",
        fontSize: 25,
    },
    caption: {
        fontWeight: "200",
        fontSize: 20,
    },
    button: {
        fontWeight: "500",
        fontSize: 20,
    }
})