import { Tabs } from 'expo-router'

const TabsNavigation = () => {
	return (
		<Tabs>
			<Tabs.Screen name="favourites" />
            <Tabs.Screen name="playlists"/>
            <Tabs.Screen name="(sounds)"/>
            <Tabs.Screen name="creators"/>
		</Tabs>
	)
}
export default TabsNavigation
