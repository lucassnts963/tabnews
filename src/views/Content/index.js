import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";
import { THEME } from "../../common/styles/theme";

import { Markdown } from "../../common/components/organisms/Markdown";
import { useComments } from "../../common/hooks/useComments";
import { Comment } from "../../common/components/molecule/Comment";

export function ContentView() {
  const navigation = useNavigation()
  const route = useRoute()
  const { data } = route.params

  const { comments } = useComments(data)

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color={THEME.COLORS.TEXT}/>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.heading}>{data.title}</Text>
        <Markdown data={data} />
        <View style={styles.containerComment}>
          {
            comments.map(value => {
              return <Comment data={value} key={value.id}/>
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}
