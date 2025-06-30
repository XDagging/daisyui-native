import { View } from "react-native"
import type { CommonProps } from "types"


type InputType = {
    maxLength?: number
    minLength?: number
    required?: boolean
    inputChar: "email" | "number" | "phoneNumber" | "string"

}

interface FormValidationProps extends CommonProps {
    fullSchema: InputType[]

}


export default function FormValidation(props: FormValidationProps) {






    return (
        <>

        <View className={props.className} >



        </View>





        </>
    )

}