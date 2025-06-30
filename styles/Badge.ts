import { StyleSheet } from "react-native";
import { LightTheme } from "themes";






const badgeStyles = StyleSheet.create({
    badge: {
        alignSelf: "flex-start", 
        color: LightTheme["neutral-content"],
        borderWidth: LightTheme.borderThickness,
        // height: LightTheme.badgeHeight,
        borderRadius: LightTheme.borderRadius.box,

        paddingVertical: Math.floor(LightTheme.badgeHeight/2),
        paddingHorizontal: LightTheme.badgeHeight/3
    
    },

    "badge-primary": {
        backgroundColor: LightTheme.primary,
        color: LightTheme["primary-content"]
    },
    "badge-secondary": {
        backgroundColor: LightTheme.secondary,
        color: LightTheme["secondary-content"]
    },
    "badge-accent": {
        backgroundColor: LightTheme.accent,
        color: LightTheme["accent-content"]
    },
    "badge-neutral": {
        backgroundColor: LightTheme.neutral,
        color: LightTheme["neutral-content"]
    },
    "badge-info": {
        backgroundColor: LightTheme.info,
        color: LightTheme["info-content"]
    },
    "badge-success": {
        backgroundColor: LightTheme.success,
        color: LightTheme["success-content"]
    },
    "badge-warning": {
        backgroundColor: LightTheme.warning,
        color: LightTheme["warning-content"]
    },
    "badge-error": {
        backgroundColor: LightTheme.error,
        color: LightTheme["error-content"]
    },
    "badge-ghost": {
        backgroundColor: LightTheme["base-100"],
        color: LightTheme["base-content"],
        borderWidth: 0,
    },

    // Add the size stuff here once you figure out how we are going to do REM
    

    






})


export default badgeStyles