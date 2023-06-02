import { StyleSheet } from "react-native";
import { THEME } from "../../common/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    gap: THEME.SIZE.SPACE.GAP.SM
  },
  heading: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.SIZE.TEXT.HEADING,
    marginBottom: 15,
  },
  input: {
    fontSize: THEME.SIZE.TEXT.BODY,
    width: '100%',
    backgroundColor: THEME.COLORS.SECONDARY,
    padding: THEME.SIZE.SPACE.PADDING.SM,
    borderRadius: THEME.SIZE.ROUNDED.SM,
    color: THEME.COLORS.TEXT
  },
  button: {
    backgroundColor: THEME.COLORS.SUCCESS,
    width: "100%",
    padding: THEME.SIZE.SPACE.PADDING.MD,
    borderRadius: THEME.SIZE.ROUNDED.SM,
    justifyContent: 'center',
    alignItems: "center",
  },
  textButton: {
    textTransform: 'uppercase',
    color: THEME.COLORS.TEXT,
  }
});