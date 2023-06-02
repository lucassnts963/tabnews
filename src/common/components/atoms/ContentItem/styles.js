import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: THEME.SIZE.SPACE.GAP.MD,
    gap: THEME.SIZE.SPACE.GAP.SM
  },
  text: {
    color: THEME.COLORS.TEXT
  },
  containerInfo: {
    flexDirection: 'row',
    gap: THEME.SIZE.SPACE.GAP.SM
  },
  textInfo: {
    color: THEME.COLORS.TEXT_SECONDARY
  }
})