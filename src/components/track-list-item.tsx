import { TouchableHighlight, View, StyleSheet, Text ,Image} from 'react-native'

import { Dimensions } from 'react-native'
import { resolveUnknownIrackIamgeUrl } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
const { width } = Dimensions.get('window')
export type Track = {
	title: string
	image?: string
	creator?: string
	//   url,
	//     title,
	//     creator,
	//     artwork,
	//     rating
}

export type TrakListItemProps = {
  track: Track
}
export const TrackListItem = ({ track }:TrakListItemProps) => {
	const isActiveTrack = false
	return (
		<TouchableHighlight>
			<View style ={styles.trakItemContainer}>
				<View>
					<Image
						source={{
							uri: track?.image ?? resolveUnknownIrackIamgeUrl,
						}}
						style={{ ...styles.trackImage, opacity: isActiveTrack ? 0.6 : 1 }}
					/>
				</View>
				{/* track title + creator */}
				<View style={{ width: width }}>
					<Text
						numberOfLines={1}
						style={{ ...styles.trackTitle, color: isActiveTrack ? colors?.primary : colors.text }}
					>
						{track?.title}
					</Text>
					{track?.creator && (
						<Text numberOfLines={1} style={{ ...styles?.trackCreator }}>
							{track?.creator}
						</Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	)
}
const styles = StyleSheet.create({
	trackImage: { borderRadius: 8, width: 0.2 * width, height: 0.2 * width },
	trackTitle: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: 600,
		maxWidth: width * 0.9,
	},
	trackCreator: { ...defaultStyles.text, color: colors?.textMuted, fontSize: 14, marginTop: 4 },
	trakItemContainer:{flexDirection:"row", columnGap:14 , alignItems:"center", paddingRight:20}
})
