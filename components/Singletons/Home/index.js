import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from '../../styles/Home';
import { getDarkMode } from '../../store/actions/thunks';
import { connect } from "react-redux";

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
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}


export default connect(null, mapDispatchToProps)(Home);