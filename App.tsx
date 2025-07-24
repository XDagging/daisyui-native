import {useState, useRef} from "react"
import './global.css';
import Button from "./components/Button"
import {GestureResponderEvent, View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import TextArea from "./components/InputArea"
import Badge from "components/Badge";
import Alert from "components/Alert";
import { Text } from "react-native";
import Avatar from "components/Avatar";
import AvatarStatus from "components/AvatarStatus";
import Dock from "components/Dock";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FormValidation from "components/FormValidation";
import Toggle from "components/Toggle";
import Check from "components/Check";
// import Drop from "components/Dropdown";
import Carousel from "components/Carousel";
import Skeleton from "components/Skeleton";

import type { FormResponse } from "components/FormValidation";
import Link from "components/Link";
import { LightTheme } from "themes";
import { ScrollView } from "react-native";

export default function App() {
  const formRef = useRef<{ validate: () => FormResponse | undefined } | null>(null);
  const [isCheck, setIsCheck] = useState<boolean>(false)
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const handleSubmit = () => {
    const formValidation = formRef.current?.validate();

    if (formValidation===undefined) {

    } else {
      // There is a validation error. do something here
    }

    console.log(formValidation)
    console.log("hello world")
  }
  // This would change depending on what the user wants.

  

  const handleClick = (e: GestureResponderEvent) => {
    console.log("This has occured")
  }
  return (
    <>
    <SafeAreaView className="h-screen w-screen flex-col gap-2">
     <ScrollView>

 
     <Avatar className="w-20 h-20 mx-auto" isPlaceholder={true}>
        <View className=" rounded-full">
          <Text>Avatar</Text>

        </View>
        <AvatarStatus isActive={true} />

      </Avatar>
      <Alert variant="warning">

        <Text>Warning: This library is still being developed (this is the alert component btw).   </Text>
      </Alert>
      
      <View className="mx-4">
         <Text className="text-center font-bold text-lg">Welcome!</Text>
         <Text className="text-center">This library is an attempt of making daisyui but for react native. It is a work in progress...</Text>
  
      

 
      <Button variant="accent" className="my-2 mx-auto" onPress={(e: GestureResponderEvent) => handleClick(e)}><Text>Click me!</Text></Button>
      <View className="flex flex-row items-center gap-2 justify-items-center mx-auto">
        <Badge variant="primary">
        <Text>Cool badge #1</Text>
      </Badge> 
        <Badge variant="secondary">
        <Text>Cool badge #2</Text>
      </Badge> 
      <Badge variant="accent">
        <Text>Cool badge #3</Text>
      </Badge> 

      </View>
       
      <View className="my-2">
        <Text className="text-center">To build this library, we translated styles from the original <Link className="underline text-blue-500" url="https://daisyui.com/"><Text>Daisyui Library</Text></Link></Text>
      </View>
      <TextArea variant="secondary" className="text-center mb-2" onChange={(e) => console.log("this changed")} placeholder="Sample Input" />
     



      <FormValidation ref={formRef} className="gap-2 mb-1" fullSchema={[
      {inputChar: "email",
        required: true,
        placeholder: "Email here"
      },
      {inputChar: "number"}
      ]}>



      </FormValidation>
  
      <Button variant="primary" onPress={handleSubmit} className="w-full py-4">
        <Text>Submit Validated Form</Text>
      </Button>
      <Alert variant="warning"><Text className="text-center">Look at the console to see how the form validation works</Text></Alert>


      </View>

      

      <View className="bg-base-300 flex-row items-center">

        <Toggle booleanTrackColor={{whenFalse: LightTheme.accent, whenTrue: LightTheme.primary}} booleanThumbColor={{whenFalse: LightTheme.accent, whenTrue: LightTheme.primary }} value={isSwitchOn} onChange={() => {
        console.log("Hows it going")
        setIsSwitchOn((prev) => !prev)}}>


      </Toggle>
      <Text>
        This is a Toggle (Switch). This can be modified as well
      </Text>

      </View>

      <View className="mt-2 bg-primary p-3 flex-row items-center gap-2 ">

          <Check
        value={isCheck}
        onChange={() => setIsCheck((prev) => !prev)}
      />
        <Text className="text-primary-content">This is a Checkbox. does checkbox things...</Text>


      </View>

      <View className="my-4 ">
          <Skeleton className="w-20 h-20 mx-auto rounded-full">
      </Skeleton>
        
      <Text className="text-center">This is my skeleton loader, cool right?</Text>

      </View>
    


      <Carousel focusAmount={1} height={10} className="bg-base-300">
          <Text className="">Welcome to our smart carousel, scroll to the right to begin </Text>
          <Link url="https://google.com"><Text>Item Two</Text></Link>
          <Text className="">Item Three</Text>
          <Text className="">Item Four</Text>
          <Text className="">Item Five</Text>
      </Carousel>

       
    

              </ScrollView>
              
      <Dock variant="base" className="!bg-secondary !text-primary-content">

        <View className="flex-col items-center w-2/6 justify-center justify-items-center">
          <FontAwesome5 name="house-damage" size={18} color="black" />
          <Text>Icon 1</Text>
          </View>
         <View className="flex-col items-center w-2/6  justify-center justify-items-center">
          <FontAwesome5 name="house-damage" size={18} color="black" />
          <Text>Icon 2</Text>
        </View>
         <View className="flex-col items-center w-2/6 justify-center justify-items-center">
          <FontAwesome5 name="house-damage" size={18} color="black" />
          <Text>Icon 3</Text>
        </View>


      </Dock>
    </SafeAreaView>






    </>
  );
}
