import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function AllReferrals() {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3002/api/referrals');
        console.log(response)
        setReferrals(response.data);
      } catch (error) {
        console.error('Error fetching referrals:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        All Referrals
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Referrer Name</TableCell>
              <TableCell>Referrer Email</TableCell>
              <TableCell>Referee Name</TableCell>
              <TableCell>Referee Email</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {referrals.map((referral) => (
              <TableRow key={referral.id}>
                <TableCell>{referral.id}</TableCell>
                <TableCell>{referral.referrerName}</TableCell>
                <TableCell>{referral.referrerEmail}</TableCell>
                <TableCell>{referral.refereeName}</TableCell>
                <TableCell>{referral.refereeEmail}</TableCell>
                <TableCell>{new Date(referral.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default AllReferrals;
