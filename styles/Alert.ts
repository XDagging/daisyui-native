import { StyleSheet } from "react-native";
import UniversalStyles from "./Universal";
import { LightTheme } from "themes";




const AlertStyles = StyleSheet.create({
    alert: {
        
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "left",
        margin: 5,
        padding: 10,
        borderRadius: LightTheme.borderRadius.box, 
    },

    "alert-outline": {
        borderWidth: 1,
    },

    "alert-dash": {
        borderWidth: 1,
        borderStyle: "dashed"
    },



    "alert-info": {
        backgroundColor: LightTheme.info,
        color: LightTheme["info-content"]
    }
    ,
    "alert-primary": {
        backgroundColor: LightTheme.primary,
        color: LightTheme["primary-content"]
    },
    "alert-secondary": {
        backgroundColor: LightTheme.secondary,
        color: LightTheme["secondary-content"]
    },
    "alert-warning": {
        backgroundColor: LightTheme.warning,
        color: LightTheme["warning-content"]
    },
    "alert-success": {
        backgroundColor: LightTheme.success,
        color: LightTheme["success-content"]
    },
    "alert-error": {
        backgroundColor: LightTheme.error,
        color: LightTheme["error-content"]
    },
    "alert-accent": {
        backgroundColor: LightTheme.accent,
        color: LightTheme["accent-content"]
    }





})

export default AlertStyles