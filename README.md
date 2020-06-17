# rn-reusable-components
Resusable components, Buttons, Cards, Images, List of objects,animation for react-native
# Installation
first install install react-native via expo by run the following code
`Assuming that you have Node 12 LTS or greater installed, you can use npm 
to install the Expo CLI command line utility:`
```javascript
npm install -g expo-cli
```
Then run the following commands to create a new React Native project called "YourProjectName":
```javascript
expo init YourProjectName
cd YourprojectName
npm start # you can also use: expo start
```
[Read more about Installin ReactNative with expo here](https://reactnative.dev/docs/environment-setup)

When your project is ready , create a directory that you can call ##components and a subdirectory
that you can call ##buttons inside ##buttons 
*create a file and name it #Button.js
*copy and paste the following code inside the file is your main button component 
```javascript
import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function Button(props) {
  //Let's define our props
  const { title, color, ...otherProps } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.boxWithShadow,
        styles.pattern,
        { backgroundColor: color },
      ]}
      {...otherProps}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  color: "blue",
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 5,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    elevation: 4,
  },
});

```
Now you can use your button any where in your app by importing it like this,
```javascript
import React from "react";
import { StyleSheet, Alert, View } from "react-native";
import { Button } from "./Button";

export default function HomeButton() {
  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={() => Alert.alert("Press me")}
          title="Press me"
          color="skyblue"
        />
        <Button
          onPress={() => Alert.alert("Click  me")}
          title="Click me"
          color="red"
        />
        <Button
          onPress={() => Alert.alert("Smile to  me")}
          title="Smile to me"
          color="indigo"
        />

        <Button
          onPress={() => Alert.alert("Read  me")}
          title="Read me"
          color="seagreen"
        />
        <Button
          onPress={() => Alert.alert("Follow  me")}
          title="Follow me"
          color="yellowgreen"
        />
        <Button
          onPress={() => Alert.alert("Share  me")}
          title="Share me"
          color="mediumorchid"
        />
        <Button
          onPress={() => Alert.alert("Guide  me")}
          title="Guide me"
          color="navy"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```
Pay attention on where is located your ##Button.js when importing

Happy Hacking!
More reusable components coming!
Stay tune!
