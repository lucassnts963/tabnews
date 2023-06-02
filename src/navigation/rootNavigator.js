import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeView } from "../views/Home";
import { useAuth } from "../domain/context/AuthContext";
import { SignInView } from "../views/SignIn";
import { ContentView } from "../views/Content";
import { Header } from "../common/components/organisms/Header";
import { ProfileView } from "../views/Profile";
import { THEME } from "../common/styles/theme";

const { Navigator, Screen, Group } = createNativeStackNavigator()

export function RootNavigator() {
  const { session } = useAuth()

  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      {
        session ? (
          <Group>
            <Screen name="Home" component={HomeView}/>
            <Screen name="Content" component={ContentView}/>
            <Screen name="Profile" component={ProfileView} />
          </Group>
        ) : (
          <Group>
            <Screen name="SignIn" component={SignInView} />
          </Group>
        )
      }
    </Navigator>
  )
}
