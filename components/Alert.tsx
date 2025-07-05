import {View, Text} from "react-native"
import AlertStyles from "styles/Alert"


type AlertType = {

    className?: string;
    children?: React.ReactNode,
    type?: "dashed" | "outline" | "none"
}

export default function Alert(props: AlertType) {



    return (

        <View className={props.className} style={[AlertStyles.alert, AlertStyles["alert-primary"], props.type&&props.type==="dashed" ? AlertStyles["alert-dash"] : props.type==="outline" ? AlertStyles["alert-outline"] : ""]}>
            {props.children}

        </View>


    )




}




