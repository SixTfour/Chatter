import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

export class Channel extends React.Component {
	constructor() {
		this.calculateActivity = this.calculateActivity.bind(this)
	}

	calculateActivity(channel) {
		const { messages } = channel;
		const numOfMessages = messages.length;

		if(numOfMessages > 30) {
			return "Very Active";
		} else if(numOfMessages > 15) {
			return "Active";
		} else if(numOfMessages > 10) {
			return "Chill";
		} else {
			return "Quiet";
		}
	}

	render() {
		const channel = this.props;
		return  (
			<TouchableOpacity>
				<Image source={ channel.image }></Image>
				<Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />
				<Text>{ channel.viewers }</Text>
				<Text>{ this.calculateActivity(channel) }</Text>
			</TouchableOpacity>
		)
	}
}