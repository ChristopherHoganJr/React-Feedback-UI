import React, {useState} from 'react';

import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

// Pages
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'

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

	return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
              
            </Route>

            <Route path='/about' element={<AboutPage/>} />
            
          </Routes>

          <AboutIconLink />
        </div>
        

      </Router>
    </FeedbackProvider>
	);
}

export default App;
