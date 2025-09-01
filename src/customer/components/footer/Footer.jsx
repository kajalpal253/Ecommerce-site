import {  Typography, Button, Link } from "@mui/material";
 import Grid from '@mui/material/Grid';


import React from "react";

const Footer =() => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10 "
        
        container
        spacing={30}
        sx={{ bgcolor: "black", colors: "white", py: 3 }}
      >
        <Grid xs={12} sm={6} mb={3} >
          <Typography className="pb-5 " variant="h6">
            {" "}
            Company
          </Typography>
          <div>
            {" "}
            <Button className="pb-5"  gutterBottom variant="h6">
              About
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5"  gutterBottom variant="h6" >
              Blog
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5"gutterBottom variant="h6" >
              {" "}
              Press
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" gutterBottom variant="h6" >
              {" "}
              Partners
            </Button>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={5} >
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              Marketing{" "}
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              Analytics
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5"  gutterBottom variant="h6" >
              {" "}
              Commerce
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5"  gutterBottom variant="h6" >
              {" "}
              Support
            </Button>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={5} >
          <Typography className="pb-5" gutterBottom variant="h6">
            {" "}
            Documentation
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              Guides
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              API Status
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              {" "}
              Press
            </Button>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={5}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" gutterBottom variant="h6" >
              Claim
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5"  gutterBottom variant="h6" >
              Privacy
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5"  gutterBottom variant="h6" >
              {" "}
              Press
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5"  gutterBottom variant="h6" >
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className='pt-1'  xs={18} ml={55}  mt={-19} >
            <Typography variant="body2" component="div" align="center">
              &copy; 2025 My Company All rights reserved.
              </Typography>
              <Typography variant="body2" component="div" align="center">
              Made with love by me
              </Typography>
              <Typography variant="body2" component="p" align="center">
                Icons made by{' '}
                <Link  href="http://www.Feepik" color="inherit" underline="always" >
                Feepik
                 </Link>{'  '}
                 from{' '}
                 <Link href="http://www.flaticon.com" color="inherit" underline="always">
                 www.flaticon.com</Link>
              </Typography>

        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
