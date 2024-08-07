// components/PantryForm.js
import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PantryForm = ({ item, update, setUpdate }) => {
  const [name, setName] = useState(item ? item.name : '');
  const [quantity, setQuantity] = useState(item ? item.quantity : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (update) {
      const docRef = doc(db, 'pantry', item.id);
      await updateDoc(docRef, { name, quantity });
      setUpdate(false);
    } else {
      await addDoc(collection(db, 'pantry'), { name, quantity });
    }
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {update ? 'Update Item' : 'Add Item'}
      </Button>
    </form>
  );
};

export default PantryForm;