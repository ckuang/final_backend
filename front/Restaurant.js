import React from 'react';
import { Link } from 'react-router';

const Restaurant = React.createClass({
	render() {
		return(
			<div>
				<h3><Link to={`/${this.props.restaurantId}`}>{this.props.restaurantName}</Link></h3>
			</div>
		)
	}
});

export default Restaurant;