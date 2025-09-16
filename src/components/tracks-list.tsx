import { FlatList, FlatListProps, View, Dimensions } from 'react-native'

import library from '@/assets/data/library.json'
import { TrackListItem } from './track-list-item'
import { type Track } from './track-list-item'
import { screenPadding } from '@/constants/tokens'
import { utilsStyles } from '@/styles'

const { width } = Dimensions.get('window')

type TraksListProps = Partial<FlatListProps<any>> & { tracks: any[] }
const ItemDivider = () => {
	return (
		<View style={{ ...utilsStyles.itemSeparator, marginVertical: 20, marginLeft: 0.2 * width }} />
	)
}
export const TracksListComponent = ({ tracks, ...flatlistProps }: TraksListProps) => {
	return (
		<FlatList
			data={tracks}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			style={{ paddingHorizontal: screenPadding.horzintal }}
			renderItem={({ item: track }) => {
				return <TrackListItem track={{ ...track, title: track?.title, image: track?.artwork }} />
			}}
			{...flatlistProps}
		/>
	)
}
