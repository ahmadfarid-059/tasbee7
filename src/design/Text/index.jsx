import { Text as RNEText } from "react-native-elements";
import { useFonts } from "expo-font";

export default function Text ({ value, style, ...rest }) {
  const [fontsLoaded] = useFonts({
    "Amiri-Regular": require("../../../assets/fonts/Amiri-Regular.ttf"),
  });
  return (
    <RNEText
      style={{
        ...style,
        fontFamily: !fontsLoaded ? "sans-serif" : "Amiri-Regular",
        color: '#00261E'
      }}
      {...rest}
    >
      {value}
    </RNEText>
  );
};
