import { Text, Pressable } from "react-native"
import { styles } from "./styles"
import { timestamp } from "../../../utils/dateFormatted"
import { useNavigation } from "@react-navigation/native"

export function ContentItem({ data, index }) {
  const { title, tabcoins, published_at, children_deep_count, owner_username } = data

  const navigation = useNavigation()

  function handleClick() {
    navigation.navigate('Content', { data })
  }

  return (
    <Pressable style={styles.container} onPress={handleClick}>
      <Text style={styles.text}>{index}. {title}</Text>
      <Pressable style={styles.containerInfo}>
        <Text style={styles.textInfo}>{tabcoins} {tabcoins > 1 ? 'tabcoins' : 'tabcoin'} .</Text>
        <Text style={styles.textInfo}>{children_deep_count} comentário .</Text>
        <Text style={styles.textInfo}>{owner_username} .</Text>
        <Text style={styles.textInfo}>{timestamp(published_at)}</Text>
      </Pressable>
    </Pressable>
  )
}
