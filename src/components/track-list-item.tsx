import { TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
export type TrakListItemProps = {};
export const TrackListItem = () => {
	return (
		<TouchableHighlight>
			<View><FastImage source={{}}/></View>
		</TouchableHighlight>
	)
}
