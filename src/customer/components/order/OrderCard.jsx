import React from "react";
import { Grid } from "@mui/material";
import jeans from "./img/jeans.jpeg";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

  const navigate =useNavigate();

  return (
    <div onClick={() =>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={11} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={jeans}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size :M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2} className=" ml-7 space-x-5 " >
          <p>1099</p>
        </Grid>
        <Grid item xs={4}  className="ml-12  space-x-5 ">
          
         {true && <div>
          <p>
          <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
            <span>Delivered On March 03</span>
          </p>
            <p className="text-xs">
              Your Item Has Been Delivered
            </p>
          </div>}
         {false && <p>
            <span>
              Expected Delivery On Mar 03
            </span>
          </p>}
        </Grid>
      </Grid>
      
    </div>
  );
};

export default OrderCard;
