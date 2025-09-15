import { defaultStyles } from '@/styles'
import { View, Text } from 'react-native';
import { TracksListComponent } from '@/components/tracks-list';
import { useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

const SoundsScreen = () => {
	const tabBareHeight = useBottomTabBarHeight();
	return (
		<View style={defaultStyles.container}>
			<TracksListComponent contentContainerStyle={{paddingBottom:tabBareHeight}} />
		</View>
	)
}
export default SoundsScreen
