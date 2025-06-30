import { StyleSheet } from "react-native";
import { LightTheme } from "themes";


// Issues for later

// I need to create a function that can determine the base background color (textarea-ghost)



const InputAreaStyles = StyleSheet.create({
    "input-area": {
        borderWidth: LightTheme.borderThickness,
        borderColor: LightTheme.neutral,
        borderRadius: LightTheme.borderRadius.field,
        paddingVertical: 10,

        paddingHorizontal: 8,
        fontSize: 20,
        textAlignVertical: 'top'

    },

    "textarea-ghost": {
        borderColor: LightTheme.neutral,
        backgroundColor: LightTheme["base-100"],
    },


    "textarea-neutral": {
        backgroundColor: LightTheme.neutral,
        color: LightTheme["neutral-content"]
    },
    "textarea-primary": {
        backgroundColor: LightTheme.primary,
        color: LightTheme["primary-content"]
    },
    "textarea-secondary": {
        backgroundColor: LightTheme.secondary,
        color: LightTheme["secondary-content"]
    },
    "textarea-accent": {
        backgroundColor: LightTheme.accent,
        color: LightTheme["accent-content"]
    },
    "textarea-info": {
        backgroundColor: LightTheme.info,
        color: LightTheme["info-content"]
    },
    "textarea-success": {
        backgroundColor: LightTheme.success,
        color: LightTheme["success-content"]
    },
    "textarea-warning": {
        backgroundColor: LightTheme.warning,
        color: LightTheme["warning-content"]
    }, 
    "textarea-error": {
        backgroundColor: LightTheme.error,
        color: LightTheme["error-content"]
    },
    
    // I'll figure out a REM alternative later for font sizes






})


export default InputAreaStyles;


