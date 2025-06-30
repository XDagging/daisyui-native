import {View} from "react-native"
import DockStyles from "styles/Dock"
import type { CommonProps } from "types"





// Because fixed doesn't work, 
export default function Dock(props: CommonProps) {





    return (
        <>



        <View className={props.className} style={[DockStyles.dock, DockStyles["dock-base"]]}>
            {props.children}




        </View>





        
        
        
        
        
        
        
        
        </>
    )
}