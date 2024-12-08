import React from "react";
import { StyleSheet, View } from "react-native";
import LearningPath from "./LearningPath";

const lessons = [
  { id: 1, title: "Lesson 1", isCompleted: true },
  { id: 2, title: "Lesson 2", isCompleted: false },
  { id: 3, title: "Lesson 3", isCompleted: false },
  { id: 4, title: "Lesson 4", isCompleted: false },
];

export default function App() {
  return (
    <View style={styles.container}>
      <LearningPath lessons={lessons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
