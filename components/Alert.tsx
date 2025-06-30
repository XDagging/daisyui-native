import {View, Text} from "react-native"
import AlertStyles from "styles/Alert"


type AlertType = {

    className?: string;
    children?: React.ReactNode
}

export default function Alert(props: AlertType) {



    return (

        <View className={props.className} style={[AlertStyles.alert, AlertStyles["alert-primary"], AlertStyles["alert-dash"]]}>
            {props.children}

        </View>


    )




}




