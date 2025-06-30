import { StyleSheet } from "react-native"
import { LightTheme } from "themes"
import {Dimensions} from "react-native"


const UniversalStyles = StyleSheet.create({
    "rounded-box": {
        borderRadius: LightTheme.borderRadius.box,
        justifyContent: `${"flex-start"}`
    }


})




let remValue: number = 0;



const calculateRem = () => {
    const height = Dimensions.get("window").height;
    remValue = height/20
    



}




export const parseRem = (value: string): number => {


    
    if (value.toLowerCase().indexOf("rem")>-1&&value.toLowerCase().split("rem").length===2) {

        if (remValue==0) {
                calculateRem();
        }


        return Number(value.split("rem")[0])*remValue



        // This means that it exists
    } else {

        return -1
    }
}




export default UniversalStyles