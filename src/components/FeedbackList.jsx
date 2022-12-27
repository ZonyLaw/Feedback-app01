import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

function FeedbackList({ feedbacks, handleDelete }) {
    console.log(feedbacks)
    if (!feedbacks || feedbacks.length ===0 )
    {
        <p>No Feedback</p>
    }


  return (
    <div className='feedback-list'>
      {feedbacks.map((feedback) => (
        <FeedbackItem 
            key = {feedback.id}
            item= {feedback}
            handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,

    })
  )
}

export default FeedbackList;
