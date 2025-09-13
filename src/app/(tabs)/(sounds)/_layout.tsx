import { View } from 'react-native'
import { Stack } from 'expo-router'
import { defaultStyles } from '@/styles'
const SoundsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen  name='index' options={{headerTitle:"Sounds"}}/>
			</Stack>
		</View>
	)
}
export default SoundsScreenLayout;