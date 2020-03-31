import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './components/issueList';
import Issue from './components/issue';

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={IssueList}/>
        <Route path='/issue/:issue_number?' component={Issue}/>
      </Router>
    </div>
  );
}

export default App;
