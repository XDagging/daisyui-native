import { TextInput } from "react-native";
import InputAreaStyles from "styles/InputArea";



type InputAreaProps = {
    variant: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    placeholder?: string;
    multiLine?: boolean;
    className?: string;
    onChange: (e: string) => void;
}


export default function InputArea(props: InputAreaProps) {
    return (
        <TextInput 
        onChangeText={(e) => props.onChange(e)} 
        style={[InputAreaStyles["input-area"], (InputAreaStyles as Record<string, any>)[`textarea-${props.variant}`]]}
        className={`
            ${props.className}`

        }
        placeholder={props.placeholder} 
        multiline={props.multiLine} 
        
        />
    
    )




}