import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';

export const lightStyle = StyleSheet.create({
	tabBar: {
		color: colors.black,
		backgroundColor: colors.white
	}
});

export const darkStyle = StyleSheet.create({
	tabBar: {
		color: colors.white,
		backgroundColor: colors.darkTwitchPurple
	}
});