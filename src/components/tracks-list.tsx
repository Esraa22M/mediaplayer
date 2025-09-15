import { FlatList, FlatListProps, ScrollView } from 'react-native'
import library from '@/assets/data/library.json'
import { TrackListItem } from './track-list-item';
import {type Track } from './track-list-item';
type TraksListProps = Partial<FlatListProps<any>>
export const TracksListComponent = ({ ...flatlistProps }: TraksListProps) => {
	return (
	
			<FlatList
				data={library}
				renderItem={({ item: track }) => {
					return <TrackListItem track={{ ...track, title: track?.title, image: track?.artwork }} />
				}}
				{...flatlistProps}
			/>
	
	)
}
