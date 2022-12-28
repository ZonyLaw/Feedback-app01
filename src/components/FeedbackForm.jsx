import Card from "./shared/card"
import { useState } from "react"
import Button from "./Button";
import RatingSelect from "./RatingSelect";



function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');


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
           
            handleAdd(newFeedback);
            setText('');
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
