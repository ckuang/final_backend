import {connect} from 'react-redux';
import NewReview from 'NewReview';

const mapStateToProps = state => ({
  date: state.formReducer.date,
  rating: state.formReducer.rating,
  description: state.formReducer.description
})

const NewReviewContainer = connect(mapStateToProps)(NewReview);

export default NewReviewContainer;