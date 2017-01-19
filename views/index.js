import React from 'react'
import ReactDOM from 'react-dom'

// import SchoolComponent from '../components/schoolCom.jsx'
// import StudentComponent from '../components/studentCom.jsx'

var App = React.createClass({

	render() {
		return (
			<div>
				<h1>Yelp!</h1>
			</div>
		)
	}

})

ReactDOM.render(<App />, document.getElementById('root'))

