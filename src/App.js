
import {useState} from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feebackData';


function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    console.log('App', id);
  }

  return (
    <>
      <Header />
        <div>
          <FeedbackList 
            feedbacks={feedbacks}
            handleDelete={deleteFeedback}
            
          />
        </div>
    
    </>
     
  );
}

export default App;
