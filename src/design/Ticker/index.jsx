import { StyleSheet } from "react-native";
import TextTicker from "react-native-text-ticker";

export default function Ticker() {
  return (
    <TextTicker
      style={styles.ticker}
      duration={7000}
      loop
      bounce
      isRTL
      repeatSpacer={0}
      marqueeDelay={500}
    >
      صدقة جارية عن روح المرحوم باذن الله فريد صباح. ارجو الدعاء له بالرحمة
      ولجميع المسلمين ..
    </TextTicker>
  );
}

const styles = StyleSheet.create({
  ticker: {
    fontSize: 24,
    backgroundColor: "#00261E",
    color: "#fff",
    height: 40,
    paddingHorizontal: 20,
  },
});
