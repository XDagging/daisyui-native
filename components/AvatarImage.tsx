import React from "react";
import AvatarStyles from "styles/Avatar";
import {View} from "react-native"



type AvatarProps = {
    className?: string,
    children?: React.ReactNode
}







// avatar image

// avatarPlaceholder

// avatar






export default function AvatarImage(props: AvatarProps) {




    return (

        <View className="" style={[AvatarStyles["avatar-img"]]}>
            {props.children}



        </View>




    )







}