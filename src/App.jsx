import { Button, Title, Text, Container } from '@mantine/core';

import {Routes, Route, Link} from "react-router-dom"
import ToursPage from './pages/allTours/allTours';

export default function App() {
  return (
    <Routes>
      <Route path='/allTours' element={<ToursPage/>}/>
    </Routes>
  );
}

