import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleOnSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
