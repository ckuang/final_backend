import React from 'react';

const Reviews = React.createClass({
	render() {
		return(
			<div>
				<div>----------</div>
				<br />
				<div>DATE: {this.props.reviewDate}</div>
				
				<div>RATING: {this.props.reviewRating}</div>
				
				<div>DESCRIPTION: {this.props.reviewDescription}</div>
				<br />
				<div>----------</div>

			</div>
		)
	}
});

export default Reviews;