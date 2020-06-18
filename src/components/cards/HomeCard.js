import React from "react";
import { View } from "react-native";
import ContactCard from "./ContactCard";
import { Button } from "../Button";

const HomeCard = ({ navigation }) => {
  return (
    <View>
      <ContactCard
        name="Janes William"
        role="UI & UX developer"
        image={{ source: require("./images/photo-human-woman.jpg") }}
      />
      <ContactCard
        name="Regis Batongue"
        role="Back-end developer"
        image={{ source: require("./images/photo-african1.jpg") }}
      />
      <ContactCard
        name="Alex Badwin"
        role="Software Engineer"
        image={{ source: require("./images/photo-man-eu.jpg") }}
      />
      <ContactCard
        name="Frank Assalfo "
        role="Front-end developer"
        image={{ source: require("./images/photo-african2.jpg") }}
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Go Back"
        color="black"
      />
    </View>
  );
};

export default HomeCard;
