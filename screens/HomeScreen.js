import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  SafeAreaView,
  Button
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Button
            title="Add"
            onPress={() => navigation.navigate("Add")}
          ></Button>
          <Button
            title="Subtract"
            onPress={() => navigation.navigate("Subtract")}
          ></Button>
          <Button
            title="Multiply"
            onPress={() => navigation.navigate("Times")}
          ></Button>
          <MaterialCommunityIcons name="plus" size={20} />
          <MaterialCommunityIcons name="minus" size={20} />
          <MaterialCommunityIcons name="close" size={20} />
          <MaterialCommunityIcons name="division" size={20} />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.tabBarInfoContainer}></View>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mathContainer: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  numberText: {
    fontSize: 100,
    fontWeight: "800"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fbfbfb",
    paddingVertical: 10
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  }
});

export { HomeScreen };
