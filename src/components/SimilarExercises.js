import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box
      sx={{
        mt: { lg: '100px', xs: '0'}
      }}  
    >
      <Typography
        variant='h3'
        mb='33px'
      >
        Similar <span style={{color: '#FF2625', textTransform: 'capitalize'}}>Target</span> exercises 
      </Typography>
      {/* <Stack 
        direction='row' 
        sx={{
          p: '2', 
          position: 'relative',
          gap: '30px'
        }}
      >
        {targetMuscleExercises.length ? 
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {targetMuscleExercises.map((item, idx) => (
            <ExerciseCard key={idx} exercise={item} />
          ))}
        </ScrollMenu> : <Loader />}
      </Stack> */}

      <Stack 
        direction='row' 
        sx={{
          p: '2', 
          position: 'relative',
        }}
      >
        {targetMuscleExercises ? 
        <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      
      <Typography
        variant='h3'
        mb='33px'
      >
        Similar <span style={{color: '#FF2625', textTransform: 'capitalize'}}>Equipment</span> exercises 
      </Typography>
      {/* <Stack 
        direction='row' 
        sx={{
          p: '2', 
          position: 'relative',
          gap: '30px'
        }}
      >
        {equipmentExercises.length ? 
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {equipmentExercises.map((item, idx) => (
            <ExerciseCard key={idx} exercise={item} />
          ))}
        </ScrollMenu> : <Loader />}
      </Stack> */}

      <Stack 
        direction='row' 
        sx={{
          p: '2', 
          position: 'relative',
        }}
      >
        {equipmentExercises ? 
        <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises