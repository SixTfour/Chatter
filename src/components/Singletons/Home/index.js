import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { getDarkMode } from '../../../store/actions/thunks';
import { connect } from "react-redux";
import { lightStyle, darkStyle } from "../../../styles/Home";

function mapStateToProps(state) {
  return {
    darkModeEnabled: state.settings["Dark Mode"]
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    getDarkMode: () => dispatch(getDarkMode())
  })
}

export class Home extends React.Component {
  static navigationOptions = {
    // header: TopTabNavigator,
  };

  componentDidMount() {
    this.props.getDarkMode();
  };

  render() {    
    return (
      <View style={this.props.darkModeEnabled ? darkStyle.container : lightStyle.container}>
        <ScrollView style={this.props.darkModeEnabled ? darkStyle.container : lightStyle.container}
          contentContainerStyle={this.props.darkModeEnabled ? darkStyle.contentContainer : lightStyle.contentContainer}>
          <Text>Following</Text>

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={this.props.darkModeEnabled ? darkStyle.developmentModeText : lightStyle.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={this.props.darkModeEnabled ? darkStyle.developmentModeText : lightStyle.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);