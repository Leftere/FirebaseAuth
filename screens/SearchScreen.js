import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
const SearchScreen = () => {
  console.log(typeof auth.currentUser);
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
