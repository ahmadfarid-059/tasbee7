import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleFavs = async (item, dispatch, favorites, showMessage) => {
  const element = favorites.find((ele) => ele === item);
  const storage = await AsyncStorage.getItem("favorites");
  if (element) {
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: item,
    });
    showMessage({
      message: "تمت الإزالة من المفضله",
      type: "info",
    });
    const newStorage = JSON.parse(storage)?.filter((ele) => ele !== item);
    await AsyncStorage.setItem("favorites", JSON.stringify(newStorage));
  } else {
    dispatch({
      type: "ADD_FAVORITE",
      payload: item,
    });
    showMessage({
      message: "تمت الاضافة الى المفضله",
      type: "info",
    });
    if (!storage) {
      await AsyncStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, item])
      );
    } else {
      await AsyncStorage.setItem(
        "favorites",
        JSON.stringify([...JSON.parse(storage), item])
      );
    }
  }
};
