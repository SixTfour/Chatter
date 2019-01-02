import React from 'react';
import { Switch, View, Text, ScrollView } from 'react-native';
import colors from '../../../constants/Colors';
import { connect } from "react-redux";
import { setDarkMode } from '../../../store/actions/thunks';
import { lightStyle, darkStyle } from "../../../styles/Home";

function mapStateToProps(state) {
  return {
    darkModeEnabled: state.settings["Dark Mode"]
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    toggleDarkMode: (value) => { dispatch(setDarkMode(value)) }
  })
}

export class Settings extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <ScrollView style={this.props.darkModeEnabled ? darkStyle.container : lightStyle.container}>
        <View>
          <Text>Dark Mode</Text>
          <Switch
            trackColor={{ true: colors.twitchPurple }}
            thumbColor={ this.props.darkModeEnabled ? colors.white : colors.twitchPurple }
            onValueChange={ this.props.toggleDarkMode }
            value={ this.props.darkModeEnabled }
          />
        </View>
      </ScrollView>
      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);