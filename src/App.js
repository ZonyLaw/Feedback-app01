import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/aboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact 
              path='/'
              element={
                <div>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </div>}
            ></Route>
              <Route path='/about' element={<AboutPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
