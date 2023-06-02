import { StyleSheet } from "react-native";

import { THEME } from '../../common/styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: THEME.SIZE.SPACE.PADDING.MD,
    backgroundColor: THEME.COLORS.BACKGROUND,
    width: '100%',
    paddingHorizontal: THEME.SIZE.SPACE.PADDING.MD
  },
});