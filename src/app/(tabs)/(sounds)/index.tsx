import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TracksListComponent } from '@/components/tracks-list'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { trackTitleFilter } from '@/helpers/filter'
import library from '@/assets/data/library.json'
const SoundsScreen = () => {
	const tabBarHeight = useBottomTabBarHeight()
	const headerHeight = useHeaderHeight()
	const { searchTerm, setSearchTerm } = useNavigationSearch({
		searchBarOptions: { placeholder: 'Cue the track' ,},
	})
	const filteredTracks = useMemo(() => {
		if (!searchTerm) return library
		return library.filter(trackTitleFilter(searchTerm))
	}, [searchTerm])
	return (
		<SafeAreaView
			style={[defaultStyles.container, { paddingBottom: tabBarHeight, flex: 1 }]}
			edges={['top', 'left', 'right']}
		>
			
			
			<TracksListComponent
				tracks={filteredTracks}
				contentContainerStyle={{ paddingBottom: tabBarHeight, paddingTop: headerHeight }}
			/>
		</SafeAreaView>
	)
}
export default SoundsScreen
