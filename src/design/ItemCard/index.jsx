import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../Icon";
import Text from "../Text";

export default function ItemCard({ textValue, iconColor, iconPress, onPress, iconName }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
        <Text value={textValue} style={styles.text} />
      </TouchableOpacity>
      <Icon
        raised={false}
        name={iconName || "heart"}
        type="ant-design"
        color={iconColor}
        onPress={iconPress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    height: 100,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "700"
  },
  touchableOpacity: {
    height: "100%",
    justifyContent: "center",
    width: "90%",
  },
  icon: {
  },
});
