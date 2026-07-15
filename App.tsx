import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        महानदी हार्वेस्टर मालिक कल्याण संघ
      </Text>

      <Text style={styles.text}>
        पंजीयन क्रमांक: 122202678489
      </Text>

      <Text style={styles.text}>
        पता - जिला कार्यालयः ग्राम लखनपुरी,
        {"\n"}
        तहसील चारामा, जिला कांकेर (छत्तीसगढ़)
      </Text>

      <Text style={styles.text}>
        मोबाइल: 7000520873
      </Text>

      <Text style={styles.text}>
        व्हाट्सएप: 9479025929
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B3D91",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#222",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 28,
  },
});
