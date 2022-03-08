import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Audio } from "expo-av";
import { Ticker, ItemCard, Text } from "../../design";
import { audioAzkar } from "../../../audios.json";

export default function Audios() {
  const [soundPlaying, setsoundPlaying] = useState({
    path: "",
    sound: "",
  });

  const playSound = async (path) => {
    try {
      const { sound } = await Audio.Sound.createAsync(path);
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
      });
      setsoundPlaying({
        path,
        sound,
      });
      sound
        ? await sound.playAsync()
        : showMessage({
            message: "حدث خطأ ما يرجى المحاولة في ما بعد",
            type: "warning",
          });
    } catch (err) {
      showMessage({
        message: "حدث خطأ ما يرجى المحاولة في ما بعد",
        type: "warning",
      });
    }
  };
  const stopSound = () => {
    soundPlaying.sound.unloadAsync();
    setsoundPlaying({});
  };

  useEffect(() => {
    return () => {
      soundPlaying.sound ? stopSound() : undefined;
    };
  }, [soundPlaying.sound]);
  return (
    <View>
      <Ticker />
      <ScrollView style={{marginBottom: 40}}>
        <View>
          {audioAzkar.map((item) => (
            <ItemCard
              onPress={() =>
                soundPlaying?.path?.uri === item.AUDIO_URL
                  ? stopSound()
                  : playSound({ uri: item.AUDIO_URL })
              }
              key={item.TITLE}
              textValue={item.TITLE}
              iconColor={"#00261E"}
              iconPress={() =>
                soundPlaying?.path?.uri === item.AUDIO_URL
                  ? stopSound()
                  : playSound({ uri: item.AUDIO_URL })
              }
              iconName={
                soundPlaying?.path?.uri === item.AUDIO_URL ? "pause" : "play"
              }
            />
          ))}
        </View>
      </ScrollView>
      <FlashMessage position={"top"} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#4287f5",
    marginTop: 20,
    marginRight: 20,
  },
});
