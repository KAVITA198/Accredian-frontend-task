import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ReferAndEarn from './ReferAndEarn';
import AllReferrals from './AllReferrals';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Referral System
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Refer & Earn
            </Button>
            <Button color="inherit" component={Link} to="/all-referrals">
              All Referrals
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<ReferAndEarn />} />
          <Route path="/all-referrals" element={<AllReferrals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


