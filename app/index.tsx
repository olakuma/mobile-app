import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello World. This is my first app</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})
