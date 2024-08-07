// app/page.js
'use client';

import React, { useState } from 'react';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';
import Container from '@mui/material/Container';

export default function Home() {
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [update, setUpdate] = useState(false);

  return (
    <Container>
      <h1>Pantry Tracker</h1>
      <PantryForm item={itemToUpdate} update={update} setUpdate={setUpdate} />
      <PantryList setItemToUpdate={setItemToUpdate} setUpdate={setUpdate} />
    </Container>
  );
}