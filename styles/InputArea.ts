import { StyleSheet } from "react-native";
import { LightTheme } from "themes";


// Issues for later

// I need to create a function that can determine the base background color (textarea-ghost)



const InputAreaStyles = StyleSheet.create({
    "input-area": {
        borderWidth: LightTheme.borderThickness,
        borderColor: LightTheme.neutral,
        borderRadius: LightTheme.borderRadius.box,
        color: LightTheme["base-content"],
        
        // paddingVertical: 10,

        paddingHorizontal: 8,
        fontSize: 20,
        textAlignVertical: 'top'

    },

    "textarea-ghost": {
        borderColor: LightTheme.neutral,
        backgroundColor: LightTheme["base-100"],
    },


    "textarea-neutral": {
        borderColor: LightTheme.neutral,
        // backgroundColor: LightTheme.neutral,
        color: LightTheme["neutral-content"]
    },
    "textarea-primary": {
        borderColor: LightTheme.primary,
        color: LightTheme["primary-content"]
    },
    "textarea-secondary": {
        borderColor: LightTheme.secondary,
        color: LightTheme["secondary-content"]
    },
    "textarea-accent": {
        borderColor: LightTheme.accent,
        color: LightTheme["accent-content"]
    },
    "textarea-info": {
        borderColor: LightTheme.info,
        color: LightTheme["info-content"]
    },
    "textarea-success": {
        borderColor: LightTheme.success,
        color: LightTheme["success-content"]
    },
    "textarea-warning": {
        borderColor: LightTheme.warning,
        color: LightTheme["warning-content"]
    }, 
    "textarea-error": {
        borderColor: LightTheme.error,
        color: LightTheme["error-content"]
    },
    
    // I'll figure out a REM alternative later for font sizes






})


export default InputAreaStyles;


