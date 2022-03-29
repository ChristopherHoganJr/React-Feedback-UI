import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

// Pages
import AboutPage from './pages/AboutPage'

// Components

import Card from './components/shared/Card';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

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
		<Router>
      <Header/>
			<div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm  handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
          }>
            
          </Route>

          <Route path='/about' element={<AboutPage/>} />
          
        </Routes>

        <AboutIconLink />
			</div>
      

    </Router>
	);
}

export default App;
