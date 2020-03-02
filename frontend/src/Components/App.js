import React from 'react';
import './App.css';
import Divider from './Divider/Divider';
import AddSynonymsContainer from './AddSynonymsContainer/AddSynonymsContainer';
import SearchSynonymsContainer from './SearchSynonymsContainer/SearchSynonymsContainer';
import ResetStorageButton from './ResetStorageButton/ResetStorageButton';

function App() {
  return (
    <div className="App">
      <AddSynonymsContainer />
      <Divider />
      <SearchSynonymsContainer />
      <ResetStorageButton />
    </div>
  );
}

export default App;
