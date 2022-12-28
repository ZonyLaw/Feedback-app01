import Card from "./shared/card"
import { useState, useEffect } from "react"
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);
    
    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])
    

    const handleChange = (event) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length<10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        // console.log(text);
        setText(event.target.value);
        // console.log("after", text)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
           
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else {
                addFeedback(newFeedback)
            }
            console.log('out of if statement')
            setBtnDisabled(true) // 👈  add this line to reset disabled
            setRating(10) 
            setText('')
        }
    }


  return (
      <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input onChange={handleChange} type='text' placeholder='Write a review'
                    value={text}
                />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>

            </div>
            {message && <div className='message'>{message}</div>}
        </form>
      </Card>
    
  )
}

export default FeedbackForm
