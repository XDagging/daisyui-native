import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from "react-native";
import InputAreaStyles from "styles/InputArea";



type InputAreaProps = {
    placeholder?: string;
    multiLine?: boolean;
    className?: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}


export default function InputArea(props: InputAreaProps) {

console.log(InputAreaStyles["input-area"]);
console.log(InputAreaStyles["textarea-neutral"]);

    return (
        <TextInput onChange={(e) => props.onChange(e)} className={`${props.className}`} placeholder={props.placeholder} multiline={props.multiLine} style={[InputAreaStyles["input-area"], InputAreaStyles["textarea-secondary"]]} />
    
    )




}