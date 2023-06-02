import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";
import { THEME } from "../../common/styles/theme";
import { useContent } from "../../common/hooks/useContent";

import { LoadingView } from '../Loading'

export function ContentView() {
  const navigation = useNavigation()
  const route = useRoute()
  const { data } = route.params

  const { content, loading } = useContent(data)

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color={THEME.COLORS.TEXT}/>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.heading}>{data.title}</Text>
        {
          loading && !content ? <LoadingView /> : (
            <>
              <Text style={styles.body}>{content ? content.body : ''}</Text>
            </>
          )
        }

      </ScrollView>
    </View>
  )
}
