import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The WAy", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Return", value: "return" },
];

const Order = () => {
  return (
    <div className="px-5 lg:px-20">
      <Grid container spacing={8}>
        <Grid item xs={3.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5 ml-12">
            <h1 className="font-bold text-lg"> Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold"> Order status</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4  w-4 border-gry-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600 "
                    htmlFor={option.value}
                  >
                    {" "}
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
<div className="space-y-5">
   {[1,1,1,1,1].map((item)=> <OrderCard />)}
</div>
         
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
