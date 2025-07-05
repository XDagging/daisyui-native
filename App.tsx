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
    <SafeAreaView className="h-screen w-screen">
     

      <View className="m-4">
         <Text className="text-center font-bold text-lg">Welcome!</Text>
         <Text className="text-center">This library is an attempt of making daisyui but for react native. It is a work in progress...</Text>
        <Alert>

        <Text>This is how an alert looks like, you can customize it and also add your own icons</Text>
      </Alert>
      

      <Avatar className="w-20 h-20" isPlaceholder={true}>
        <View className=" rounded-full">
          <Text>Avatar</Text>

        </View>
        <AvatarStatus isActive={true} />

      </Avatar>
      
      <Button className="mt-2" onPress={(e: GestureResponderEvent) => handleClick(e)}><Text>Little button here</Text></Button>
      
      <TextArea onChange={(e) => console.log("this changed")} placeholder="This is a textArea. it looks ugly, i know, but you can change it depending on your theme" />
      <Badge>
        <Text>"This is a badgee (should probably be shorter tho)"</Text>
      </Badge>



      <FormValidation ref={formRef} fullSchema={[
      {inputChar: "email",
        required: true
      },
      {inputChar: "number"}
      ]}>



      </FormValidation>
  
      <Button onPress={handleSubmit}>
        <Text>Above is a form with custom validation, you can change this without any issues</Text>
      </Button>


      </View>



      <Dock className="!bg-primary !text-primary-content">

    <View className="flex-col items-center">
  <FontAwesome5 name="house-damage" size={18} color="black" />
          {/* <Text>House</Text> */}
        </View>
         <View className="flex-col items-center">
          <FontAwesome5 name="house-damage" size={18} color="black" />
          {/* <Text>Eater</Text> */}
        </View>
         <View className="flex-col items-center">
          <FontAwesome5 name="house-damage" size={18} color="black" />
          {/* <Text>Something</Text> */}
        </View>


      </Dock>
      

      <View className="bg-base-300 flex-row items-center">

        <Toggle value={isSwitchOn} onChange={() => {
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


      <Skeleton className="w-20 h-20 mx-auto rounded-full">
      </Skeleton>


      <Carousel focusAmount={1} height={10} className="bg-base-300">
          <Text className="">This is item one</Text>
          <Link url="https://google.com"><Text>asdf</Text></Link>
          <Text className="">asf</Text>
          <Text className="">asf</Text>
          <Text className="">asf</Text>


      </Carousel>

       


      

    

  
    </SafeAreaView>






    </>
  );
}
