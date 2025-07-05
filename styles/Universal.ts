import { StyleSheet } from "react-native"
import { LightTheme } from "themes"
import {useWindowDimensions, Dimensions} from "react-native"


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


export const parseViewport = (direction: "x"|"y", value: number): number => {
  const {width, height} = useWindowDimensions();

  console.log("calculated parseViewport")
  if (direction==="x") {
    
    return Math.floor(width * value*0.01)
  } else {
    return Math.floor(height * value*0.01);
  }


  // this will like never happen but yk just in case!
  return -1;


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


export function isString(str: string, lengthLimit: number = 1000000): boolean {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(Number(str[i])) && str[i] !== " " && str[i] !== "-") {
        console.log("the character that failed us is,", str[i]);
        return false;
      }
    }
  
    return str.length < lengthLimit;
  }



export function isPassword(password: string): boolean {
    let passedTests = true;
  
    if (password.length < 4) {
      passedTests = false;
    } else if (password.length > 15) {
      passedTests = false;
    }
  
    return passedTests;
}


 export function isEmail(email: string): boolean {
    let passedTests = true;
  
    if (email.split("@").length !== 2) {
      passedTests = false;
    } else if (email.length < 4) {
      passedTests = false;
    } else if (email.length > 40) {
      passedTests = false;
    }
  
    return passedTests;
  }


export function isNumber(number: number): boolean {
    const convertedString = String(number);
    // notAllowedChars contains all ASCII symbols and characters except digits and minus sign
    const notAllowedChars = [];
    for (let i = 0; i < 128; i++) {
        const char = String.fromCharCode(i);
        if (!(char >= "0" && char <= "9") && char !== "-") {
            notAllowedChars.push(char);
        }
    }
    for (let i = 0; i < convertedString.length; i++) {
        if (notAllowedChars.includes(convertedString[i])&&convertedString[i]!==" ") {
            return false;
        }
    }
    return true;
}









  export function formatString(str: string): string {
    return str
      .trim()
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  }


  










export default UniversalStyles