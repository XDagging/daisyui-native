import { StyleSheet } from "react-native";
import { LightTheme } from "themes";



const ButtonStyles = StyleSheet.create({
    btn: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexShrink: 0,
  flexWrap: "nowrap",
  gap: 10,
  textAlign: "center",
  paddingVertical: 10,
  paddingHorizontal: 16, // or whatever looks right
  alignSelf: "flex-start", // this mimics w-fit
  borderRadius: LightTheme.borderRadius.box
},
    "btn-primary": {
        backgroundColor: LightTheme.primary,
        color: LightTheme["primary-content"]
    },
    "btn-secondary": {
        backgroundColor: LightTheme.secondary,
        color: LightTheme["secondary-content"],
    },

    "btn-accent": {
        backgroundColor: LightTheme.accent,
        color: LightTheme["accent-content"]
    },

    "btn-neutral": {
        backgroundColor: LightTheme.neutral,
        color: LightTheme["neutral-content"],
    },

    "btn-info": {
        backgroundColor: LightTheme.info,
        color: LightTheme["info-content"]
    },

    "btn-success": {
        backgroundColor: LightTheme.success,
        color: LightTheme['success-content']
    },

    "btn-warning": {
        backgroundColor: LightTheme.warning,
        color: LightTheme["warning-content"]
    },

    "btn-error": {
        backgroundColor: LightTheme.error,
        color: LightTheme["error-content"]
    }

})




export default ButtonStyles;