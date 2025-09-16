import { defaultStyles } from '@/styles'
import { View, Text } from 'react-native'
import { TracksListComponent } from '@/components/tracks-list'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
const SoundsScreen = () => {
	const tabBarHeight = useBottomTabBarHeight()
	const headerHeight = useHeaderHeight()

	return (
		<SafeAreaView
			style={[defaultStyles.container, { paddingBottom: tabBarHeight, flex: 1 }]}
			edges={['top', 'left', 'right']}
		>
			<TracksListComponent
				contentContainerStyle={{ paddingBottom: tabBarHeight, paddingTop: headerHeight }}
			/>
		</SafeAreaView>
	)
}
export default SoundsScreen
