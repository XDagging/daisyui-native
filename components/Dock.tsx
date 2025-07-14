import {View} from "react-native"
import DockStyles from "styles/Dock"
import type { CommonProps } from "types"


interface DockProps extends CommonProps {
    variant: "base" // More will be added in the future, very easy to customize


}


// Because fixed doesn't work, 
export default function Dock(props: DockProps) {
    





    return (
        <>



        <View className={`${DockStyles.dock}
            ${props.className}`} style={[DockStyles.dock, (DockStyles as Record<string, any>)[`dock-${props.variant}`]]}>
            {props.children}




        </View>





        
        
        
        
        
        
        
        
        </>
    )
}