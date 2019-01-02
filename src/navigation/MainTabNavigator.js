import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../components/Singletons/Home';
import Chat from '../components/Singletons/Chat';
import Settings from '../components/Singletons/Settings';
import TabBarIcon from '../components/TabBarIcon';
import { lightStyle, darkStyle } from '../styles/MainTabNavigator';
import colors from '../constants/Colors';
import store from "../store";

const HomeStack = createStackNavigator({ Home });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={ focused }
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

export default createBottomTabNavigator({ HomeStack, ChatStack, SettingsStack },
  {
    tabBarOptions: {
      activeTintColor: colors.tabIconSelected,
      inactiveTintColor: colors.tabIconDefault
    }
  }
);