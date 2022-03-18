import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

// Data
import FeedbackData from './data/FeedbackData';


function App () {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

	return (
		<>
      <Header/>
			<div className='container'>
      
        <FeedbackForm  handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
    </>
	);
}

export default App;