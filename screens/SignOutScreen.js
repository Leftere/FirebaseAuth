import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSignOut}>
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782f9",
    color: "white",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",

    fontSize: 16,
  },
});
