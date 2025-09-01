import React from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import AddressCard from "../addressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../state/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit =(e) =>{
    e.preventDefault();
   
    const data= new FormData(e.currentTarget);
    const address ={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get('data'),
      state:data.get("state"),
      zipCode:data.get("zipCode"),
      mobile :data.get("phoneNumber")

    }
    const orderData={address,navigate}
dispatch(createOrder(orderData));
     console.log("address",address,)
  }
  return (
    <div>
      <Grid container spacing={5}>
        {/* AddressCard on the left */}
        
          <Grid  xs ={12} lg ={5} className="border rounded-e-md shadow-md h-[30.5rem]  w-[25.5rem] overflow-y-scroll p-5">
            <div className="p-5 py-7 border-b cursor-pointer">
               <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "rgb(145,85,253)" }}
              size="large"
              variant="contained"
            >
              Deliver here
            </Button>
              </div>
          </Grid>
        

          
          
            

        {/* Form on the right */}
        <Grid item xs={12} lg={7} >
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>  
              <Grid container spacing={3}>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                
                
               
              </Grid>
              <Grid item xs={12} >
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
               <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Pin code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, bgcolor: "rgb(145,85,253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddform;
