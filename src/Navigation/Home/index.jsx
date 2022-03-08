import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Text } from "../../design";
import { Details, Home } from "../../screens";

const Stack = createNativeStackNavigator();

export default function HomeNav() {
    return (
        <Stack.Navigator initialRouteName="All Azkar">
           <Stack.Screen
                name="All Azkar"
                component={Home}
                options={{
                    title:'جميع الأذكار',
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