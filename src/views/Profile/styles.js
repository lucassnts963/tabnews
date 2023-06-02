import { StyleSheet } from "react-native";

import {THEME} from '../../common/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingTop: THEME.SIZE.SPACE.PADDING.SCREEN_TOP,
  },
  containerHeader: {
    padding: THEME.SIZE.SPACE.PADDING.MD,
  },
  containerProfile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.SIZE.TEXT.HEADING,
    marginTop: THEME.SIZE.SPACE.PADDING.MD
  },
  email: {
    color: THEME.COLORS.TEXT_SECONDARY,
    fontSize: THEME.SIZE.TEXT.SMALL
  },
  button: {
    marginTop: THEME.SIZE.SPACE.PADDING.MD,
    flexDirection: 'row',
    gap: THEME.SIZE.SPACE.GAP.MD,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: THEME.COLORS.DANGER,
  }
})