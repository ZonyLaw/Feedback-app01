import {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedbacks, setFeedbacks] = useState([
        {
            id: 1,
            text: 'This item is form context',
            rating: 10,
        }
    ])

    const[feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbacks([newFeedback, ...feedbacks]);
        }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
          setFeedbacks(feedbacks.filter((item)=>
            item.id!==id
          ))
        }
      }

      //edit item after clicking the edit button
      const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
      }
    
      const updateFeedback = (id, updItem) => {          
      
        setFeedbacks(     
            feedbacks.map((item) => (item.id === id ? { ...item, ...updItem}: item)))

        // reset the state
        setFeedbackEdit({
            item: {},
            edit: false
        })
    
      }

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback, 
                updateFeedback

            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext