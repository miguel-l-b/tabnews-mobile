import { View } from "react-native";

interface PaddingProps {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
}

interface SimplifyPaddingProps {
    horizontal?: number,
    vertical?: number,
}

interface SizeProps {
    size?: number,
}

function instanceOf(object: any, type: 'Padding' | 'SimplifyPadding' | 'Size'): boolean {
    if('top' in object && type !== 'Padding') return false
    if('horizontal' in object && type !== 'SimplifyPadding') return false
    if('size' in object && type !== 'Size') return false
    
    return true
}

export default function Padding(props: PaddingProps | SimplifyPaddingProps | SizeProps) {
    if(instanceOf(props, 'Padding')) {
        return (
            <View style={{
                paddingTop: props.top,
                paddingBottom: props.bottom,
                paddingLeft: props.left,
                paddingRight: props.right
            }} />
        )
    }
    else if(instanceOf(props, 'SimplifyPadding')) {
        return (
            <View style={{
                paddingVertical: props.vertical,
                paddingHorizontal: props.horizontal
            }} />
        )
    }
    else {
        return (
            <View style={{
                width: props.size,
                height: props.size
            }} />
        )
    }
}