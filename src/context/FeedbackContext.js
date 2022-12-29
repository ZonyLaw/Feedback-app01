import {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedbacks, setFeedbacks] = useState([])
    const[feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() =>{
        fetchFeedback()  
     }, [])

     const fetchFeedback = async () => {
        const response = await fetch (`http://localhost:5000/feedback?_sort=id&order=desc`)
        const data = await response.json()
        setFeedbacks(data)
        setIsLoading(false)
     }

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
                isLoading,
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