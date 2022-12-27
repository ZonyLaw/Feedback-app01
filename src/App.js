
import {useState} from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feebackData';
import FeedbackStats from './components/FeedbackStats';


function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')){
      setFeedbacks(feedbacks.filter((item)=>
        item.id!==id
      ))

    }
  }

  return (
    <>
      <Header />
        <div className='container'>
        <FeedbackStats feedbacks={feedbacks} />
          <FeedbackList 
            feedbacks={feedbacks}
            handleDelete={deleteFeedback}
            
          />
        </div>
    
    </>
     
  );
}

export default App;
