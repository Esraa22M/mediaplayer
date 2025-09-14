import { View } from 'react-native'
import { Stack } from 'expo-router'
import { defaultStyles } from '@/styles';
import { StackScreenWithSearchBar } from '@/constants/layout';

const PlaylistsScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen  name='index' options={{headerTitle:"playlists",...StackScreenWithSearchBar }}/>
            </Stack>
        </View>
    )
}
export default PlaylistsScreenLayout ;