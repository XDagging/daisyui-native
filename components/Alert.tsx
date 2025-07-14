import {View, Text} from "react-native"
import AlertStyles from "styles/Alert"


type AlertType = {
    variant: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
    className?: string;
    children?: React.ReactNode,
    type?: "dashed" | "outline" | "none"
}

export default function Alert(props: AlertType) {


    const variantChosen = () => {
        const vari = props?.variant.toLowerCase();

        if (vari==="primary") {
            return AlertStyles["alert-primary"]
        } else if (vari==="secondary") {
            return AlertStyles["alert-secondary"]
        } else if (vari==="accent") {
            return AlertStyles["alert-accent"]
        } else if (vari==="info") {
            return AlertStyles["alert-info"]
        } else if (vari==="success") {
            return AlertStyles["alert-success"]
        } else if (vari==="warning") {
            return AlertStyles["alert-warning"]
        } else if (vari==="error") {
            return AlertStyles["alert-error"]
        } else {
            return AlertStyles["alert-info"]
        }

    }


    const typeChosen = () => {
        switch (props?.type) {
            case "dashed": 
                return AlertStyles["alert-dash"];
            case "none":
                return "";
            case 'outline':
                return AlertStyles["alert-outline"];
            default: 
                return "";


        }
    }


    return (

        <View style={[variantChosen(), typeChosen(), AlertStyles.alert]} className={`${props.className}`
        }>
            {props.children}

        </View>


    )




}







