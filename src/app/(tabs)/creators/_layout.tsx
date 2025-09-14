import { View } from 'react-native'
import { Stack } from 'expo-router'
import { defaultStyles } from '@/styles'
import { StackScreenWithSearchBar } from '@/constants/layout'
const CreatorsScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen  name='index' options={{headerTitle:"Creators",...StackScreenWithSearchBar }}/>
            </Stack>
        </View>
    )
}
export default CreatorsScreenLayout ;