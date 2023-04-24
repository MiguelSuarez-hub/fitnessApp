import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    console.log(search);
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={600}
        sx={{
          fontSize: { md: '44px', xs: '30px'}
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises You <br /> Should Know
      </Typography>
      <Box>
        <TextField 
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: { lg: '800px', md: '650px', xs: '350px'},
            backgroundColor: "#fff"
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Excercises'
          type='text'
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: "#FFF",
            textTransform: "none",
            width: { md: '175px', xs: '80px'},
            fontSize: { md: '20px', xs: '14px'},
            height: '56px',
            position: 'aboslute',
            right: '0'
          }}
          onClick={handleSearch}
        >Search</Button>
      </Box>
      <Box 
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px'
        }}  
      >
        <HorizontalScrollbar 
          data={bodyParts} 
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises