import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function AddDect() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>What is the title of your new deck?</Text>
      <OptionButton label="ADD" onPress={() => alert("Pressed")} />
    </ScrollView>
  );
}

function OptionButton({ label, onPress }) {
  return (
    <RectButton style={styles.option} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});
