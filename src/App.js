import React, { useState } from 'react';
import './App.css';
import PageSelect from './Components/PageSelect';
import AllPages from './Components/AllPages';
import DoneButton from './Components/DoneButton';

function App() {
  const [allSelected, setAllSelected] = useState(false);
  const [pageSelections, setPageSelections] = useState([false, false, false, false]);

  const handleAllPagesChange = () => {
    const newAllSelected = !allSelected;
    setAllSelected(newAllSelected);
    setPageSelections(pageSelections.map(() => newAllSelected));
  };

  const handlePageChange = (index) => {
    const newPageSelections = [...pageSelections];
    newPageSelections[index] = !newPageSelections[index];
    setPageSelections(newPageSelections);
    if (newPageSelections.every((selected) => selected)) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  };

  return (
    <div className="App">
      <div className='main-cont'>
        <AllPages 
          allSelected={allSelected}
          onAllPagesChange={handleAllPagesChange} 
        />
        <div className='separator'></div>
        <PageSelect 
          pageSelections={pageSelections}
          onPageChange={handlePageChange} 
        />
        <div className='separator'></div>
        <DoneButton />
      </div>
    </div>
  );
}

export default App;
