import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Vibration } from "react-native";
import { Button, Divider } from "react-native-elements";
import Text from "../Text";

export default function ContentCard({ item }) {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    if (counter < item.count) {
      if (counter === item.count -1) {

        Vibration.vibrate(200, false)
      }
      setCounter(counter + 1);
    } else {
      Vibration.vibrate(200, false)
      return;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleCounter}>
      <Text value={item.content} style={styles.content} />
      <Text value={item.description} />
      <Text value={item.reference} />
      <View style={styles.btnContainer}>
        <Button
          title={`ابدأ العد ${counter}/ ${item.count}`}
          containerStyle={styles.button}
          buttonStyle={{ height: "100%", backgroundColor: '#00261E' }}
          titleStyle={{ fontSize: 12 }}
          onPress={handleCounter}
        />
        <Button
          title={"إعادة بدء العد"}
          containerStyle={styles.button}
          buttonStyle={{ height: "100%", backgroundColor: '#fff' }}
          titleStyle={{ fontSize: 12, color: '#00261E' }}
          onPress={() => setCounter(0)}
        />
      </View>
      <Divider color="#000" width={1} style={styles.divider} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  content: {
    fontSize: 20,
  },
  button: {
    height: 30,
    backgroundColor: '#fff'
  },
  btnContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
    
  },
  divider: {
    marginVertical: 5,
  },
});
