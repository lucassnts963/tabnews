import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { THEME } from "../../common/styles/theme";
import { styles } from "./styles";
import { useState } from "react";
import { useAuth } from "../../domain/context/AuthContext";
import { LoadingView } from "../Loading";

export function SignInView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, loading } = useAuth()

  function handleSignIn() {
    if (email && password) {
      signIn({ email, password })
      setEmail('')
      setPassword('')
    }
  }

  if (loading) {
    return <LoadingView />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TabNews</Text>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        placeholderTextColor={THEME.COLORS.PLACEHOLDER}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        placeholderTextColor={THEME.COLORS.PLACEHOLDER}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

