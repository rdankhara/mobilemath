import React, { useState, useDebugValue } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";

import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { NumberText } from "../components/NumberText";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationEvents } from "react-navigation";

const createProblem = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  return { number1, number2, expected: number1 + number2, answer: undefined };
};
const createState = level => {
  const current = createProblem();
  return {
    level,
    current,
    showResult: false,
    all: [current]
  };
};
const operation = "plus";

const AddScreen = ({ navigation }) => {
  const [state, setState] = useState(() => createState());

  const renderNext = () => {
    const newProblem = createProblem();
    const newAll = [...state.all, newProblem];

    setState({
      current: newProblem,
      all: newAll,
      showResult: false
    });
  };

  const onAnswer = e => {
    const { all, current } = state;
    all[all.length - 1].answer = +current.answer;
    if (all.length == 20) {
      navigation.navigate("Result", { param: { all, operation } });
    } else {
      renderNext();
    }
  };
  const { current, all } = state;
  const { number1, number2, answer } = current;
  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onDidFocus={() => setState(createState())} />
      <KeyboardAwareScrollView style={styles.container} behavi>
        <View style={styles.mathContainer}>
          <NumberText value={number1} />
          <MaterialCommunityIcons name={operation} size={100} />

          <NumberText value={number2} />
          <TextInput
            style={{
              fontSize: 100,
              fontWeight: "800",
              borderWidth: 1,
              borderColor: "gray",
              minWidth: 200,
              textAlign: "center"
            }}
            autoFocus={true}
            value={answer}
            onChangeText={value => {
              const newCurrent = { ...current, answer: value };
              setState({ ...state, current: newCurrent });
            }}
            onEndEditing={onAnswer}
            keyboardType="numeric"
            keyboardAppearance={"dark"}
            returnKeyType="done"
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text>{all && all.length}/10</Text>
        {state.showResult && (
          <>
            {!state.isCorrect && (
              <AntDesign size={35} name="closecircleo" color="red" />
            )}
            {state.isCorrect && (
              <AntDesign size={35} name="checkcircleo" color="green" />
            )}
            {all.length < 5 ? (
              <TouchableOpacity onPress={renderNext()}>
                <AntDesign size={35} name="playcircleo" color="blue" />
              </TouchableOpacity>
            ) : null
            // (
            //   <TouchableOpacity
            //     onPress={() => {
            //       setState(createState());
            //     }}
            //   >
            //     <FontAwesome name="refresh" size={35} color="blue" />
            //   </TouchableOpacity>
            // )
            }
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

AddScreen.navigationOptions = {
  title: "Add Numbers"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mathContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  numberText: {
    fontSize: 100,
    fontWeight: "800"
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

export { AddScreen };
