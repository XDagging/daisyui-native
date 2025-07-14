import React from "react";
import AvatarStyles from "styles/Avatar";
import {View} from "react-native"



type AvatarProps = {
    className?: string,
    children?: React.ReactNode
    isPlaceholder: boolean
}


// avatar image

// avatarPlaceholder

// avatar

// To have that nice round effect, make the height and width the same (w-20, h-20, etc)
export default function Avatar(props: AvatarProps) {




    return (

        <View style={AvatarStyles.avatar} className={`
            ${props.isPlaceholder ? AvatarStyles["avatar-placeholder"] : ""}
            ${props.className}
            `} >



            {props.children}
        </View>




    )







}