import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import GetAllFaculty from './pages/faculties/GetAllFaculty';
import DetailFaculty from './pages/faculties/DetailFaculty';
import AddFaculty from './pages/faculties/AddFaculty';
import EditFaculty from './pages/faculties/EditFaculty';
import GetAllStudnet from './pages/students/GetAllStudents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/faculties" element={<GetAllFaculty />} />
        <Route path="/students" element={<GetAllStudnet />} />
        <Route path="/faculty/:id" element={<DetailFaculty />} />
        <Route path='/faculty/add' element={<AddFaculty />} />
        <Route path='/faculty/edit/:id' element={<EditFaculty />} />
      </Route>
    </Routes>  
  </BrowserRouter>
);
