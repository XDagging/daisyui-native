import React from "react";
import AvatarStyles from "styles/Avatar";
import {View} from "react-native"



type AvatarProps = {
    className?: string,
    children?: React.ReactNode,
    isActive: boolean
}







// avatar image

// avatarPlaceholder

// avatar





// Tested and works
export default function AvatarStatus(props: AvatarProps) {
    return (

        <View
            className={`${props.className}`}
            style={props.isActive ? AvatarStyles["avatar-online"] : AvatarStyles["avatar-offline"]}
        >
            {props.children}
        </View>




    )







}