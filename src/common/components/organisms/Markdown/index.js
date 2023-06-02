import { View, Text, useWindowDimensions } from 'react-native';
import MarkdownRender, { MarkdownIt } from '@ronradtke/react-native-markdown-display';

import { useContent } from '../../../hooks/useContent';

import { LoadingView } from '../../../../views/Loading'
import { THEME } from '../../../styles/theme';
import { rules } from './plugin';


const md = MarkdownIt({
  html: true,
  linkify: true,
})

export function Markdown({ data }) {
  const { width } = useWindowDimensions();
  const { content } = useContent(data)



  if (!content.body) {
    return <LoadingView />
  }


  return (
   <MarkdownRender
    rules={rules}
    style={{
      body: { color: THEME.COLORS.TEXT },
      code_inline: {
        backgroundColor: THEME.COLORS.SECONDARY,
        color: THEME.COLORS.DANGER,
        borderRadius: THEME.SIZE.ROUNDED.MD,
        padding: 2,
      },
      code_block: {
        backgroundColor: THEME.COLORS.SECONDARY,
      },
      fence: {
        backgroundColor: THEME.COLORS.SECONDARY,
      },
      link: {
        color: THEME.COLORS.LINK
      },
    }}
    markdownit={md}
  >
    {content.body}
   </MarkdownRender>
  )
}