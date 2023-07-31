import React, { useState } from 'react';
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import TodoList from './TodoList';
import { BrowserRouter } from "react-router-dom";
import FirstPage from './FirstPage';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage/>} />
          <Route path='/test' element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
