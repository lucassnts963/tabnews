import { ActivityIndicator, StyleSheet, View } from "react-native";
import { THEME } from "../../common/styles/theme";

export function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND
  }
})