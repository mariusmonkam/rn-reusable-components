import React from "react";
import { Button } from "./Button";
import { StyleSheet, View } from "react-native";
export default function HomeButton({ navigation }) {
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
        <Button
          onPress={() => navigation.navigate("HomeCard")}
          title="Go to Cards"
          color="black"
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
