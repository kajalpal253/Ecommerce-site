import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import OrderTracker from './OrderTracker'
import {  Grid ,Box} from '@mui/material'
import jeans from './img/jeans.jpeg'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'


const OrderDetail = () => {
  return (
    <div className=' px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
          <AddressCard/> 
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
         <Grid item xs={12} md={10} lg={8} sx={{ mx: 'auto' }}>

            {[1,1,1,1,1].map((item) =><Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:'center', justifyContent:"space-between"}} 
            >
                <Grid item xs={6}>
                    <div  className='flex items-center space-x- '>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src={jeans} alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'> Women Classic Dress</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'> <span> Color :Black</span> <span>Size :M</span></p>
                            <p>Seller : Linaria</p>
                            <p>1099</p>
                        </div>
                    </div>

                </Grid>
                <Grid item  >
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>Rate & Review product</span>
                         </Box>

                </Grid>
            </Grid>
            )}
            
        </Grid>
      
    </div>
  )
}

export default OrderDetail
