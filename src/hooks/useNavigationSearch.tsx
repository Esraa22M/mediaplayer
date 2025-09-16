import { SearchBarProps } from 'react-native-screens'
import { useNavigation } from 'expo-router'
import { useLayoutEffect, useState } from 'react'
import { colors } from '@/constants/tokens'

const defaultSearchOptions: SearchBarProps = { tintColor: colors.primary, hideWhenScrolling: false }
export const useNavigationSearch = ({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps
}) => {
	const [searchTerm, setSearchTerm] = useState('')
	const navigation = useNavigation()
	const handleTextChange: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
		setSearchTerm(text)
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOptions,
				...searchBarOptions,
				onChangeText: handleTextChange,
			},
		})
	}, [navigation, searchBarOptions])
	return searchTerm
}
