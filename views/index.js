import React from 'react'
import ReactDOM from 'react-dom'


var Parent = React.createClass({

	render() {
		return (
			<div>
				<h1>Yelp Final!</h1>
			</div>
		)
	}

})

ReactDOM.render(<Parent />, document.getElementById('root'))

