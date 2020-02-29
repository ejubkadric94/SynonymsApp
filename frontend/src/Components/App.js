import React from 'react';
import './App.css';
import Divider from './Divider/Divider';
import AddSynonimsContainer from './AddSynonimsContainer/AddSynonimsContainer';
import SearchSynonimsContainer from './SearchSynonimsContainer/SearchSynonimsContainer';

function App() {
  return (
    <div className="App">
      <AddSynonimsContainer />
      <Divider />
      <SearchSynonimsContainer />
    </div>
  );
}

export default App;
