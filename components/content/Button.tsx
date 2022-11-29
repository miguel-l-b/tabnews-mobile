import React from "react"
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import ButtonStyles from "../../styles/Button.styles";
import TextStyles from "../../styles/Text.styles";
import Text from "./Text";

interface ButtonProps {
    type?: "active" | "disable",
    activeOpacity?: number,
    style?: StyleProp<ViewStyle>,
    children?: React.ReactNode
}

export default function Button({ children, type, style, activeOpacity }: ButtonProps) {
    if(type == undefined) type = "disable"
    return (
        <TouchableOpacity style={[ButtonStyles.default, style, ButtonStyles[type]]} activeOpacity={0.7}>
            <Text type="button" style={type === "active"? TextStyles.white : null}>{children}</Text>
        </TouchableOpacity>
    );
}