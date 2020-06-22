import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  NoteOne,
  NoteFive,
  NoteFour,
  NoteSeven,
  NoteSix,
  NoteThree,
  NoteTwo,
} from "./constants/Colors";

import { Audio } from "expo-av";

const xyloSounds = {
  one: require("./assets/note1.wav"),
  two: require("./assets/note2.wav"),
  three: require("./assets/note3.wav"),
  four: require("./assets/note4.wav"),
  five: require("./assets/note5.wav"),
  six: require("./assets/note6.wav"),
  seven: require("./assets/note7.wav"),
};

export default function App() {
  handlePlay = async (note) => {
    const soundObject = new Audio.Sound();
    try {
      const source = xyloSounds[note];
      await soundObject.loadAsync(source);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: NoteOne }]}
          onPress={() => this.handlePlay("one")}
        >
          <Text style={styles.buttonText}>Note 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: NoteTwo }]}
          onPress={() => this.handlePlay("two")}
        >
          <Text style={styles.buttonText}>Note 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: NoteThree }]}
          onPress={() => this.handlePlay("three")}
        >
          <Text style={styles.buttonText}>Note 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: NoteFour }]}
          onPress={() => this.handlePlay("four")}
        >
          <Text style={styles.buttonText}>Note 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: NoteFive }]}
          onPress={() => this.handlePlay("five")}
        >
          <Text style={styles.buttonText}>Note 5</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: NoteSix }]}
          onPress={() => this.handlePlay("six")}
        >
          <Text style={styles.buttonText}>Note 6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: NoteSeven }]}
          onPress={() => this.handlePlay("seven")}
        >
          <Text style={styles.buttonText}>Note 7</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    /*alignItems: "center",
    justifyContent: "center",*/
  },
  buttonContainer: {
    height: 40,
    margin: 15,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
