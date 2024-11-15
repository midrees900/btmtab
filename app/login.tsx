import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import MyButton from "@/components/MyButton";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  const router = useRouter();
  const onLogin = () => {
    router.navigate("/signup");
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 20 }}>
        <TextInput
          placeholder="Enter Email Here"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e)=> console.log(e)}
        />

<TextInput
          placeholder="Enter Password Here"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />

        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
