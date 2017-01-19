//npm modules
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'


//Components
import RestaurantsList from './components/RestaurantsList';
import Restaurant from './components/Restaurant';


const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Restaurant yalp</h1>
                {this.props.children}
            </div>
        )
    }
});

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={RestaurantsList}/>
            <Route path="restaurants/:id" component={Restaurant}/>
        </Route>
    </Router>
    ,
    document.getElementById('root')
);

