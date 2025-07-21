import { Button, Title, Text, Container } from '@mantine/core';
import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import ToursPage from './pages/allTours/allTours';
import TourDetails from './pages/tourDetails/tourdetails';

export default function App() {
  return (
    <div className='rootContainer'>
      <Routes>
        <Route path='/' element={}/>
        <Route path='/allTours' element={<ToursPage />} />
        <Route path='/tour/:id' element={<TourDetails />} />
      </Routes>
    </div>
  );
}

