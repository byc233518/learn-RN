import React from 'react'

class ProfileScreen extends React.Component {
	static navigationOptions = {
		title: 'ProfileScreen',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Button
				title="Go to Jane's profile"
				onPress={() =>
					navigate('Profile', { name: 'Jane' })
				}
			></Button>
		);
	}
}