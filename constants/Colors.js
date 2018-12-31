import { darkModeEnabled } from "../settings";
const tintColor = '#d4c9ea';
const darkerTintColor = '#8c6dc6';
const twitchPurple = '#6441A5';
const white = '#fff';

export default {
  twitchPurple,
  white,
  tintColor,
  textColor: {
    primary: darkModeEnabled ? white : twitchPurple,
    secondary: tintColor
  },
  background: darkModeEnabled ? twitchPurple : white,
  tabIconDefault: darkModeEnabled ? darkerTintColor : tintColor,
  tabIconSelected: darkModeEnabled ? tintColor : darkerTintColor,
  tabBarText: darkModeEnabled ? tintColor : darkerTintColor,
  tabBar: twitchPurple,
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff'
};
