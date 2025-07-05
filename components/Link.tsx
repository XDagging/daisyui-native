import React from "react";
import { Text, Linking, Pressable } from "react-native"
import type {CommonProps} from "types";



interface LinkProps extends CommonProps {
    url: string;
}








export default function Link(props: LinkProps) {

    const openLink = async() => {
        try {
            const supported = await Linking.canOpenURL(props.url);
            if (supported) {
                await Linking.openURL(props.url)
            } else {
                console.log("This Link isn't supported")
            }



        } catch(e) {
            console.log(e)
        }
    }



    return (
        <>
        <Pressable className={`${props.className}` } onPress={openLink}>
            {props.children}


        </Pressable>

        
        </>

    )

}