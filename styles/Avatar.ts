import { StyleSheet } from "react-native";
import { LightTheme } from "themes";






const AvatarStyles = StyleSheet.create({
    avatar: {
        borderRadius: 9999,
        borderWidth: 4,
        padding: 10,
        flexDirection: "column",
        position: "relative",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "flex-start", // this mimics w-fit

        // Remove any fixed width/height to allow content to define size
   
    },
    "avatar-img": {
        height: "100%",
        width: "100%",
        objectFit: "cover"
    },
    "avatar-placeholder": {
        alignItems: "center",
        justifyContent: "center"
    },
    "avatar-offline": {
        position: "absolute",
        zIndex: 1,
        borderRadius: 9999,
        backgroundColor: LightTheme["base-300"],
        borderWidth: 2,
        borderColor: LightTheme["base-100"],
        width: "25%",
        height: "25%",
        top: "7%",
        right: "7%"
    },
    "avatar-online": {
        backgroundColor: LightTheme.success,
        position: "absolute",
        zIndex: 1,
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: LightTheme["base-100"],
        width: "25%",
        height: "25%",
        top: "7%",
        right: "7%"
    },
})



export default AvatarStyles