import {useState} from "react"
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

export default function App() {

  
  // This would change depending on what the user wants.

  

  const handleClick = (e: GestureResponderEvent) => {
    console.log("This has occured")
  }
  return (
    <>
    <SafeAreaView className="h-screen w-screen">

      <View className="m-4">
        <Alert>

        <Text>sdf</Text>
      </Alert>

      <Avatar className="w-20 h-20" isPlaceholder={true}>
        <View className=" rounded-full">
          <Text>23asdf</Text>

        </View>
        <AvatarStatus isActive={true} />

      </Avatar>
      
      <Button onPress={(e: GestureResponderEvent) => handleClick(e)}><Text>sdfg</Text></Button>
      
      <TextArea onChange={(e) => console.log("this changed")} />
      <Badge>
        <Text>"This should have some text"</Text>
      </Badge>



      </View>
      <Dock>

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
      

    </SafeAreaView>






    </>
  );
}
