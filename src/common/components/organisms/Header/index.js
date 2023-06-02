import { Image, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { styles } from "./styles";

import { THEME } from "../../../styles/theme";
import logo from '../../../../assets/favicon-dark.png'

import { useAuth } from '../../../../domain/context/AuthContext'
import { useNavigation } from "@react-navigation/native";

export function Header () {
  const { signOut } = useAuth()
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={logo} style={styles.image}/>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Feather name="user" size={24} color={THEME.COLORS.WHITE}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signOut()}>
          <Feather name="log-out" size={24} color={THEME.COLORS.DANGER}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}