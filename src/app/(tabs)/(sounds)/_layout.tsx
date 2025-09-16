import { View } from 'react-native'
import { Stack } from 'expo-router'
import { defaultStyles } from '@/styles'
import { StackScreenWithSearchBar } from '@/constants/layout'
const SoundsScreenLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerTitle: 'Sounds',
					...StackScreenWithSearchBar,
		
				}}
			/>
		</Stack>
	)
}
export default SoundsScreenLayout
