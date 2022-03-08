import { View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { ItemCard, Text, Ticker } from "../../design";
import { handleFavs } from "../../utils";

export default function FavoritesScreen({navigation}) {
  const { favorites } = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <View>
      <Ticker />
      <ScrollView style={{marginBottom: 40}}>
        {favorites?.length ? (
          favorites.map((item) => 
            <ItemCard
              onPress={() =>
                navigation.navigate("Details", { selectedCategory: item })
              }
              key={item}
              textValue={item}
              iconColor={
                favorites.find((ele) => ele === item) ? "#00261E" : "#a9b9d4"
              }
              iconPress={() => handleFavs(item, dispatch, favorites, showMessage)}
            />
          )
        ) : (
          <View>
              <Text value={"لا توجد أذكار مفضلة"} h3/>
          </View>
        )}
      </ScrollView>
        <FlashMessage />
    </View>
  );
}
