import { Track } from '@/components/track-list-item'

export const trackTitleFilter = (title: string) => (track: any) => {
    if (!title ?.trim()) return true;
	return track?.title?.toLocaleLowerCase().includes(title.trim())
}
