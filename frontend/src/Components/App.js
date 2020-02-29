import React from 'react';
import './App.css';
import Divider from './Divider/Divider';
import AddSynonymsContainer from './AddSynonymsContainer/AddSynonymsContainer';
import SearchSynonymsContainer from './SearchSynonymsContainer/SearchSynonymsContainer';

function App() {
  return (
    <div className="App">
      <AddSynonymsContainer />
      <Divider />
      <SearchSynonymsContainer />
    </div>
  );
}

export default App;
