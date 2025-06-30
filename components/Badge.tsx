import {View, Text} from "react-native"
import badgeStyles from "styles/Badge"


type BadgeType = {
    className?: string;
    children?: React.ReactNode
}

export default function Badge(props: BadgeType) {



    return (

        <View className={props.className} style={[badgeStyles.badge, badgeStyles["badge-error"]]}>

            <Text>
                {props.children}
            </Text>

        </View>


    )




}




