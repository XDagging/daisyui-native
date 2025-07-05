import React from "react";
import {View, Switch} from "react-native"
import type { CommonProps } from "types";
import { LightTheme } from "themes";


interface ToggleProps extends CommonProps {
    value: boolean;
    onChange: () => void;



}


export default function Toggle(props: ToggleProps) {

    // Got to make this more granular
    return (
          <View>


        <Switch 
        className={props.className}
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{false: LightTheme.error, true: LightTheme.primary}}
        thumbColor={props.value ? LightTheme["secondary-content"] : LightTheme["primary-content"]}


        >


            

        </Switch>



    </View>
    )
  




}