import React from 'react'
import { StyleProp, Text as Txt, TextStyle } from 'react-native'
import TextStyles from '../../styles/Text.styles';

interface TextProps {
    type?: "body" | "title" | "subtitle" | "caption" | "button",
    style?: StyleProp<TextStyle>,
    children?: React.ReactNode
}

export default function Text({type, style, children}: TextProps) {
    if(type == undefined)
        type = "body"

    return (
        <Txt style={[TextStyles.default, style, TextStyles[type]]}>{children}</Txt>
    );
}