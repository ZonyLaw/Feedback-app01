import React from 'react';
import FeedbackItem from './FeedbackItem';
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/spinner';

function FeedbackList() {
    const {feedbacks, isLoading} = useContext(FeedbackContext)
    console.log(feedbacks)
    if ( !isLoading && (!feedbacks || feedbacks.length ===0) )
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
 
  return isLoading ? <Spinner/> : 
    (
      <div className='feedback-list'>
        {feedbacks.map((item) => (
          <FeedbackItem 
              key = {item.id}
              item= {item}
              
          />
        ))}
      </div>
    )
}



export default FeedbackList;
