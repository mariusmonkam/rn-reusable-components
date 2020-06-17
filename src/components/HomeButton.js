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
