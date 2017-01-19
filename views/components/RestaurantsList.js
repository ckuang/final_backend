import React from 'react';
import $ from 'jquery';

const RestaurantsList = React.createClass({
    getInitialState(){
        return {
            restaurantList: null, name: '', neighborhood: '', cuisine: '',address:'',cost:''
        }
    },
    componentDidMount(){
        $.ajax({
            url: '/api/restaurants/',
            type: 'GET',
        })
            .done((data) => this.setState({restaurantList: data}))
    },
    inputChange(eventType, event){
        event.preventDefault();
        this.setState({[eventType]: event.target.value})
    },
    submitInfo(){
        event.preventDefault();
        $.ajax({
            url: '/api/restaurants/',
            type: 'POST',
            data: {
                name: this.state.name,
                neighborhood: this.state.neighborhood,
                cuisine: this.state.cuisine,
                address: this.state.address,
                cost: this.state.cost
            }
        })
            .done(response => {
                let newInfo = [...this.state.restaurantList, response];
                this.setState({restaurantList: newInfo})
            })
    },
    redirect(id){
        this.props.router.push('/restaurants/'+id)
    },
    render(){
        console.log('from restaurantList:', this.state.restaurantList);
        return (
            <div>
                <h3>Restaurant List</h3>
                <ol>
                    {
                        this.state.restaurantList ?
                            this.state.restaurantList.map((restaurant, index) => (
                                        <li key={index} onClick={this.redirect.bind(this,restaurant.id)}>
                                            Name: {restaurant.name}
                                            <br/>
                                            neighborhood: {restaurant.neighborhood}
                                            <br/>
                                            cuisine: {restaurant.cuisine}
                                            <br/>
                                            address: {restaurant.address}
                                            <br/>
                                            cost: {restaurant.cost}
                                        </li>
                                )
                            ) :
                            <p>no restaurantList found</p>
                    }
                </ol>
                <form onSubmit={this.submitInfo}>
                    <input type='text' placeholder='name' onChange={this.inputChange.bind(this, 'name')}
                           value={this.state.name}/>
                    <br/>
                    <input type='text' placeholder='neighborhood' onChange={this.inputChange.bind(this, 'neighborhood')}
                           value={this.state.neighborhood}/>
                    <br/>
                    <input type='text' placeholder='cuisine' onChange={this.inputChange.bind(this, 'cuisine')}
                           value={this.state.cuisine}/>
                    <br/>
                    <input type='text' placeholder='address' onChange={this.inputChange.bind(this, 'address')}
                           value={this.state.address}/>
                    <br/>
                    <input type='text' placeholder='cost' onChange={this.inputChange.bind(this, 'cost')}
                           value={this.state.cost}/>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>

                {this.props.children}
            </div>
        )
    }
})

export default RestaurantsList;