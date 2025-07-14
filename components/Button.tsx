import ButtonStyles from "styles/Button";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native";



type ButtonProps = {
        className?: string;
        variant: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
        // This could be any here I don't know
        text?: string;
        onPress?: (e: GestureResponderEvent) => void;
        children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
    
    return (
        <>
        <View className="">
            <TouchableOpacity className={`
            ${props.className}`} style={[ButtonStyles.btn, (ButtonStyles as Record<string, any>)[`btn-${props.variant}`]]} onPress={(e: GestureResponderEvent) => {
                if (props.onPress) {
                    props.onPress(e);
                }
            }}>
              {props.children}
            </TouchableOpacity>

        </View>
            
        
        
        </>
    )



}


