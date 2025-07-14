import React from "react";
import {View, Switch} from "react-native"
import type { CommonProps } from "types";
import { LightTheme } from "themes";


type trackColor = {
    whenFalse: string;
    whenTrue: string;
}



interface ToggleProps extends CommonProps {
    value: boolean;
    onChange: () => void;
    booleanTrackColor: trackColor
    booleanThumbColor: trackColor


}


export default function Toggle(props: ToggleProps) {

    // Got to make this more granular
    return (
          <View>


        <Switch 
        className={props.className}
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{
          false: props.booleanTrackColor ? props.booleanTrackColor.whenFalse : LightTheme["base-100"],
          true: props.booleanTrackColor ? props.booleanTrackColor.whenTrue : LightTheme["base-300"]
        }}
        thumbColor={props.value ? props.booleanThumbColor.whenTrue : props.booleanThumbColor.whenFalse}


        >


            

        </Switch>



    </View>
    )
  




}