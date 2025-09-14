import { View } from 'react-native'
import { Stack } from 'expo-router'
import { defaultStyles } from '@/styles'
import { StackScreenWithSearchBar } from '@/constants/layout'
const SoundsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerTitle: 'Sounds', ...StackScreenWithSearchBar }}
				/>
			</Stack>
		</View>
	)
}
export default SoundsScreenLayout
