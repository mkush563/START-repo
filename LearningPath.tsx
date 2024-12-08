import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Audio } from "expo-av";

interface LearningPathProps {
  lessons: Array<{
    id: number;
    title: string;
    isCompleted: boolean;
  }>;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const LearningPath = ({ lessons }: LearningPathProps) => {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const animatedScale = useRef(new Animated.Value(1)).current;

  const playAudio = async () => {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require("../assets/click.mp3"));
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = (index: number, lessonTitle: string) => {
    Animated.sequence([
      Animated.timing(animatedScale, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      scrollToActiveLesson(index);
      playAudio();
      router.push(`/exercise?tab=${lessonTitle}`);
    });
  };

  const scrollToActiveLesson = (index: number) => {
    scrollRef.current?.scrollTo({ y: index * 100, animated: true });
  };

  const completedLessons = lessons.filter((lesson) => lesson.isCompleted).length;

  return (
    <LinearGradient
      colors={["#e6f7ff", "#f8fbff"]}
      style={styles.container}
    >
      {/* Background Waves */}
      <View style={styles.waveContainer}>
        <View style={styles.wave} />
        <View style={[styles.wave, { top: SCREEN_HEIGHT * 0.4 }]} />
      </View>

      {/* Progress Circle */}
      <View style={styles.progressCircleContainer}>
        <Text style={styles.progressText}>
          {completedLessons}/{lessons.length}
        </Text>
        <View style={styles.outerCircle}>
          <View
            style={[
              styles.innerCircle,
              { width: `${(completedLessons / lessons.length) * 100}%` },
            ]}
          />
        </View>
      </View>

      {/* Lessons */}
      <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollView}>
        {lessons.map((lesson, index) => {
          const amplitude = 80; 
          const frequency = 0.5; 
          const horizontalOffset =
            SCREEN_WIDTH / 2 - 40 + amplitude * Math.sin(index * frequency);

          return (
            <View
              key={lesson.id}
              style={[
                styles.lessonContainer,
                { top: index * 100, left: horizontalOffset },
              ]}
            >
              <TouchableOpacity
                onPress={() => handlePress(index, lesson.title)}
                style={styles.lessonButton}
              >
                <LinearGradient
                  colors={
                    lesson.isCompleted
                      ? ["#98f5e1", "#4ba3c7"]
                      : ["#a6cee3", "#1f78b4"]
                  }
                  style={styles.buttonBackground}
                >
                  <Ionicons
                    name={lesson.isCompleted ? "checkmark-circle" : "play"}
                    size={32}
                    color="#fff"
                  />
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  waveContainer: {
    position: "absolute",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  wave: {
    position: "absolute",
    width: SCREEN_WIDTH,
    height: 150,
    backgroundColor: "#dfe7ff",
    borderRadius: 75,
    transform: [{ scaleX: 2 }],
    display: "none",
  },
  progressCircleContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4682b4",
  },
  outerCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#1C75BC",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  innerCircle: {
    width: "50%",
    height: "50%",
    borderRadius: 60,
    backgroundColor: "#1C75BC",
  },
  scrollView: {
    paddingBottom: 20,
  },
  lessonContainer: {
    position: "absolute",
    alignItems: "center",
  },
  lessonButton: {
    marginBottom: 20,
  },
  buttonBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonTitle: {
    marginTop: 150,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C75BC",
    display: "none", 
  },
});

export default LearningPath;
