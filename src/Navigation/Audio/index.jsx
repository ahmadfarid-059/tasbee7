import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Audios } from "../../screens";

const Stack = createNativeStackNavigator();

export default function AudiosNav() {
    return (
        <Stack.Navigator initialRouteName="Audios">
           <Stack.Screen
                name="Audios"
                component={Audios}
                options={{
                    title:'الصوتيات',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: '700',
                    },
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}