import { colors, fontSize } from '@/constants/tokens'
import { StyleSheet } from 'react-native'
export const defaultStyles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.background },
	text: { fontSize: fontSize.base, color: colors.text },
	
})
export const utilsStyles = StyleSheet.create({
	itemSeparator: { borderColor: colors.textMuted, borderBottomWidth: StyleSheet.hairlineWidth, opacity:0.3 },
})
