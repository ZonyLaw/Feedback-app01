import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({ feedbacks, handleDelete }) {
    console.log(feedbacks)
    if (!feedbacks || feedbacks.length ===0 )
    {
        <p>No Feedback</p>
    }


  // return (
  //   <div className='feedback-list'>
  //     <AnimatePresence>
  //       {feedbacks.map((feedback) => (
  //         <motion.div
  //           key={feedback.id}
  //           initial={{opacity: 0}}
  //           animate={{opacity: 1}}
  //           eixt={{opacity: 0}}
  //         >
  //           <FeedbackItem 
  //               key = {feedback.id}
  //               item= {feedback}
  //               handleDelete={handleDelete}
  //           />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // )
 
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
