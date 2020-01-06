import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions
} from "react-native";

import { TextInput, FlatList } from "react-native-gesture-handler";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const ResultScreen = ({ navigation }) => {
  const param = navigation.getParam("param");

  const results = param.all.map((i, index) => ({ ...i, id: index }));
  const operation = param.operation;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mathContainer}>
        <FlatList
          data={results}
          keyExtractor={item => item.id}
          renderItem={({
            item: { number1, number2, answer, expected },
            index
          }) => {
            return (
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  borderBottomWidth: 1,
                  borderColor: "gray",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly"
                }}
              >
                <Text style={styles.numberText}>{number1}</Text>
                <MaterialCommunityIcons name="plus" size={20} />

                <FontAwesome
                  name={operation}
                  size={20}
                  style={styles.numberText}
                />
                <Text style={styles.numberText}>{number2}</Text>
                <Text style={styles.numberText}>=</Text>
                <Text style={styles.numberText}>{answer}</Text>
                {expected === answer ? (
                  <AntDesign name="checkcircleo" color="green" size={20} />
                ) : (
                  <AntDesign name="closecircleo" color={"red"} size={20} />
                )}
              </View>
            );
          }}
        />
      </View>

      <View style={styles.tabBarInfoContainer}></View>
    </SafeAreaView>
  );
};

ResultScreen.navigationOptions = {
  title: "Result"
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
    fontSize: 20,
    fontWeight: "300",
    width: Dimensions.get("screen").width / 6
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
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

export { ResultScreen };
