import Checkbox from 'expo-checkbox';
import type { CommonProps } from 'types';
import { Text, StyleSheet } from 'react-native';
import { LightTheme } from 'themes';

interface CheckProps extends CommonProps {
    value: boolean;
    onChange: () => void;
}



const CheckStyles = StyleSheet.create({
    check: {
        borderRadius: LightTheme.borderRadius.box
    }

})



export default function Check(props: CheckProps) {


    return (

        <>
        <Checkbox
        className={props.className}
        style={CheckStyles.check}
        value={props.value}
        onValueChange={props.onChange}
        >
        </Checkbox>
        


        
        
        </>

    )
}