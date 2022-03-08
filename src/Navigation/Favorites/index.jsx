import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, FavoritesScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export default function FavsNav() {
    return (
        <Stack.Navigator initialRouteName="Favorites">
           <Stack.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    title:'الأذكار المفضلة',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: '700',
                    },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
            />
        </Stack.Navigator>
    )
}