import { Button, Title, Text, Container } from '@mantine/core';

import {Routes, Route, Link} from "react-router-dom"
import ToursPage from './pages/allTours/allTours';
import TourDetails from './pages/tourDetails/tourdetails';

export default function App() {
  return (
    <Routes>
      <Route path='/allTours' element={<ToursPage/>}/>
      <Route path='/tour/:id' element={<TourDetails/>}/>
    </Routes>
  );
}

