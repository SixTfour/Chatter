import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from "react-redux";
import { lightStyle, darkStyle } from "../../../styles/Chat";

function mapStateToProps(state) {
  return {
    darkModeEnabled: state.settings["Dark Mode"]
  }
}

export class Chat extends React.Component {
  static navigationOptions = {
    // header: 'Chat',
  };

  render() {
    return (
      <View style={this.props.darkModeEnabled ? darkStyle.container : lightStyle.container}>
        <ScrollView style={this.props.darkModeEnabled ? darkStyle.container : lightStyle.container}>
          <Text>Hi</Text>
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Chat);