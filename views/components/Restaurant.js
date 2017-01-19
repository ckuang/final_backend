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
                <p>Restaurant :{this.state.name}</p>
                {this.state.restaurantInfo ?
                    <div>
                        <p>name: {this.state.restaurantInfo.name}</p>
                        <p>neighborhood: {this.state.restaurantInfo.neighborhood}</p>
                        <p>cuisine: {this.state.restaurantInfo.cuisine}</p>
                        <p>Address: {this.state.restaurantInfo.address}</p>
                        <p>Cost: {this.state.restaurantInfo.cost}</p>
                    </div> :
                    <p>no information found</p>
                }
                <ol>
                    <p>reviews:</p>
                    {this.state.Reviews?
                        this.state.Reviews.map((review, index) =>
                            <li key={index}>
                                <br/>
                                rating: {review.rating}
                                <br/>
                                description: {review.description}
                                <br/>
                                date: {review.date}
                            </li>
                        ) :
                        <p>no reviews found</p>
                    }
                </ol>
                <form onSubmit={this.submitInfo}>
                    <p>Add new review:</p>
                    <input type='text' placeholder='rating' onChange={this.inputChange.bind(this, 'rating')}
                           value={this.state.rating}/>
                    <br/>
                    <input type='text' placeholder='description' onChange={this.inputChange.bind(this, 'description')}
                           value={this.state.description}/>
                    <br/>
                    <input type='text' placeholder='date' onChange={this.inputChange.bind(this, 'date')}
                           value={this.state.date}/>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
});

export default Restaurant;