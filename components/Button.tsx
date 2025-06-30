import ButtonStyles from "styles/Button";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import type {ButtonProps} from "types"


export default function Button(props: ButtonProps) {
    


    return (
        <>
        <View className="">


            <TouchableOpacity className={`${props.className}`} style={[ButtonStyles.btn, ButtonStyles["btn-accent"]]} onPress={(e: GestureResponderEvent) => {
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


