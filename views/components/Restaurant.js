import React from 'react';
import $ from 'jquery';

const Restaurant = React.createClass({
    getInitialState(){
        return {
            restaurantInfo: null, Reviews:[] ,rating: '', description: '', date: ''
        }
    },
    componentDidMount(){
        $.ajax({
            url: '/api/restaurants/'+ this.props.params.id,
            type: 'GET',
        })
            .done(data =>{
                this.setState({Reviews: data.Reviews});
                this.setState({restaurantInfo: data});
            });

    },
    inputChange(eventType, event){
        event.preventDefault();
        this.setState({[eventType]: event.target.value})
    },
    submitInfo(){
        $.ajax({
            url: '/api/review/',
            type: 'POST',
            data: {
                rating: this.state.rating,
                description: this.state.description,
                date: this.state.date,
                RestaurantId: this.props.params.id
            }
        })
            .done(response => {
                console.log('response from api/review',response);
                let newInfo =  response;
                this.setState({restaurantInfo: newInfo})
            })
    },
    render: function () {
        console.log('reviews:',this.state.Reviews);
        return (
            <div>
                {this.state.restaurantInfo ?
                    <div>
                        <h2>Restaurant Name: {this.state.restaurantInfo.name}</h2>
                        <p>Neighborhood: {this.state.restaurantInfo.neighborhood}</p>
                        <p>Cuisine: {this.state.restaurantInfo.cuisine}</p>
                        <p>Address: {this.state.restaurantInfo.address}</p>
                        <p>Cost: {this.state.restaurantInfo.cost}</p>
                    </div> :
                    <p>no restaurants available</p>
                }
                <ol>
                    <p>reviews:</p>
                    {this.state.Reviews?
                        this.state.Reviews.map((review, index) =>
                            <li key={index}>
                                <br/>
                                Rating: {review.rating}
                                <br/>
                                Description: {review.description}
                                <br/>
                                Date: {review.date}
                            </li>
                        ) :
                        <p>no reviews</p>
                    }
                </ol>
                <form onSubmit={this.submitInfo}>
                    <p>Add new review:</p>
                    <select onChange={this.inputChange.bind(this, 'rating')}>
                        <option value="1">*</option>
                        <option value="2">**</option>
                        <option value="3">***</option>
                        <option value="4">****</option>
                        <option value="5">*****</option>
                    </select>
                    <br/>
                    <textarea type='text' placeholder='Describe your experience' onChange={this.inputChange.bind(this, 'description')}
                           value={this.state.description}/>
                    <br/>
                    <input type='date' placeholder='date' onChange={this.inputChange.bind(this, 'date')}
                           value={this.state.date}/>
                    <br/>
                    <input type='submit' value='Submit Review'/>
                </form>
            </div>
        )
    }
});

export default Restaurant;