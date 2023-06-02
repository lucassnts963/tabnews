import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { THEME } from "../../common/styles/theme";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../common/hooks/useUser";
import { useAuth } from '../../domain/context/AuthContext'
import { LoadingView } from '../Loading'

export function ProfileView() {
  const navigation = useNavigation()
  const user = useUser()
  const { signOut } = useAuth()

  if (!user) {
    return <LoadingView />
  }

  const { username, email } = user

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color={THEME.COLORS.TEXT}/>
        </TouchableOpacity>
      </View>
      <View style={styles.containerProfile}>
        <Feather name="user" size={100} color={THEME.COLORS.TEXT}/>
        <Text style={styles.heading}>{username}</Text>
        <Text style={styles.email}>{email}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={() => signOut()}>Sair</Text>
          <Feather name="log-out" size={24} color={THEME.COLORS.DANGER}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}