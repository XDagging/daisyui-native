import {View, Text} from "react-native"
import badgeStyles from "styles/Badge"


type BadgeType = {
    className?: string;
    children?: React.ReactNode
    variant: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
}

export default function Badge(props: BadgeType) {



    return (

        <View className={`
            px-3 py-2
            ${props.className}
        `} style={[badgeStyles.badge,(badgeStyles as Record<string, any>)[`badge-${props.variant}`]]}>

            <Text>
                {props.children}
            </Text>

        </View>


    )




}




