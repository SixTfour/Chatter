import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';

export const lightStyle = StyleSheet.create({
	container: {
	  	flex: 1,
		color: colors.black,
	  	backgroundColor: colors.white
	}
});

export const darkStyle = StyleSheet.create({
	container: {
	  	flex: 1,
		color: colors.white,
	  	backgroundColor: colors.darkTwitchPurple
	}
});