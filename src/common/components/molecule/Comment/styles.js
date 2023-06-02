import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.SECONDARY,
    gap: THEME.SIZE.SPACE.GAP.SM,
    borderRadius: THEME.SIZE.ROUNDED.SM,
    padding: THEME.SIZE.SPACE.PADDING.MD,
  },
  containerLeft: {
    alignItems: 'center'
  },
  containerRight: {},
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: THEME.SIZE.SPACE.GAP.SM,
  },
  containerMarkdown: {
    paddingRight: THEME.SIZE.SPACE.PADDING.LG + 5
  },
  text: {
    color: THEME.COLORS.TEXT
  },
  badge: {
    color: THEME.COLORS.TEXT,
    padding: THEME.SIZE.SPACE.PADDING.SM - 2,
    backgroundColor: THEME.COLORS.BACKGROUND,
    borderRadius: THEME.SIZE.ROUNDED.SM
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    borderColor: THEME.COLORS.TEXT_SECONDARY,
    borderWidth: 1,
    padding: THEME.SIZE.SPACE.PADDING.MD,
    borderRadius: THEME.SIZE.ROUNDED.MD
  },
  buttonText: {
    color: THEME.COLORS.TEXT_SECONDARY
  }
})