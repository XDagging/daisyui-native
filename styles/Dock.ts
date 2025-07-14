import { StyleSheet } from "react-native";
import { parseRem } from "./Universal";
import { LightTheme } from "themes";
import { parse } from "path";



// REM Would be needed here


const DockStyles = StyleSheet.create({
    dock: {
        width: "100%",
      
        // position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 50,
        padding: parseRem("0.5rem"),
        // paddingLeft: parseRem("0.2rem"),
        // paddingRight: parseRem("0.2rem"),
        // paddingBottom: parseRem("0.2rem"),
        borderTopWidth: 0.5,
        flexDirection: "row",
    
        alignItems: "flex-start",
        // justifyContent: "stretch",
        height: parseRem("1.7rem"),
        
    },


    "dock-md": {
        height: parseRem("1.7rem")
    },

    "dock-lg": {
        height: parseRem("2rem")
    },
    "dock-xl": {
        height: parseRem("2.5rem")
    },

    "dock-base": {
        backgroundColor: LightTheme["base-300"],
        color: LightTheme['base-content']
    }

    






})



export default DockStyles;