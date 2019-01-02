import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import styles from '../styles/MainTabNavigator';
import colors from '../constants/Colors';

const HomeStack = createStackNavigator({ Home });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      style={ styles.tabBarIcon }
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ChatStack = createStackNavigator({ Chat });

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({ Settings });

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

export default createTabNavigator({ HomeStack, ChatStack, SettingsStack },
  {
    tabBarOptions: {
      style: styles.tabBar,
      activeTintColor: colors.tabIconSelected,
      inactiveTintColor: colors.tabIconDefault
    }
  }
);