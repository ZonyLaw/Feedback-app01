import { FaTimes } from 'react-icons/fa'
import Card from "./shared/card"
import PropTypes from 'prop-types'

function FeedbackItem( {item, handleDelete} ) {
     

     return (
        <Card reverse={true}>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

// FeedbackItem.propTypes = {
//     items: PropTypes.object.isRequired,

// }

export default FeedbackItem
