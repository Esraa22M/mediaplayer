import { View } from 'react-native'
import { Stack } from 'expo-router'
import { defaultStyles } from '@/styles'
const PlaylistsScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen  name='index' options={{headerTitle:"playlists"}}/>
            </Stack>
        </View>
    )
}
export default PlaylistsScreenLayout ;