
import './App.css';

import Search from './Search.js';
import Pagination from './Pagination.js';
import Stories from './Stories.js';
import ReducerImplement from './ReducerImplement';


// import {useContext} from 'react';
// import {AppContext} from './context';
import {useGlobalContext} from './context';

function App() {

  // const data = useContext(AppContext);
  const data = useGlobalContext();
  return (
    <>
      <div className="">
        Welcome {data}
      </div>
      <Search/>
      <Pagination/>
      <Stories/>
      
      <ReducerImplement/>

      
    </>
  );
}

export default App;
