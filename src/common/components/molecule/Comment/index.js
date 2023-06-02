import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";
import { THEME } from "../../../styles/theme";
import { timestamp } from '../../../utils/dateFormatted'
import { Markdown } from '../../organisms/Markdown'

export function Comment({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <TouchableOpacity>
          <Feather name='chevron-up' size={20} color={THEME.COLORS.TEXT_SECONDARY}/>
        </TouchableOpacity>
        <Text style={styles.text}>{data.tabcoins}</Text>
        <TouchableOpacity>
          <Feather name='chevron-down' size={20} color={THEME.COLORS.TEXT_SECONDARY}/>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRight}>
        <View style={styles.containerInfo}>
          <Text style={styles.badge}>{data.owner_username}</Text>
          <Text style={styles.text}>.</Text>
          <Text style={styles.text}>{timestamp(data.published_at)}</Text>
        </View>
        <View style={styles.containerMarkdown}>
          <Markdown data={data}/>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Responder</Text>
          </TouchableOpacity>
        </View>

          <View>
            {
              data.children.map(value => {
                return <Comment data={value}/>
              })
            }
          </View>
      </View>
    </View>
  )
}