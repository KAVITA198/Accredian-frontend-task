import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box, TextField, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function ReferAndEarn() {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3002/api/referrals', data);
      console.log(response.data);
      alert('Referral submitted successfully.');
      handleClose();
    } catch (error) {
      console.error('There was an error submitting the referral!', error);
      alert('Failed to submit referral.');
    }
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Refer a course to your friends and earn rewards!
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Refer Now
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            Refer a Course
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="referrerName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referrer name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Your Name"
                      fullWidth
                      error={!!errors.referrerName}
                      helperText={errors.referrerName ? errors.referrerName.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="referrerEmail"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Referrer email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Enter a valid email address'
                    }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Your Email"
                      fullWidth
                      error={!!errors.referrerEmail}
                      helperText={errors.referrerEmail ? errors.referrerEmail.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="refereeName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referee name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Friend's Name"
                      fullWidth
                      error={!!errors.refereeName}
                      helperText={errors.refereeName ? errors.refereeName.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="refereeEmail"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Referee email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Enter a valid email address'
                    }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Friend's Email"
                      fullWidth
                      error={!!errors.refereeEmail}
                      helperText={errors.refereeEmail ? errors.refereeEmail.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}

export default ReferAndEarn;
