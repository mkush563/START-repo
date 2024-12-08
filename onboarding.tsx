import { View, Text, Card, Avatar } from "tamagui";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Flame } from "@tamagui/lucide-icons";
import LearningPath from "@/components/learningPath/LearningPath";

// Test Lessons tbd
const initialLessons = [
  { id: 1, title: "Test", isCompleted: false },
  { id: 2, title: "2", isCompleted: false },
  { id: 3, title: "3", isCompleted: false },
  { id: 4, title: "4", isCompleted: false },
  { id: 5, title: "5", isCompleted: false },
  { id: 6, title: "5", isCompleted: false },
  { id: 7, title: "5", isCompleted: false },
  { id: 8, title: "5", isCompleted: false },
  { id: 9, title: "5", isCompleted: false },
  { id: 10, title: "5", isCompleted: false },
];

export default function Onboarding() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          height: "100%",
          marginTop: 50,
          flexDirection: "column",
          gap: 5,
        }}
      >
        {/* Motivational Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>What's your current 📊📈 status?</Text>
          <Text style={styles.bannerText}>Level: Intermediate 🗣️</Text>
          <Text style={styles.bannerText}>
            Exercises Completed: 1/10. Keep going! 🚀
          </Text>
          <Text style={styles.bannerText}>Today's Practice: 15 minutes 🎉</Text>
        </View>

        {/* Avatar */}
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "flex-end",
          }}
        >
       
        </View>

        {/* Learning Path */}
        <LearningPath lessons={initialLessons} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#1C75BC",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e6f7ff",
    marginBottom: 5,
  },
  bannerText: {
    fontSize: 14,
    color: "#f8f8f8",
    marginBottom: 2,
  },
});


/*  <Avatar circular size="$5">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>*/