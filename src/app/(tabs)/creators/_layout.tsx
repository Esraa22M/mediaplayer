import { View } from 'react-native'
import { Stack } from 'expo-router'
import { defaultStyles } from '@/styles'
const CreatorsScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen  name='index' options={{headerTitle:"Creators"}}/>
            </Stack>
        </View>
    )
}
export default CreatorsScreenLayout ;