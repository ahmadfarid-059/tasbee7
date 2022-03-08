import { View, Text, StyleSheet } from "react-native";

export default function Header({
  containerStyle = {},
  title,
  titleStyle = {},
}) {
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...styles.text,
          ...titleStyle,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4287f5",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});
