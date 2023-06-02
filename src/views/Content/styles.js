import { StyleSheet } from "react-native";

import { THEME } from '../../common/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingTop: THEME.SIZE.SPACE.PADDING.SCREEN_TOP,
    paddingHorizontal: THEME.SIZE.SPACE.PADDING.MD
  },
  heading: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.SIZE.TEXT.HEADING - 5
  },
  containerHeader: {
    padding: THEME.SIZE.SPACE.PADDING.MD,
  },
  body: {
    color: THEME.COLORS.TEXT
  },
  containerComment: {
    gap: THEME.SIZE.SPACE.GAP.SM
  }
})