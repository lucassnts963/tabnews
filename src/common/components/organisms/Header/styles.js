import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: THEME.SIZE.SPACE.PADDING.SCREEN_TOP + THEME.SIZE.SPACE.PADDING.MD,
    paddingBottom: THEME.SIZE.SPACE.PADDING.SM,
    paddingHorizontal: THEME.SIZE.SPACE.PADDING.MD,
    backgroundColor: THEME.COLORS.SECONDARY
  },
  rightContainer: {
    flexDirection: 'row',
    gap: THEME.SIZE.SPACE.GAP.MD
  },
  leftContainer: {

  },
  image: {
    width: 32,
    height: 32
  }
})