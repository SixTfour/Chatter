import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from "../../styles/Chat";

export default class Chat extends React.Component {
  static navigationOptions = {
    // header: 'Chat',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text>Hi</Text>
        </ScrollView>
      </View>
    );
  }
}
