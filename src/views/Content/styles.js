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
    textAlign: "center",
    fontSize: THEME.SIZE.TEXT.HEADING
  },
  containerHeader: {
    padding: THEME.SIZE.SPACE.PADDING.MD,
  },
  body: {
    color: THEME.COLORS.TEXT
  }
})