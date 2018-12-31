import React from 'react';
import { Switch, View, Text, ScrollView } from 'react-native';
import colors from '../../constants/Colors';
import styles from '../../styles';
import { connect } from "react-redux";
import { setDarkMode } from '../../store/actions/thunks';

function mapStateToProps(state) {
  return {
    darkModeEnabled: state.settings["Dark Mode"]
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    setDarkMode: (value) => dispatch(setDarkMode(value))
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
      <ScrollView style={ styles.container }>
        <View>
          <Text>Dark Mode</Text>
          <Switch
            trackColor = {{ true: colors.textColor.primary }}
            thumbColor = { colors.textColor.primary }
            onValueChange={ this.props.setDarkMode }
            value={ this.props.darkModeEnabled }
          />
        </View>
      </ScrollView>
      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);