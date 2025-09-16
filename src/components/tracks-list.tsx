import { FlatList, FlatListProps, View } from 'react-native';
import { Dimensions } from 'react-native';
import library from '@/assets/data/library.json'
import { TrackListItem } from './track-list-item';
import {type Track } from './track-list-item';
import { screenPadding } from '@/constants/tokens';
import { utilsStyles } from '@/styles';
type TraksListProps = Partial<FlatListProps<any>>;
const { width} = Dimensions.get("window");
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
const ItemDivider = () => {
	
	return <View style={{...utilsStyles.itemSeparator, marginVertical:20 , marginLeft:0.2*width}} />}
export const TracksListComponent = ({ ...flatlistProps }: TraksListProps) => {
	const [searchTerm]= useNavigationSearch({searchBarOptions:{placeholder:"Cue the track"}})
	return (
	
			<FlatList
				data={library}
				ItemSeparatorComponent={ItemDivider}
				ListFooterComponent={ItemDivider}
				style={{paddingHorizontal:screenPadding.horzintal}}
				renderItem={({ item: track }) => {
					return <TrackListItem track={{ ...track, title: track?.title, image: track?.artwork }} />
				}}
				{...flatlistProps}
			/>
	
	)
}
