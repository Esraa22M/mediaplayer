import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const tabsConfig = [
  {
    name: 'favourites',
    title: 'Top Picks',
    icon: (color) => <Entypo name="heart" size={20} color={color} />,
  },
  {
    name: 'playlists',
    title: 'Collections',
    icon: (color) => (
      <MaterialIcons name="playlist-play" size={28} color={color} />
    ),
  },
  {
    name: '(sounds)',
    title: 'Sounds',
    icon: (color) => (
      <EvilIcons name="sc-soundcloud" size={28} color={color} />
    ),
  },
  {
    name: 'creators',
    title: 'Crafters',
    icon: (color) => <FontAwesome5 name="users" size={20} color={color} />,
  },
]

export default tabsConfig