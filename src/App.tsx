import React from 'react';
import './App.css';
import Mui_table from './componets/Mui_table';
import Mui_table_update from './componets/Mui_table_update';
import TodoFilter from './componets/TodoFilter';

function App() {
  return (
    <div className="App">
      {/* <Mui_table/> */}
      {/* <TodoFilter/> */}
      <Mui_table_update/>
    </div>
  );
}
export default App;
