import { View, NativeSyntheticEvent, TextInputChangeEventData, Text } from "react-native"
import type { CommonProps } from "types"
import { useState, useEffect } from "react"
import InputArea from "./InputArea"
import { isAnimationTerminatingCalculation } from "react-native-reanimated/lib/typescript/animation/springUtils"
import { isEmail, isNumber } from "styles/Universal"
import { bracketSameLine } from "prettier.config"
import Button from "./Button"
import { forwardRef, useImperativeHandle } from "react";
type InputType = {
    maxLength?: number
    minLength?: number
    required?: boolean,
    multiLine?: boolean,

    inputChar: "email" | "number" | "phoneNumber" | "string" | "boolean"

}

interface FormValidationProps extends CommonProps {
    fullSchema: InputType[]

}

type DataType = string | number | boolean | null;


export type FormResponse = {
    hasFailed: boolean;
    message: string;
    index: number;
    // Index represents the index (of formData + fullForm) of the input that failed

}



// To call checkForm from outside, you can use React.forwardRef and useImperativeHandle

 const createFormResponse = (hasFailed: boolean, message: string | null, index: number): FormResponse => {
        if (message==="required") {
            return {
                hasFailed: hasFailed,
                message: "Message isn't required appropiately",
                index: index
            }
        } else if (message==="length") {
            return {
                hasFailed: hasFailed,
                message: "Invalid length on input",
                index: index
            }
        } else if (message==="type") {
            return {
                hasFailed: hasFailed,
                message: "Invalid type for a certain input",
                index: index
            }
        } 
        else {
            return {
                hasFailed: hasFailed,
                message: message || "Something went wrong",
                index: index
            }
        }       
    }


 const checkForm = (fullForm: InputType[], formData: DataType[],) => {

        for (let i=0; i<fullForm.length; i++) {
            // Indexes correspond for formData and fullForm
            // We consider null and "" as nothing is there
            const currentSchema = fullForm[i];
            const currentData = formData[i]; 
            
            if (typeof currentData === "boolean" && currentData!==null) {
                break;
            }
            if (currentSchema?.required&&(currentData===null||currentData==="")) {
                return createFormResponse(true, "required", i);
            } else if ((typeof currentSchema?.maxLength === "number") &&currentData!==null &&((String(currentData).length >= currentSchema.maxLength)||(String(currentData).length <= (currentSchema?.minLength || 0)))) {
                return createFormResponse(true, "length", i);
            }



            switch(currentSchema.inputChar){
                case "boolean":
                    break;
                case "email":
                    if (isEmail(String(currentData))) {
                        break;
                    } else {
                        return createFormResponse(true, "type", i)
                    } 

                case "number": 
                    
                    if (isNumber(Number(currentData))) {
                        break
                    } else {
                        console.log("failed here", currentData)
                        return createFormResponse(true, "type", i)
                    }

                case "phoneNumber": 
                    if (isNumber(Number(currentData))&&String(currentData).length<=15) {
                        break
                    } else {
                        return createFormResponse(true, "type", i)
                    }

                case "string":
                    // We could maybe make it more specific (no spaces, etc)
                    break;


            }


            // Now we need to do type checks



           

            
            








        }

        


        



    }



const FormValidation = forwardRef(function FormValidation(
  props: FormValidationProps,
  ref: React.Ref<{ validate: () => FormResponse | undefined }>
) {
  const [fullForm, setFullForm] = useState<InputType[]>(props.fullSchema);
  const [formData, setFormData] = useState<DataType[]>(Array(props.fullSchema.length).fill(null));

  // This type should be the inputChar that is a part of the schema
  const changeFormData = (e: string, i: number) => {
    if (i <= fullForm.length - 1) {
      setFormData((prevData) => {
        const newData = [...prevData];
        // console.log(e);
        try {
          switch (fullForm[i].inputChar) {
            case "email":
            case "string":
              newData[i] = String(e);
              break;
            case "phoneNumber":
            case "number":
              newData[i] = Number(e);
              break;
            case "boolean":
              newData[i] = Boolean(e);
              break;
          }
        } catch (err) {
          console.log(err);
        }
        return newData;
      });
    }
  };

  useImperativeHandle(ref, () => ({
    validate: () => checkForm(fullForm, formData),
  }));

  return (
    <>
      <View className={`${props.className} `}>
        <>
          {fullForm.map((value, i) => (
            <InputArea
              key={i}
              onChange={(e) => changeFormData(e, i)}
              multiLine={value.maxLength && value?.maxLength > 25 ? true : false}
            />
          ))}
        </>
      </View>
    </>
  );
});

export default FormValidation;