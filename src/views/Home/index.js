import { FlatList, Text, View } from "react-native";
import { useAuth } from '../../domain/context/AuthContext'
import { styles } from "./styles";
import { useContents } from "../../common/hooks/useContents";
import { ContentItem } from "../../common/components/atoms/ContentItem";
import { Header } from "../../common/components/organisms/Header";

export function HomeView() {
  const { session } = useAuth()

  const { contents } = useContents()

  return (
    <>
      <Header />
      <FlatList
        contentContainerStyle={styles.container}
        data={contents}
        renderItem={({ item, index }) => <ContentItem data={item} index={index + 1}/>}
      />
    </>
  )
}

