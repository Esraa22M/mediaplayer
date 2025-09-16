import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

import tabsConfig from '@/config/tabs-config'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: styles.tabLabel,
				headerShown: false,
				tabBarStyle: styles.tabBar,
				tabBarBackground: () => <BlurView intensity={40} style={styles.blurBg}></BlurView>,
			}}
		>
			{tabsConfig.map(({ name, title, icon }) => (
				<Tabs.Screen
					name={name}
					options={{
						title: title,
						tabBarIcon: ({ color }) => icon(color),
					}}
					key={name}
				/>
			))}
		</Tabs>
	)
}
const styles = StyleSheet.create({
	tabLabel: {
		fontSize: fontSize.xs,
		fontWeight: '500',
	},
	tabBar: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderTopWidth: 0,
		paddingTop: 8,
		shadowOffset: { width: 0, height: -3 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 5, // Android
	},
	blurBg: {
		...StyleSheet.absoluteFillObject,
		overflow: 'hidden',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
})
export default TabsNavigation
