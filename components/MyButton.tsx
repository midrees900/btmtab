import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MyButton({ title, onPress }) {
  return (
    <View>
      {/* <Text>Continue</Text> */}
      {/* <Button title='Button'/> */}
      <TouchableOpacity
        activeOpacity={0.8}
       style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
