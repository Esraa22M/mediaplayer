import { SearchBarProps } from 'react-native-screens'
import { useNavigation } from 'expo-router'
import { useLayoutEffect, useState , useEffect} from 'react'
import { colors } from '@/constants/tokens'

const defaultSearchOptions: SearchBarProps = { tintColor: colors.primary, hideWhenScrolling: false }
export const useNavigationSearch = ({
	searchBarOptions,
	debounceDelay = 500,
}: {
	searchBarOptions?: SearchBarProps
	debounceDelay?: number
}) => {
	const [searchTerm, setSearchTerm] = useState('')
	const navigation = useNavigation()
	const [debouncedTerm, setDebouncedTerm] = useState('')
	const handleTextChange: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
		setSearchTerm(text)
	}
	useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm)
        }, debounceDelay);
        return ()=>{clearTimeout(handler)}
	}, [searchTerm, debounceDelay])
	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOptions,
				...searchBarOptions,
				onChangeText: handleTextChange,
			},
		})
	}, [navigation, searchBarOptions])
	return { searchTerm,debouncedTerm, setSearchTerm }
}
