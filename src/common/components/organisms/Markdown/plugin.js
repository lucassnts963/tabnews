import { MarkdownIt } from "@ronradtke/react-native-markdown-display"
import { Text, View } from "react-native"

const md = MarkdownIt({
  html: true,
  linkify: true,
})

export const rules = {
  html_block: (node, children, parent, styles)  => {
    const { content } = node

    if (children.length > 0) {
      return <View key={node.key}>{children}</View>
    }

    return <Text key={node.key} style={{ color: '#fd5' }}>{md.render(node.content)}</Text>
  },
}