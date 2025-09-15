import { FlatList } from 'react-native'
import library from '@/assets/data/library.json'
export const TracksListComponent = () => {
	return (
		<FlatList
			data={library}
			renderItem={() => {
				return <></>
			}}
		/>
	)
}
