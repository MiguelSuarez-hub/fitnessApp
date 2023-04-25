import React from 'react';
import { Stack, Typography, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      alt: 'Body Part'
    },
    {
      icon: TargetImage,
      name: target,
      alt: 'Target'
    },
    {
      icon: EquipmentImage,
      name: equipment,
      alt: 'Equipment'
    }
  ];

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center'
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack
        sx={{
          gap: { lg: '35px', xs: '20px'}
        }}
      >
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong {name} is one of the best exercises to target your {target}. It will help your mood and gain energy.       
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction='row'
            gap='24px'
            alignItems='center'
          >
            <Button
              sx={{
                backgroundColor: '#fff',
                borderRadius: '50%',
                width: '100px',
                height:'100px'
              }}
            >
              <img src={item.icon} alt={item.alt} />
            </Button>
            <Typography variant='h5' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail