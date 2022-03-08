import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from "react-redux";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { ItemCard, Ticker } from "../../design";
import { handleFavs } from "../../utils";
import * as azkar from "../../../azkar.json";
const list = Object.keys(azkar);
list.pop()

export default function Home({ navigation }) {
  const {favorites} = useSelector(state => state)
  const dispatch = useDispatch()
  const storageCheck = async () => {
   try { const favoritesItems = await AsyncStorage.getItem('favorites')
    console.log(favoritesItems);
    const parsedStorage = JSON.parse(favoritesItems)
    if(parsedStorage?.length) {
      dispatch({
        type: 'STORE_DATA',
        payload: parsedStorage
      })
    }} catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
      storageCheck()
  }, [])
  return (
    <View>
      <Ticker />
      <ScrollView style={{marginBottom: 40}}>
        {list?.map((item) => (
          <ItemCard
            onPress={() => {
              navigation.navigate("Details", { selectedCategory: item })
            }
            }
            key={item}
            textValue={item}
            iconColor= {favorites.find(ele => ele === item) ? '#00261E' : '#C7C7C7'}
            iconPress={() => handleFavs(item, dispatch, favorites, showMessage)}
          />
        ))}
      </ScrollView>
      <FlashMessage position={'top'} />
    </View>
  );
}
