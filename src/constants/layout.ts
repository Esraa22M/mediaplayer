import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { colors } from '@/constants/tokens';
const iosSetup = {headerLargeStyle: {backgroundColor:colors.background,},
    headerLargeTitle: true,
    headerLargeTitleStyle:{color:colors.text},}
export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	...(Platform.OS==='ios'?iosSetup:{}),
    headerStyle: {backgroundColor:colors.background,},
	
        headerTitleStyle:{color:colors.text},
    headerTintColor:colors.text,
    headerTransparent:true,
    headerShadowVisible:false
}
