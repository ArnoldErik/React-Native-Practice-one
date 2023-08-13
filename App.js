// import { StatusBar } from 'expo-status-bar';
import {  Dimensions,
          StyleSheet, 
          Text, 
          View, 
          Image, 
          TouchableNativeFeedback, 
          RefreshControl,
          Alert,
          Button,
          Platform} from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';
// import { useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {
    // console.log(useDeviceOrientation());
  // console.log(useDimensions());

  return (
    <View style={[styles.container,containerStyle]}>
      {/* <Text numberOfLines={1} >
      Hello React Native </Text>
      <TouchableNativeFeedback onPress={()=>RefreshControl}>
         <View style={{ width: 200, height: 70, backgroundColor: "lightgreen"}}></View>    
      </TouchableNativeFeedback> */}

      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: "30%",
      }}></View>
      
      <Button 
        color="orange"
        title="Start" onPress={()=> Alert.alert("My Test", "Successful!", [
          {text:"Yes", onPress: ()=> console.log("Yes")},
         // {text:"?", onPress:()=> console.log(StatusBar.currentHeight)},
        ])} />

      {/* <Button
        color="lightgreen"
        title="Click Me"
        onPress={()=>
          Alert.prompt("Question", "How do you feel?", text => console.log(text))}
      /> */}
      
    </View>
  );
}

const containerStyle = {backgroundColor:"orange"};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,
  },
});
