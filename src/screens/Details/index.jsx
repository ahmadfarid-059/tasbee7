import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import * as azkar from "../../../azkar.json";
import { ContentCard } from "../../design";

export default function Details({ navigation, route }) {
  const { selectedCategory } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: selectedCategory });
  }, [])
  return (
    <View>
      <ScrollView>
        {azkar[selectedCategory]?.map((item) => (
          <ContentCard item={item} key={item.content} />
        ))}
      </ScrollView>
    </View>
  );
}
